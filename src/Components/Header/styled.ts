import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { theme } from "Theme/theme";

export const ContainerBox = styled(Box)`
  background: ${theme.extraBackgrounds.blackColor};
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const SubContainerBox = styled(Box)`
  margin-left: 5vw;
  margin-right: 5vw;
  display: flex;
  flex: 1 0 auto;
  max-height: 176px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Image = styled.img`
  min-height: 80px;
  height: 17.2vh;
  max-height: 150px;
`;

export const GridItem = styled(Grid)((props) => ({
  flex: "1 1 auto",
  justifyContent: props.content,
  alignItems: "center",
  display: "flex",
}));

export const BorderBox = styled(Box)((props) => ({
  justifyContent: props.content,
  display: "flex",
  border: "solid",
  borderColor: theme.extraBackgrounds.burgundyColor,
  borderWidth: "0 0 5px 0",
  background: theme.extraBackgrounds.blackColor,
}));
