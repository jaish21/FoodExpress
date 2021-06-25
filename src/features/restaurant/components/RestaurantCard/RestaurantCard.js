import React from "react";
import { Image } from "react-native";
import { SvgFromXml } from "react-native-svg";
import start from "../../../../../assets/star";
import openNow from "../../../../../assets/openNow";
import Spacer from "../../../../components/Spacer";
import Text from "../../../../components/Typography";
import {
  RestaurantCardContainer,
  RestaurantCardCover,
  Address,
  Rating,
  RatingSection,
  SectionEnd,
} from "./RestaurantCard.styles";
import Favourite from "../../../../components/Favourite";

export default RestaurantCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const restaurantRating = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCardContainer elevation={5}>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

        <Text variant="body">{name}</Text>
        <RatingSection>
          <Rating>
            {restaurantRating.map((rating, index) => (
              <SvgFromXml xml={start} width={20} height={20} key={index} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <>
                <Text variant="error">Closed Temporarily</Text>
                <Spacer position="left" size="medium" />
              </>
            )}
            {isOpenNow && (
              <>
                <SvgFromXml xml={openNow} width={15} height={15} />
                <Spacer position="left" size="medium" />
              </>
            )}

            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </RatingSection>

        <Address>{address}</Address>
      </RestaurantCardContainer>
    </>
  );
};
