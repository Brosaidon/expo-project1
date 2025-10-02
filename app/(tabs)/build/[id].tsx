import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { Button } from "@react-navigation/elements";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function BuildDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { buyBuilding, bank } = useBank();
  const building = mockedBuildings.find((b) => b.id === id);
  if (!building) return <Text>Building not found</Text>;
  return (
    <ImageBackground
      source={require("@/assets/images/construction.jpg")}
      style={styles.bg}
      contentFit="fill"
    >
      <View style={{ marginTop: 200 }}>
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
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  buyBuildingButton: {
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  bg: {
    height: "100%",
  },
});
