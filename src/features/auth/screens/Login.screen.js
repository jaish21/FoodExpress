import React, { useState, useContext } from "react";
import LottieView from "lottie-react-native";
import {
  Background,
  BackgroundCover,
  AccountContainer,
  AccountButton,
  AnimationWrapper,
} from "../components/Background.styles";
import {
  InputText,
  ErrorContainer,
} from "../components/LoginComponents.styles";
import Spacer from "../../../components/Spacer";
import Text from "../../../components/Typography";
import Spinner from "../components/Spinner";
import { AuthenticationContext } from "../../../services/authentication/Authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <Background>
      <BackgroundCover />
      <AnimationWrapper height={20} top={110}>
        <LottieView
          key="animation"
          source={require("../../../../assets/FoodToss.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>
      <Text variant="title">Food Express</Text>
      <AccountContainer>
        <InputText
          label="E-mail"
          value={email}
          autoCaptitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />
        <Spacer position="top" size="large">
          <InputText
            label="Password"
            secureTextEntry
            textContentType="password"
            keyboardType="password"
            value={password}
            autoCorrect={false}
            autoCaptitalize="none"
            onChangeText={(value) => setPassword(value)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer position="top" size="large">
          {!isLoading && (
            <AccountButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AccountButton>
          )}
          {isLoading && <Spinner />}
        </Spacer>
      </AccountContainer>
    </Background>
  );
};
