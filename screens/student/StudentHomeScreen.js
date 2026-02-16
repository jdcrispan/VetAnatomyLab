import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function StudentHomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>VetAnatomy Lab</Text>
        <Text style={styles.subtitle}>Anatomía Veterinaria</Text>
        <Text style={styles.description}>
          Bienvenido a tu asistente de laboratorio veterinario
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Accesos Rápidos</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("StudentPractices")}
      >
        <Text style={styles.cardTitle}>Prácticas de Anatomía</Text>
        <Text style={styles.cardSubtitle}>
          Caninos, Felinos y Equinos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Materials")}
      >
        <Text style={styles.cardTitle}>Materiales</Text>
        <Text style={styles.cardSubtitle}>
          Lista de materiales necesarios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Norms")}
      >
        <Text style={styles.cardTitle}>Normas de Laboratorio</Text>
        <Text style={styles.cardSubtitle}>
          Seguridad y conducta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerText}>
          Mantente al día con tus prácticas de anatomía veterinaria
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout} style={styles.logout}>
        <Text style={{ color: "white" }}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5F1",
  },

  header: {
    backgroundColor: "#1E8E5F",
    padding: 25,
  },

  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "white",
    marginTop: 5,
  },

  description: {
    marginTop: 15,
    color: "white",
  },

  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 16,
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  cardSubtitle: {
    color: "#777",
    marginTop: 5,
  },

  footerButton: {
    backgroundColor: "#7ED6A7",
    margin: 20,
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
  },

  footerText: {
    color: "white",
    textAlign: "center",
  },

  logout: {
    backgroundColor: "#1E8E5F",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
});