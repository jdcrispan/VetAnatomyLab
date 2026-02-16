import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { PracticeContext } from "../../context/PracticeContext";
import { Picker } from "@react-native-picker/picker";

export default function CreatePracticeScreen({ navigation }) {
  const { addPractice } = useContext(PracticeContext);

  const [title, setTitle] = useState("");
  const [materials, setMaterials] = useState("");
  const [species, setSpecies] = useState("canino");
  const [date, setDate] = useState("");

  const handleCreatePractice = () => {
    if (!title || !materials || !date) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    addPractice({
      id: Date.now().toString(),
      title,
      materials,
      species,
      date,
      completed: false,
      isNew: true,
    });

    Alert.alert("Éxito", "Práctica creada correctamente");

    navigation.goBack(); //vuelve al TeacherHome
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Práctica</Text>

      <TextInput
        placeholder="Título de la práctica"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Materiales necesarios"
        style={styles.input}
        value={materials}
        onChangeText={setMaterials}
        multiline
      />

      <Text style={{ marginTop: 10 }}>Especie</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={species}
          onValueChange={(value) => setSpecies(value)}
        >
          <Picker.Item label="Canino" value="canino" />
          <Picker.Item label="Felino" value="felino" />
          <Picker.Item label="Equino" value="equino" />
        </Picker>
      </View>

      <TextInput
        placeholder="Fecha (ej: 15 de Enero)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Button
        title="Guardar Práctica"
        onPress={handleCreatePractice}
      />
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
});
