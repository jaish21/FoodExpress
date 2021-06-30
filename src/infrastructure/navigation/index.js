import React, { useContext } from "react";
import AppNavigation from "./AppNavigation";
import LoginNavigation from "./LoginNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/Authentication.context";

export default Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};
