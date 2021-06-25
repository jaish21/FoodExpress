import React from "react";
import { View, Image, Platform } from "react-native";
import styled from "styled-components";
import Text from "../../../components/Typography";
import WebView from "react-native-webview";

const CalloutView = styled(View)`
  align-items: center;
  max-width: 120px;
  padding: 10px;
`;

const CalloutImageAndroid = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CalloutImageIos = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
const Callout = ({ name, image }) => {
  const Image = isAndroid ? CalloutImageAndroid : CalloutImageIos;
  return (
    <CalloutView>
      <Image source={{ uri: image }} />
      <Text variant="body">{name}</Text>
    </CalloutView>
  );
};

export default Callout;
