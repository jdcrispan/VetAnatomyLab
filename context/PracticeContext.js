import React, { createContext, useState, useEffect, useContext } from "react";
import { getPractices, savePractices } from "../services/AsyncStorageService";
import { AuthContext } from "./AuthContext";

export const PracticeContext = createContext();

export function PracticeProvider({ children }) {
  const [practices, setPractices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      loadPractices();
    }
  }, [user]);

  const loadPractices = async () => {
    const storedPractices = await getPractices();
    setPractices(storedPractices);
  };

  const addPractice = async (practice) => {
    const newPractice = {
      id: Date.now().toString(),
      completed: false,
      isNew: true,
      ...practice,
    };

    const updated = [...practices, newPractice];
    setPractices(updated);
    await savePractices(updated);
  };

  const updatePractice = async (updatedPractice) => {
    const updated = practices.map((p) =>
      p.id === updatedPractice.id ? updatedPractice : p
    );
    setPractices(updated);
    await savePractices(updated);
  };

  const deletePractice = async (id) => {
    const updated = practices.filter((p) => p.id !== id);
    setPractices(updated);
    await savePractices(updated);
  };

  const toggleCompleted = async (id) => {
    const updated = practices.map((p) =>
      p.id === id ? { ...p, completed: !p.completed } : p
    );
    setPractices(updated);
    await savePractices(updated);
  };

  const markAsViewed = async (id) => {
  const updated = practices.map((p) =>
    p.id === id ? { ...p, isNew: false } : p
  );

  setPractices(updated);
  await savePractices(updated);
};

  return (
    <PracticeContext.Provider
      value={{
        practices,
        addPractice,
        updatePractice,
        deletePractice,
        toggleCompleted,
        markAsViewed,
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
}
