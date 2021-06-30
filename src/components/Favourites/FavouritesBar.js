import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Callout from "../../features/map/components/Callout";
import Spacer from "../Spacer";
import Text from "../Typography";

const FavouriteContainer = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

const FavouritesBar = ({ favourites, onCardClick }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteContainer>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces>
        {favourites.map((restaurant) => {
          return (
            <Spacer position="left" size="medium" key={restaurant.name}>
              <TouchableOpacity
                onPress={() =>
                  onCardClick("Restaurant Details", {
                    restaurant,
                  })
                }
              >
                <Callout
                  name={restaurant.name}
                  image={restaurant.photos[0]}
                  isMapView={false}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteContainer>
  );
};

export default FavouritesBar;
