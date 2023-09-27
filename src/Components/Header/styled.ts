import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { theme } from "Theme/theme";

export const ContainerBox = styled(Box)`
  height: 100vh;
`;

export const SubContainerBox = styled(Box)`
  height: 30vh;
  marginhorizontal: 43;
  display: flex;
  background: ${theme.extraBackgrounds.blackColor};
`;

export const Image = styled.img`
  height: 50%;
  max-height: 120px;
`;

export const GridItem = styled(Grid)({
  flex: "1 1 auto",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});
