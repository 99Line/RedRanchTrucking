import React from "react";
import { DataContainer, FooterContainer, Line, RedStripe } from "./styled";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Typography } from "@mui/material";
import { theme } from "Theme/theme";
import { info } from "Utils/strings";

const { ADDRESS, CELPHONE, EMAIL } = info;

const Footer = () => {
  return (
    <FooterContainer>
      <DataContainer>
        <Typography variant="h3" color={theme.extraBackgrounds.burgundyColor}>
          Red Ranch Trucking LLC
        </Typography>
        <Line>
          <CopyrightOutlinedIcon style={{ color: "white" }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            Red Ranch Trucking LLC
          </Typography>
        </Line>
        <Line>
          <LocalPhoneOutlinedIcon style={{ color: "white" }} />

          <a href={`tel:${EMAIL}`} style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color={theme.extraBackgrounds.grayColor}
            >
              {/*TODO Add links */}
              {CELPHONE}
            </Typography>
          </a>
        </Line>
        <Line>
          <EmailOutlinedIcon style={{ color: "white" }} />
          <a href={`mailto:${EMAIL}`}>
            <Typography
              variant="body1"
              sx={{ textDecoration: "underline" }}
              color={theme.extraBackgrounds.grayColor}
            >
              {EMAIL}
            </Typography>
          </a>
        </Line>
        <Line>
          {/*TODO Add links */}
          <PlaceOutlinedIcon style={{ color: "white" }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            {ADDRESS}
          </Typography>
        </Line>
      </DataContainer>
      <RedStripe></RedStripe>
    </FooterContainer>
  );
};

export default Footer;
