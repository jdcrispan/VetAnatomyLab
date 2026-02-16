import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PracticeContext } from "../../context/PracticeContext";
import { AuthContext } from "../../context/AuthContext";

export default function TeacherHomeScreen({ navigation }) {
  const { practices, deletePractice, toggleCompleted } =
    useContext(PracticeContext);

  const { logout, user } = useContext(AuthContext);
  const getSpeciesColor = (species) => {
  switch (species) {
    case "canino":
      return "#FBC02D"; // amarillo
    case "felino":
      return "#8E24AA"; // morado
    case "equino":
      return "#1976D2"; // azul
    default:
      return "#777";
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido Profesor {user?.name}
      </Text>

      <Button
        title="Crear Nueva Práctica"
        onPress={() => navigation.navigate("CreatePractice")}
      />

      <FlatList
        data={practices}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.speciesLabel}>
                    {"  (" + item.species?.toUpperCase() + ")"}
                </Text>
            </View>

            <Text
            style={[
                styles.date,
                { color: getSpeciesColor(item.species) }
            ]}
            >
            {item.date}
            </Text>

            <Text>{item.materials}</Text>
            <Text
              style={{
                color: item.completed ? "green" : "red",
                marginTop: 5,
              }}
            >
              {item.completed ? "Completada" : "Pendiente"}
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => toggleCompleted(item.id)}
              >
                <Text style={styles.buttonText}>✔</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.smallButton, { backgroundColor: "red" }]}
                onPress={() => deletePractice(item.id)}
              >
                <Text style={styles.buttonText}>🗑</Text>
              </TouchableOpacity>
              <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("EditPractice", {
                  practice: item,
                })
              }
            />
            </View>
          </View>
        )}
      />

      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
  },

  speciesLabel: {
  fontSize: 12,
  color: "#777",
},

date: {
  fontStyle: "italic",
  marginTop: 4,
},


});