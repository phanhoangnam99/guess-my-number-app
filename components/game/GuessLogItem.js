import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 2,
    borderColor: Colors.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
