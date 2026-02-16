import React, { useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";
import { PracticeProvider } from "./context/PracticeContext";


export default function App() {
  useEffect(() => {
    const requestPermissions = async () => {
      
    };

    requestPermissions();
  }, []);

  return (
    <AuthProvider>
      <PracticeProvider>
        <AppNavigator />
      </PracticeProvider>
    </AuthProvider>
  );
}
