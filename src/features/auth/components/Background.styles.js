import styled from "styled-components";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/themes/colors";

export const Background = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  resize-mode: cover;
`;

export const BackgroundCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AccountButton = styled(Button).attrs({
  color: colors.highlight.bold,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 120px;
`;
