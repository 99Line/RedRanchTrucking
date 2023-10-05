import styled from "@emotion/styled";
import { theme } from "../../Theme/theme";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";

export const ServicesContainer = styled.div({
  background: theme.extraBackgrounds.grayColor,
  padding: "33px 0",
});

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CustomTypography = styled(Typography)`
  color: ${theme.extraBackgrounds.blackColor};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
`;

export const CheckCustom = styled(CheckIcon)({
  fontSize: "20px",
  color: theme.extraBackgrounds.burgundyColor,
});
