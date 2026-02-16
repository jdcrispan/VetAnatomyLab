import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StudentHomeScreen from "../screens/student/StudentHomeScreen";
import StudentPracticesScreen from "../screens/student/StudentPracticesScreen";
import PracticeDetailScreen from "../screens/student/PracticeDetailScreen";
import MaterialsScreen from "../screens/student/MaterialsScreen";
import NormsScreen from "../screens/student/NormsScreen";

const Stack = createNativeStackNavigator();

export default function StudentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StudentHome"
        component={StudentHomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="StudentPractices"
        component={StudentPracticesScreen}
        options={{ title: "Prácticas de Anatomía" }}
      />

      <Stack.Screen
        name="PracticeDetail"
        component={PracticeDetailScreen}
        options={{ title: "Detalle de Práctica" }}
      />

      <Stack.Screen
        name="Materials"
        component={MaterialsScreen}
        options={{ title: "Materiales" }}
      />

      <Stack.Screen
        name="Norms"
        component={NormsScreen}
        options={{ title: "Normas de Laboratorio" }}
      />
    </Stack.Navigator>
  );
}