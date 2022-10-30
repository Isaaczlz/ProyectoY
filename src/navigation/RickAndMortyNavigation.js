import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RickAndMortyScreen from "../screens/RickAndMorty";
import RYMScreen from "../screens/RYM";

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RickAndMorty"
        component={RickAndMortyScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="RYM"
        component={RYMScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
