import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const Image = styled.img`
  min-height: 80px;
  height: 17.2vh;
  max-height: 150px;
`;

export const FormContainer = styled.div({
  background: theme.extraBackgrounds.grayColor,
  padding: "33px 0",
});
