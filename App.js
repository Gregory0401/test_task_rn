import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Order from "./Order";
import React from "react";
import Map from "./components/Map";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const MainTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="calendar" size={24} color="black" />
            ),
          }}
        />
        <MainTab.Screen
          name="Map"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="hearto" size={24} color="black" />
            ),
          }}
        />
        <MainTab.Screen
          name="1"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Entypo name="dribbble-with-circle" size={24} color="black" />
            ),
          }}
        />
        <MainTab.Screen
          name="2"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="message1" size={24} color="black" />
            ),
          }}
        />
        <MainTab.Screen
          name="3"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            ),
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  );
}
