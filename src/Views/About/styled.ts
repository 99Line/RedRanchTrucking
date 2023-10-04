import styled from "@emotion/styled";
import { theme } from "../../Theme/theme";
import Typography from "@mui/material/Typography";

export const AboutContainer = styled.div({
  background: theme.extraBackgrounds.grayColor,
  padding: "70px 0",
});

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const SubLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
`;

export const CustomTypography = styled(Typography)`
  color: ${theme.extraBackgrounds.blackColor};
  font-size: 20px;
  font-style: normal;
  font-weight: lighter;
  line-height: 30px;
  font-family: Roboto;
`;

export const SubCustomTypography = styled(Typography)`
  color: ${theme.extraBackgrounds.burgundyColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
