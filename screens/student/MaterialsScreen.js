import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";

export default function MaterialsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Materiales" navigation={navigation} />

      <ScrollView style={styles.container}>
        
       <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>🧪</Text>
          <Text style={styles.sectionTitle}>
            Equipo de Protección Personal
          </Text>
        </View>
  
        <Text style={styles.item}>✔ Bata de laboratorio blanca</Text>
        <Text style={styles.item}>✔ Guantes desechables</Text>
        <Text style={styles.item}>✔ Gafas de seguridad</Text>
      </View>

       <View style={styles.sectionCard}>
         <Text style={styles.sectionTitle}>
          <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>🗡️</Text>
          <Text style={styles.sectionTitle}>
            Instrumentos Básicos
          </Text>
        </View>
          
        </Text>
        <Text style={styles.item}>• Pinzas de disección</Text>
        <Text style={styles.item}>• Tijeras anatómicas</Text>
        <Text style={styles.item}>• Bisturí</Text>
       </View>
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },

  sectionCard: {
  backgroundColor: "#F5F5F5",
  borderRadius: 20,
  padding: 18,
  marginBottom: 20,
  elevation: 3,
},

sectionHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},

sectionIcon: {
  fontSize: 22,
  marginRight: 10,
},

sectionTitle: {
  fontSize: 16,
  fontWeight: "bold",
},

item: {
  marginLeft: 5,
  marginBottom: 5,
  color: "#444",
},

});