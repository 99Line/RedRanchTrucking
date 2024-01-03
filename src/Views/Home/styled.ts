import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const Image = styled.img`
  min-height: 80px;
  width: 100%;
  height: auto;
  max-width: 600px;
  max-height: 400px;
`;

export const ImageContainer = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormContainer = styled.div({
  background: theme.extraBackgrounds.grayColor,
  padding: "33px 33px",
});
