import Carrousel from "Components/Carrousel";
import Logo from "Assets/logo.png";
import Tabs from "Components/Tabs";
import {
  ContainerBox,
  SubContainerBox,
  Image,
  GridItem,
  BorderBox,
  Line,
  DataContainer,
} from "./styled";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useMobile } from "Utils/mixins";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { theme } from "Theme/theme";

export default function Header() {
  const mobile = useMobile();

  return (
    <ContainerBox>
      <SubContainerBox>
        <Grid container spacing={2}>
          <GridItem
            item
            xs={mobile ? 12 : 6}
            content={mobile ? "center" : "start"}
          >
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
          {mobile || (
            <GridItem item xs={6} content={"end"}>
              <DataContainer>
                {/*TODO Add links */}
                <Line>
                  <LocalPhoneOutlinedIcon
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <Typography
                    variant="body1"
                    color={theme.extraBackgrounds.grayColor}
                    sx={{ fontSize: "20px" }}
                  >
                    (602) 535-7231
                  </Typography>
                </Line>
                {/*TODO Add links */}
                <Line>
                  <EmailOutlinedIcon
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <Typography
                    variant="body1"
                    color={theme.extraBackgrounds.grayColor}
                    sx={{ fontSize: "20px", textDecoration: "underline" }}
                  >
                    info@rrt.com
                  </Typography>
                </Line>
              </DataContainer>
            </GridItem>
          )}
        </Grid>
      </SubContainerBox>
      <BorderBox content={mobile ? "center" : undefined}>
        <Tabs />
      </BorderBox>
      <Carrousel></Carrousel>
    </ContainerBox>
  );
}
