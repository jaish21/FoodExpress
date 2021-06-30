import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../features/auth/screens/Home.screen";
import { LoginScreen } from "../../features/auth/screens/Login.screen";
import { RegisterScreen } from "../../features/auth/screens/Register.screen";

const LoginStack = createStackNavigator();
export default LoginNavigation = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Home" component={HomeScreen} />
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Register" component={RegisterScreen} />
    </LoginStack.Navigator>
  );
};
