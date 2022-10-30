import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritesNavigation from "./FavoritesNavigation";
import AccountNavigation from "./AccountNavigation";
import RickAndMortyNavigation from "./RickAndMortyNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="RickAndMorty">
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RickAndMorty"
        component={RickAndMortyNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderRYM(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderRYM() {
  return (
    <Image
      source={require("../assets/RYM.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
