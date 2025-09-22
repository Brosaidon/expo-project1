import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(tickets)"
        options={{
          title: "Tickets",
          tabBarIcon: (props) => (
            <FontAwesome6
              name="money-check-dollar"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: (props) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="goat"
                size={props.size}
                color={props.color}
              />
              <Text style={{ color: props.color, fontSize: props.size }}>
                O
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
