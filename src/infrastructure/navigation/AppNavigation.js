import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapsScreen } from "../../features/map/screens/Maps.screen";
import { SettingsScreen } from "../../features/restaurant/screens/Settings.screen";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../themes/colors";
import RestaurantNavigator from "./Restaurant.navigation";

import { RestaurantsContextProvider } from "../../services/restaurants/Restaurants.context";
import { LocationContextProvider } from "../../services/location/Location.context";
import { FavouritesContextProvider } from "../../services/favourites/Favourites.context";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Maps: "map",
  Settings: "md-settings",
};

const getScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tabs = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={getScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.highlight.active,
              inactiveTintColor: colors.highlight.inactive,
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Maps" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

const AppNavigation = () => {
  return <Tabs />;
};

export default AppNavigation;
