import { useBank } from "@/context/bankProvider";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, Text } from "react-native";
// commit icon 🍺
export default function ResorceBar() {
  const { bank } = useBank();

  return (
    <BlurView intensity={50} tint="dark" style={styles.resorceBar}>
      <Text>{bank.gold}</Text>
      <Text>{bank.tree}</Text>
    </BlurView>
  );
}
const styles = StyleSheet.create({
  resorceBar: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
