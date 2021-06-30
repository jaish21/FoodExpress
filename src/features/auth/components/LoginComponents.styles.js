import styled from "styled-components";
import { TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/themes/colors";

export const InputText = styled(TextInput).attrs({
  theme: {
    colors: {
      label: colors.highlight.bold,
    },
  },
  selectionColor: colors.highlight.active,
  outlineColor: colors.highlight.bold,
  underlineColor: colors.highlight.bold,
})`
  justify-content: center;
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
`;
