import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { Button } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BuildDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { bank, buy } = useBank();

  return (
    <>
      <View>
        <Text>{mockedBuildings[0].name}</Text>
      </View>
      <View style={{ height: 50 }}>
        <Button onTouchEnd={() => buy(mockedBuildings[0].bankRef)}>BUY</Button>
      </View>
    </>
  );
}
