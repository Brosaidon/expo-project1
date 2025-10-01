import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { Button } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function BuildDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { buyBuilding, bank } = useBank();
  const building = mockedBuildings.find((b) => b.id === id);
  if (!building) return <Text>Building not found</Text>;
  return (
    <>
      <View>
        <Text>{building.name}</Text>
      </View>
      <View style={{ height: 50 }}>
        {!bank[building.bankRef] && (
          <Button
            style={styles.buyBuildingButton}
            onTouchEnd={() =>
              buyBuilding(building.bankRef, {
                gold: building.gold,
                tree: building.tree,
              })
            }
          >
            BUY
          </Button>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  buyBuildingButton: {
    alignItems: "center",
  },
});
