import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import SafeArea from "../../../components/SafeArea";
import styled from "styled-components";
import MapSearch from "../components/MapSearch";
import Callout from "../components/Callout";
import { LocationContext } from "../../../services/location/Location.context";
import { RestaurantsContext } from "../../../services/restaurants/Restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapsScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const delta = northeastLat - southwestLat;
    setLatDelta(delta);
  }, [location, viewport]);

  return (
    <SafeArea>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate("Restaurant Details", { restaurant })
              }
            >
              <Callout name={restaurant.name} image={restaurant.photos[0]} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </SafeArea>
  );
};
