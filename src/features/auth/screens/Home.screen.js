import React from "react";
import Text from "../../../components/Typography";
import LottieView from "lottie-react-native";

import {
  Background,
  BackgroundCover,
  AccountContainer,
  AccountButton,
  AnimationWrapper,
} from "../components/Background.styles";
import Spacer from "../../../components/Spacer";

export const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <BackgroundCover />
      <AnimationWrapper height={50}>
        <LottieView
          key="animation"
          source={require("../../../../assets/BouncingFruit.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>

      <Text variant="title">Food Express</Text>
      <AccountContainer>
        <AccountButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AccountButton>
        <Spacer position="top" size="large">
          <AccountButton
            icon="account-heart"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </Background>
  );
};
