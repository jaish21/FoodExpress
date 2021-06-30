import React, { useState, useContext } from "react";
import {
  Background,
  BackgroundCover,
  AccountContainer,
  AccountButton,
} from "../components/Background.styles";
import {
  InputText,
  ErrorContainer,
} from "../components/LoginComponents.styles";
import Spacer from "../../../components/Spacer";
import Text from "../../../components/Typography";
import { AuthenticationContext } from "../../../services/authentication/Authentication.context";
import Spinner from "../components/Spinner";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  return (
    <Background>
      <BackgroundCover />

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
        <Spacer position="top" size="large">
          <InputText
            label="Confirm password"
            secureTextEntry
            textContentType="password"
            keyboardType="password"
            value={confirmPassword}
            autoCorrect={false}
            autoCaptitalize="none"
            onChangeText={(value) => setConfirmPassword(value)}
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
              icon="account-heart"
              mode="contained"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AccountButton>
          )}
          {isLoading && <Spinner />}
        </Spacer>
      </AccountContainer>
    </Background>
  );
};
