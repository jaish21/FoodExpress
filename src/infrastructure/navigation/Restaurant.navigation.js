import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurant/screens/Restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurant/screens/RestaurantDetails.screen";

const RestaurantStack = createStackNavigator();

export default RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
