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
  height: 25vh;
  margin-left: 43px;
  margin-right: 43px;
  display: flex;
  flex: 1 0 auto;
`;

export const Image = styled.img`
  height: 70%;
  max-height: 150px;
`;

export const GridItem = styled(Grid)((props) => ({
  flex: "1 1 auto",
  justifyContent: props.content,
  alignItems: "center",
  display: "flex",
}));

export const BorderBox = styled(Box)({
  border: "solid",
  borderColor: theme.extraBackgrounds.burgundyColor,
  borderWidth: "0 0 5px 0",
});
