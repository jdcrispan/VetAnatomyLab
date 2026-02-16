import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { PracticeContext } from "../../context/PracticeContext";
import { Ionicons } from "@expo/vector-icons";


export default function StudentPracticesScreen({ navigation }) {
  const { practices } = useContext(PracticeContext);
  const [filter, setFilter] = useState("all");

  const filteredPractices =
  filter === "all"
    ? practices
    : practices.filter((p) => p.species === filter);

    const getSpeciesEmoji = (species) => {
  switch (species) {
    case "canino":
      return "🐶";
    case "felino":
      return "🐱";
    case "equino":
      return "🐴";
    default:
      return "❓";
  }
};

const getSpeciesBadgeStyle = (species) => {
  switch (species) {
    case "canino":
      return { bg: "#FFF176", text: "#F57F17" }; // amarillo
    case "felino":
      return { bg: "#CE93D8", text: "#4A148C" }; // morado
    case "equino":
      return { bg: "#90CAF9", text: "#0D47A1" }; // azul
    default:
      return { bg: "#E0E0E0", text: "#424242" };
  }
};

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Prácticas de Anatomía"
        navigation={navigation}
      />
        <View style={styles.filterRow}>
            <TouchableOpacity
            style={[styles.filterButton, filter === "all" && styles.active]}
            onPress={() => setFilter("all")}
            >
            <Text>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.filterButton, filter === "canino" && styles.active]}
            onPress={() => setFilter("canino")}
            >
            <Text>Canino</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.filterButton, filter === "felino" && styles.active]}
            onPress={() => setFilter("felino")}
            >
            <Text>Felino</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.filterButton, filter === "equino" && styles.active]}
            onPress={() => setFilter("equino")}
            >
            <Text>Equino</Text>
            </TouchableOpacity>
        </View>


      <View style={styles.container}>
        <FlatList
          data={filteredPractices}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.empty}>
              No hay prácticas disponibles
            </Text>
          }
        renderItem={({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
            navigation.navigate("PracticeDetail", {
                practice: item,
            })
            }
        >
            <View style={styles.row}>
           <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 20, marginRight: 6 }}>
                    {getSpeciesEmoji(item.species)}
                </Text>

                <Text style={styles.title}>{item.title}</Text>
            </View>



            {item.isNew && (
                <View style={styles.badge}>
                <Text style={styles.badgeText}>Nueva</Text>
                </View>
            )}
            </View>

            <Text style={styles.date}>
            📅 {item.date}
            </Text>

            <Text style={styles.materials}>
            {item.materials}
            </Text>

            <View
            style={[
                styles.speciesBadge,
                { backgroundColor: getSpeciesBadgeStyle(item.species).bg }
            ]}
            >
            <Text
                style={[
                styles.speciesText,
                { color: getSpeciesBadgeStyle(item.species).text }
                ]}
            >
                {item.species?.toUpperCase()}
            </Text>
            </View>


            <Text
            style={[
                styles.status,
                {
                color: item.completed
                    ? "#2E7D32"
                    : "#D32F2F",
                },
            ]}
            >
            {item.completed
                ? "✔ Completada"
                : "⏳ Pendiente"}
            </Text>

        </TouchableOpacity>
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F6F8",
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },

  materials: {
    marginTop: 8,
    color: "#555",
  },

  status: {
    marginTop: 12,
    fontWeight: "bold",
  },

  badge: {
    backgroundColor: "#FFA94D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#777",
  },

  filterRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  padding: 10,
  backgroundColor: "#E8F5F1",
},

filterButton: {
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 20,
  backgroundColor: "#DDD",
},

active: {
  backgroundColor: "#7ED6A7",
},

date: {
  marginTop: 5,
  color: "#555",
},

speciesBadge: {
  backgroundColor: "#FFD54F",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 15,
  marginTop: 8,
  alignSelf: "flex-start",
},

speciesText: {
  fontSize: 12,
  fontWeight: "bold",
},

speciesBadge: {
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderRadius: 20,
  marginTop: 8,
  alignSelf: "flex-start",
},

speciesText: {
  fontSize: 12,
  fontWeight: "bold",
},



});