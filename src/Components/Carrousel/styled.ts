import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "Theme/theme";

export const ContainerBox = styled(Box)`
  background: ${theme.palette.primary.main};
  flex: 1 1 auto;
  overflow: hidden;
`;
export const Image = styled.img`
  height: 100%;
`;
