import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "Theme/theme";

export const ContainerBox = styled(Box)`
  background: ${theme.palette.primary.main};
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
`;
export const Image = styled.img`
  object-fit: cover;
  flex: 1;
  overflow: hidden;
`;
