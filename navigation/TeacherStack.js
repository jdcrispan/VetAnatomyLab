import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherHomeScreen from "../screens/teacher/TeacherHomeScreen";
import CreatePracticeScreen from "../screens/teacher/CreatePracticeScreen";
import EditPracticeScreen from "../screens/teacher/EditPracticeScreen";

const Stack = createNativeStackNavigator();

export default function TeacherStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} />
      <Stack.Screen name="CreatePractice" component={CreatePracticeScreen} />
      <Stack.Screen name="EditPractice" component={EditPracticeScreen} />
    </Stack.Navigator>
  );
}