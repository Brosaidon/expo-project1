import { mockedTrips } from "@/scripts/trip";
import { ScrollView, Text } from "react-native";

export default function TripsScreen() {

  return (<ScrollView>
    {mockedTrips.map((t) => (
      <Text key={t.id}>
        {t.from} 
        {t.to}
      </Text>
    ))}
    </ScrollView>)
}