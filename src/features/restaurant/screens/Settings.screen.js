import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/Authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="logout" onPress={onLogout} />
    </View>
  );
};
