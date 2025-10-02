import Gyros from "@/components/gyros";
import { ProgressBar } from "@/components/progress-bar";
import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { BlurView } from "expo-blur";
import { Image, ImageBackground } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
      contentFit="fill"
    >
      {bank.wizardTower && (
        <Image
          source={require("@/assets/images/wt.png")}
          style={styles.wizardTower}
          contentFit="fill"
        />
      )}
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
            {mockedBuildings.map((b) => (
              <Text key={b.bankRef}>
                {b.name} : {bank[b.bankRef] ? "Owned" : "Not Owned"}
              </Text>
            ))}
          </View>
        </View>
        <BlurView intensity={50} tint="light" style={styles.buttonContainer}>
          <Pressable onPress={startGoldProgress} style={styles.clickerRow}>
            <Image
              source={require("@/assets/images/gold.webp")}
              style={{ width: 70, height: 70, tintColor: "#FFD700" }}
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
              style={{ width: 70, height: 70, tintColor: "#a6480aff" }}
            />
            <ProgressBar
              progress={treeProgress}
              onComplete={() => {
                increaseTree();
                setTreeProgress(0); // reset bar
              }}
            />
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  clickerRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  wizardTower: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {},
});
