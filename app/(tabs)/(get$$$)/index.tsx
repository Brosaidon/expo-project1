import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useBank } from "@/context/bankProvider";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
      <Pressable onPress={() => increaseGold()} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/gold.webp")}
          style={{ width: 100, height: 100, tintColor: "#FFD700" }}
        />
        <ProgressBar progress={bank.gold} />
      </Pressable>
      <Pressable onPress={() => increaseTree()} style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/log.webp")}
          style={{ width: 100, height: 100, tintColor: "#8d3a0344" }}
        />
        <ProgressBar progress={bank.tree} />
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
