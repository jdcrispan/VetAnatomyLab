import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { PracticeContext } from "../../context/PracticeContext";

export default function EditPracticeScreen({ route, navigation }) {
  const { practice } = route.params;
  const { updatePractice } = useContext(PracticeContext);

  const [title, setTitle] = useState(practice.title);
  const [materials, setMaterials] = useState(practice.materials);
  const [date, setDate] = useState(practice.date);

  const handleUpdate = () => {
    updatePractice({
      ...practice,
      title,
      materials,
      date,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Práctica</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        value={materials}
        onChangeText={setMaterials}
        multiline
      />

      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Button title="Guardar Cambios" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
