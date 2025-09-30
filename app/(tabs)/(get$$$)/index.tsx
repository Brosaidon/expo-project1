import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useBank } from "@/context/bankProvider";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const [goldKey, setGoldKey] = useState(0);

function startGoldProgress() {
  setGoldKey((prev) => prev + 1);
}

export default function TabsHome() {
  const { bank, increaseGold, increaseTree } = useBank();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Gyros />
      </View>
      <View>
        <Text>{bank.gold}</Text>
        <Text>{bank.tree}</Text>
      </View>
      <Pressable onPress={startGoldProgress} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/gold.webp")}
          style={{ width: 100, height: 100, tintColor: "#FFD700" }}
        />
        <ProgressBar duration={4000} autoFill onComplete={increaseGold} />
      </Pressable>
      <Pressable onPress={() => increaseTree()} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/log.webp")}
          style={{ width: 100, height: 100, tintColor: "#8d3a0344" }}
        />
        <ProgressBar />
      </Pressable>
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
