import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useBank } from "@/context/bankProvider";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TabsHome() {
  const [goldKey, setGoldKey] = useState(0);
  const [treeKey, setTreeKey] = useState(0);
  const [treeProgress, setTreeProgress] = useState(0);

  function startGoldProgress() {
    setGoldKey((prev) => prev + 1);
  }
  const { bank, increaseGold, increaseTree } = useBank();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Gyros
          onGyroTrigger={() => {
            setTreeProgress((prev) => {
              const newProgress = prev + 0.2; // 1 av 5
              if (newProgress >= 1) {
                return 0;
              }
              return newProgress;
            });
          }}
        />
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
        <ProgressBar
          key={goldKey}
          duration={4000}
          autoFill
          onComplete={increaseGold}
        />
      </Pressable>
      <View style={styles.clickerRow}>
        <Image
          source={require("../../../assets/images/log.webp")}
          style={{ width: 100, height: 100, tintColor: "#8d3a0344" }}
        />
        <ProgressBar progress={treeProgress} onComplete={increaseTree} />
      </View>
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
