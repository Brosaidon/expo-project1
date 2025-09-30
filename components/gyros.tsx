import { Gyroscope } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Gyros() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Gyroscope.addListener((gyroData) => {
      setData(gyroData);
    });

    Gyroscope.setUpdateInterval(500);

    return () => subscription.remove();
  }, []);
  console.log(data.x);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gyroscope:</Text>
      <Text style={styles.text}>x: {data?.x ?? 0}</Text>
      <Text style={styles.text}>y: {data?.y ?? 0}</Text>
      <Text style={styles.text}>z: {data?.z ?? 0}</Text>
      <View style={styles.buttonContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    fontSize: 18,
  },
  text: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b33232ff",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#dfad23ff",
  },
});
