import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import styled from "styled-components/native";
import Spacer from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/Restaurants.context";
import { FavouritesContext } from "../../../services/favourites/Favourites.context";
import Spinner from "../../../components/Spinner";
import Search from "../components/Search";
import SafeArea from "../../../components/SafeArea";
import FavouritesBar from "../../../components/Favourites/FavouritesBar";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {isFavouritesToggled && (
        <FavouritesBar
          favourites={favourites}
          onCardClick={navigation.navigate}
        />
      )}
      {isLoading && <Spinner />}
      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Restaurant Details", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
