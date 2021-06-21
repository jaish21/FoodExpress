import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard/RestaurantCard";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/Restaurants.context";
import { Spinner } from "../../../components/Spinner";
import { Search } from "../components/Search";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && <Spinner />}
      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
