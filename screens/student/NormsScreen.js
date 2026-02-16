import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";

export default function NormsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Normas de Laboratorio" navigation={navigation} />

      <ScrollView style={styles.container}>
        <View style={styles.alertCard}>
          <Text style={styles.alertTitle}>
            ⚠ Reglas Importantes
          </Text>
        </View>

        <View style={styles.alertBox}>
         <Text style={styles.alertTitle}>⚠ ¡Importante!</Text>
         <Text style={styles.alertText}>
          El incumplimiento puede afectar tu evaluación.
         </Text>
       </View>

       <View style={styles.normSection}>
        <Text style={styles.normTitle}>👥 Normas Generales</Text>
        <Text style={styles.normItem}>• Llegar puntual</Text>
        < Text style={styles.normItem}>• Respetar al instructor</Text>
        < Text style={styles.normItem}>• Usar siempre equipo de protección.</Text>
        < Text style={styles.normItem}>• No usar celular durante la práctica.</Text>
        < Text style={styles.normItem}>• Mantener el área limpia y ordenada.</Text>
        < Text style={styles.normItem}>• Seguir instrucciones del profesor.</Text>

      </View>


     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8F8F8",
  },

  alertCard: {
    backgroundColor: "#FDECEA",
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: "#D32F2F",
  },

 alertTitle: {
  fontWeight: "bold",
  color: "#B71C1C",
  marginBottom: 5,
},

  rule: {
    marginBottom: 8,
  },

  alertBox: {
  backgroundColor: "#FFCDD2",
  padding: 15,
  borderRadius: 15,
  marginBottom: 20,
},

alertText: {
  color: "#B71C1C",
},

normSection: {
  backgroundColor: "#FFFFFF",
  padding: 18,
  borderRadius: 20,
  marginBottom: 20,
  elevation: 2,
},

normTitle: {
  fontWeight: "bold",
  marginBottom: 8,
},

normItem: {
  marginBottom: 5,
  color: "#444",
},

});