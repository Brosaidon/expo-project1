import { useBank } from "@/context/bankProvider";
import { mockedBuildings } from "@/scripts/buildings";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BuildingsScreen() {
  const router = useRouter();
  const { bank } = useBank();

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {bank.wizardTower && (
        <Image
          source={require("@/assets/images/wt.png")}
          style={styles.wizardTower}
          resizeMode="contain"
        />
      )}
      <ScrollView style={{ marginTop: 80 }}>
        {mockedBuildings.map((b) => (
          <Pressable
            onPress={() => router.push(`/build/${b.id}`)}
            key={b.id}
            style={{ flex: 1, flexDirection: "column", padding: 10 }}
          >
            <Text style={{ fontSize: 20, flex: 1, color: "#ffff" }}>
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
                  style={{ width: 20, height: 20, tintColor: "#a6480aff" }}
                />
                <Text>{b.tree}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  resorceBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  wizardTower: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
