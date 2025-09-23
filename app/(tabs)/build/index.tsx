import { mockedBuildings } from "@/scripts/buildings";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function TripsScreen() {
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
          <Text>{b.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
