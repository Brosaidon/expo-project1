import { mockedTrips } from "@/scripts/trip";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function TripsScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      {mockedTrips.map((t) => (
        <Pressable
          onPress={() => router.push(`/trips/${t.id}`)}
          key={t.id}
          style={{ flex: 1, flexDirection: "column", padding: 10 }}
        >
          <Text style={{ fontSize: 20, flex: 1 }}>
            {t.from}
            {t.to}
          </Text>
          <Text>{t.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
