import { mockedBuildings } from "@/scripts/buildings";
import { Stack } from "expo-router";
// commit icon 💎 🪒
export default function BuildLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="[id]"
        options={(props: any) => ({
          title:
            mockedBuildings.find((b) => b.id === props.route.params?.id)
              ?.name || "building",
        })}
      />
    </Stack>
  );
}
