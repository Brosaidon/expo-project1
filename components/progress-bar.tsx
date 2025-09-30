import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type ProgressBarProps = {
  duration?: number; //tid att fylla progressBar.
  width?: number; //hur lång bar.
  onComplete?: () => void; //vad ska hända.
  autoFill?: Boolean; //ska den köras automatiskt?
  progress?: number; //
};

export function ProgressBar({
  duration = 5000,
  width = 150,
  onComplete,
  autoFill = false,
  progress: externalProgress,
}: ProgressBarProps) {
  const internalProgress = useRef(new Animated.Value(0)).current;
  const animatedWidth = externalProgress
    ? externalProgress * width
    : internalProgress;

  useEffect(() => {
    if (autoFill) {
      Animated.timing(internalProgress, {
        toValue: width,
        duration,
        useNativeDriver: false,
      }).start(() => {
        if (onComplete) onComplete();

        //internalProgress.setValue(0);
      });
    }
  }, [autoFill]);

  return (
    <View style={styles.barOuter}>
      <Animated.View style={[styles.barInner, { width: animatedWidth }]} />
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
