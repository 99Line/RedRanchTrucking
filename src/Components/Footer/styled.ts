import styled from "@emotion/styled";
import { theme } from "../../Theme/theme";

export const FooterContainer = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.extraBackgrounds.footerColor};
`;

export const RedStripe = styled.div`
  height: 3.125rem;
  width: 100%;
  margin-top: auto;
  bottom: 0;
  background-color: ${theme.extraBackgrounds.burgundyColor};
`;

export const DataContainer = styled.div`
  padding: 3.625rem 0px 0px 5rem;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
