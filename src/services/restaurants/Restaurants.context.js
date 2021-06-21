import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/Location.context";
import { camelizeData, restaurantRequest } from "./Restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const getRestaurantList = (searchLocation) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantRequest(searchLocation)
        .then(camelizeData)
        .then((restaurantsList) => {
          setRestaurants(restaurantsList);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const formattedLocation = `${location.lat},${location.lng}`;
      getRestaurantList(formattedLocation);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
