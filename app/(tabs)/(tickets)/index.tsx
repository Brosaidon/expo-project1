import { useState } from "react";
import { Button, Text, View } from "react-native";

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
      <Button title="GET!" onPress={multicrease} />
      <Button title="INCREASE" onPress={increase} />
      <Button title="FOR... well" onPress={decrease} />
      <Text>{value}</Text>
    </View>
  );
}
