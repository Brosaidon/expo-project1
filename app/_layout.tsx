import { BankProvider } from "@/context/bankProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function BuildLayout() {
  return (
    <>
      <BankProvider>
        <Stack />
        <StatusBar style="auto" />
      </BankProvider>
    </>
  );
}
