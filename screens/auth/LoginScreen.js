import React, { useState, useContext } from "react";
import { colors } from "../../utils/theme";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import {
  getUsers,
  saveSession,
} from "../../services/AsyncStorageService";
import { TouchableOpacity } from "react-native";


export default function LoginScreen({ navigation }) {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const users = await getUsers();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      Alert.alert("Error", "Correo o contraseña incorrectos");
      return;
    }

    await saveSession(foundUser);
    setUser(foundUser);
  };

  return (
  <View style={[styles.container, { backgroundColor: colors.background }]}>
    <View style={styles.card}>
      <Text style={styles.title}>VetAnatomy Lab</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate("Register")}
      >
        ¿No estás registrado? Regístrate aquí
      </Text>
    </View>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.card,
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: colors.accent,
    fontWeight: "bold",
  },
});