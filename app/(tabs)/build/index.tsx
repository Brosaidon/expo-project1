import { mockedBuildings } from "@/scripts/buildings";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BuildingsScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      {mockedBuildings.map((b) => (
        <Pressable
          onPress={() => router.push(`/build/${b.id}`)}
          key={b.id}
          style={{ flex: 1, flexDirection: "column", padding: 10 }}
        >
          <Text style={{ fontSize: 20, flex: 1 }}>
            {b.name}+ " "+
            {b.category}
          </Text>
          <View style={styles.resorceBar}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/images/gold.webp")}
                style={{ width: 20, height: 20, tintColor: "#FFD700" }}
              />
              <Text>{b.gold}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/images/log.webp")}
                style={{ width: 20, height: 20, tintColor: "#8d3a0344" }}
              />
              <Text>{b.tree}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  resorceBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
  },
});
