import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../services/favourites/Favourites.context";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((e) => e.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "#b51e0d" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
