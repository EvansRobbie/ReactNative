import React from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤{hp}</Text>
      </View>
      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(",")}</Text>
      </View>
      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>
          Weakness: {weaknesses.join(",")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    // width: 200,
    // height: 200,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
  },
  hp: {
    fontSize: 22,
    // color: "red",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  typeContainer: {
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  badge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: Platform === "ios" ? 22 : 18,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    marginBottom: 8,
  },
  weaknessesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default PokemonCard;
