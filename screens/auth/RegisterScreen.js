import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../../context/AuthContext";
import {
  getUsers,
  saveUsers,
  saveSession,
} from "../../services/AsyncStorageService";

export default function RegisterScreen({ navigation }) {
  const { setUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const users = await getUsers();

    const emailExists = users.find((u) => u.email === email);
    if (emailExists) {
      Alert.alert("Error", "El correo ya está registrado");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role,
    };

    const updatedUsers = [...users, newUser];
    await saveUsers(updatedUsers);
    await saveSession(newUser);

    setUser(newUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Correo"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Repetir Contraseña"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text>Rol</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          onValueChange={(value) => setRole(value)}
        >
          <Picker.Item label="Estudiante" value="student" />
          <Picker.Item label="Profesor" value="teacher" />
        </Picker>
      </View>

      <Button title="Registrarse" onPress={handleRegister} />

      <Text
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    color: "blue",
    textAlign: "center",
  },
});