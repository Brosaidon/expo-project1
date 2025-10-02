import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TabsHome() {
  const [goldKey, setGoldKey] = useState(0);
  const [treeKey, setTreeKey] = useState(0);
  const [treeProgress, setTreeProgress] = useState(0);
  const { bank, increaseGold, increaseTree } = useBank();

  function startGoldProgress() {
    setGoldKey((prev) => prev + 1);
  }

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {bank.wizardTower}
      <Image
        source={require("@/assets/images/wt.png")}
        style={styles.wizardTower}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Gyros
            onGyroTrigger={() => {
              setTreeProgress((prev) => {
                const newProgress = prev + 0.2; // 1 av 5
                return newProgress > 1 ? 1 : newProgress;
              });
            }}
          />
          <View>
            <Text>{bank.gold}</Text>
            <Text>{bank.tree}</Text>
            {mockedBuildings.map((b) => (
              <Text key={b.bankRef}>
                {b.name} : {bank[b.bankRef] ? "Owned" : "Not Owned"}
              </Text>
            ))}
          </View>
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
            source={require("@/assets/images/log.webp")}
            style={{ width: 100, height: 100, tintColor: "#8d3a0344" }}
          />
          <ProgressBar
            progress={treeProgress}
            onComplete={() => {
              increaseTree();
              setTreeProgress(0); // reset bar
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  clickerRow: {
    backgroundColor: "#003333",
    flexDirection: "row",
    alignItems: "center",
  },
  background: {
    flex: 1, // <-- fills the entire screen
    width: "100%", // stretch horizontally
    height: "100%",
  },
  wizardTower: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
