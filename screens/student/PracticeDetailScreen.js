import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { PracticeContext } from "../../context/PracticeContext";
import CustomHeader from "../../components/CustomHeader";


export default function PracticeDetailScreen({ route, navigation }) {
  const { practice } = route.params;
  const { markAsViewed } = useContext(PracticeContext);

  useEffect(() => {
  if (practice?.isNew) {
    markAsViewed(practice.id);
  }
  }, []);


 return (
  <View style={{ flex: 1 }}>
    <CustomHeader
      title="Detalle de Práctica"
      navigation={navigation}
    />

    <View style={styles.container}>
      <Text style={styles.title}>{practice.title}</Text>

      <Text style={styles.label}>Materiales:</Text>
      <Text style={styles.content}>{practice.materials}</Text>

      <Text
        style={{
          color: practice.completed ? "green" : "red",
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        {practice.completed ? "Completada" : "Pendiente"}
      </Text>
    </View>
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
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
});