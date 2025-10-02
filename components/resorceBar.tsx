import { useBank } from "@/context/bankProvider";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// commit icon 🍺
export default function ResorceBar() {
  const { bank } = useBank();

  return (
    <BlurView intensity={50} tint="dark" style={styles.resorceBar}>
      <View style={styles.barComponent}>
        <Image
          source={require("@/assets/images/gold.webp")}
          style={{ width: 20, height: 20, tintColor: "#FFD700" }}
        />
        <Text>{bank.gold}</Text>
      </View>
      <View style={styles.barComponent}>
        <Image
          source={require("@/assets/images/log.webp")}
          style={{ width: 20, height: 20, tintColor: "#8d3a0344" }}
        />
        <Text>{bank.tree}</Text>
      </View>
    </BlurView>
  );
}
const styles = StyleSheet.create({
  resorceBar: {
    position: "absolute",
    top: 75,
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
  barComponent: {
    flexDirection: "row",
  },
});
