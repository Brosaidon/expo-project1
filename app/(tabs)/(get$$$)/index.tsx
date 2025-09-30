import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TabsHome() {
  const [value, setValue] = useState(0);

  function increase() {
    setValue(value + 1);
  }
  function decrease() {
    setValue(value - 1);
  }
  function multicrease() {
    setValue(value * 1);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Gyros />
      </View>
      <Pressable onPress={increase} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/gold.webp")}
          style={{ width: 100, height: 100, tintColor: "#FFD700" }}
        />
        <ProgressBar progress={value} />
      </Pressable>
      <Pressable onPress={increase} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/log.webp")}
          style={{ width: 100, height: 100, tintColor: "#8d3a0344" }}
        />
        <ProgressBar progress={value} />
      </Pressable>
      <Pressable onPress={increase} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={{ width: 100, height: 100 }}
        />
        <ProgressBar progress={value} />
      </Pressable>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clickerRow: {
    backgroundColor: "#003333",
    flexDirection: "row",
    alignItems: "center",
  },
});
