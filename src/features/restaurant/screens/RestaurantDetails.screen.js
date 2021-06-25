import React from "react";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import RestaurantMenuList from "../components/RestaurantMenuList/RestaurantMenuList";

import Spacer from "../../../components/Spacer";
import SafeArea from "../../../components/SafeArea";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <Spacer position="bottom" size="large">
        <RestaurantCard restaurant={restaurant} />
        <RestaurantMenuList />
      </Spacer>
    </SafeArea>
  );
};
