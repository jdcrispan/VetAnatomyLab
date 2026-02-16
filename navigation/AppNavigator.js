import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TeacherStack from "./TeacherStack";
import StudentStack from "./StudentStack";
import { AuthContext } from "../context/AuthContext";

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? (
        <AuthStack />
      ) : user.role === "teacher" ? (
        <TeacherStack />
      ) : (
        <StudentStack />
      )}
    </NavigationContainer>
  );
}
