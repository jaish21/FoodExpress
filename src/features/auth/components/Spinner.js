import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

const Spinner = () => (
  <ActivityIndicator animating={true} color={Colors.cyan700} size={40} />
);

export default Spinner;
