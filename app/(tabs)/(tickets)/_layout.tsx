import { Stack } from "expo-router";

export default function TicketsLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{}} />
      <Stack.Screen name="index" options={{ title: "Tickets" }} />
    </Stack>
  );
}
