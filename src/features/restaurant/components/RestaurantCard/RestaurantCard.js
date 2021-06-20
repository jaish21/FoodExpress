import React from "react";
import { Image } from "react-native";
import { SvgFromXml } from "react-native-svg";
import start from "../../../../../assets/star";
import openNow from "../../../../../assets/openNow";
import { Spacer } from "../../../../components/Spacer";
import { Text } from "../../../../components/Typography";
import {
  RestaurantCardContainer,
  RestaurantCardCover,
  Address,
  Rating,
  RatingSection,
  SectionEnd,
} from "./RestaurantCard.styles";

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Little Italy",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg",
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    address = "100 Main street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const restaurantRating = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCardContainer elevation={5}>
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
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgFromXml xml={openNow} width={15} height={15} />}
            <Spacer position="left" size="large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </RatingSection>

        <Address>{address}</Address>
      </RestaurantCardContainer>
    </>
  );
};
