import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const Image = styled.img`
  min-height: 80px;
  width: 100%;
  height: auto;
  
`;

export const ImageContainer = styled.div`

flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  min-height: 300px;
  position: relative;
`;

export const FormContainer = styled.div({
  background: theme.extraBackgrounds.grayColor,
  padding: "33px 33px",
});
