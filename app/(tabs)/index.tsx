import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function TabsHome() {
   const [value, setValue] = useState(0);

  function increase() {
    setValue(value + 1);
  }

  return <View>
     <Button title="GET!" onPress={increase} />
     <Button title="IINCREASE" onPress={increase} />
     <Button title="FORESK... well" onPress={increase} />
     <Text>{value}</Text>
    </View>;
}