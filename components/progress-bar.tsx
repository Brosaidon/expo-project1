import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
  progress: number;
};
export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.barOuter}>
      <View style={[{ width: progress }, styles.barInner]} />
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
