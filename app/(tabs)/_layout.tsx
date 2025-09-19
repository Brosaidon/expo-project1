import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout () {
  return <Tabs>
    <Tabs.Screen name="index" options={{title: "Tickets", tabBarIcon: (props) => (<FontAwesome6 name="money-check-dollar" size={props.size} color={props.color} />)}} />
    <Tabs.Screen name="Trips" options={{title: "Trips"}} />
  </Tabs>
}