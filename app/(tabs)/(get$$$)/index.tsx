import { ProgressBar } from "@/components/progress-bar";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

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
    <View>
      <Pressable onPress={multicrease} style={{ flexDirection: "row" }}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={{ width: 100, height: 100 }}
        />
      </Pressable>
      <Pressable onPress={increase}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>Some text here...</Text>
      </Pressable>
      <Pressable onPress={decrease}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={{ width: 100, height: 100 }}
        />
      </Pressable>
      <Text>{value}</Text>
      <ProgressBar progress={value} />
    </View>
  );
}
