import { useBank } from "@/context/bankProvider";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type ProgressBarProps = {
  duration?: number;
};

export function ProgressBar({ duration = 5000 }: ProgressBarProps) {
  const { increaseGold } = useBank();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 150,
      duration,
      useNativeDriver: false,
    }).start(() => {
      increaseGold();
      progress.setValue(0);
    });
  }, []);

  return (
    <View style={styles.barOuter}>
      <Animated.View style={[styles.barInner, { width: progress }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  barOuter: {
    flexDirection: "row",
    backgroundColor: "#8c550cff",
    width: 150,
    borderColor: "#fe89e5ff",
    borderWidth: 3,
    height: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  barInner: {
    backgroundColor: "#8a7963ff",
  },
});
