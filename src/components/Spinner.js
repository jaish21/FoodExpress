import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../infrastructure/themes/colors";
import styled from "styled-components";
import { View } from "react-native";

const StyledSpinner = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const SpinnerContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner
        animating={true}
        color={colors.highlight.active}
        size={50}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
