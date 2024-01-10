import styled from "@emotion/styled";
import { theme } from "Theme/theme";
import { Typography } from "@mui/material";

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

export const SubCustomTypography = styled(Typography)`
  color: ${theme.extraBackgrounds.burgundyColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TitleCustomTypography = styled(Typography)`
  color: ${theme.extraBackgrounds.blackColor};
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 50px;
  padding-top: 20px;
`;

export const CustomCard = styled.div({
    background: 'white',
    borderRadius: '21px',
    width: '95%',
justifyContent: 'center'
})