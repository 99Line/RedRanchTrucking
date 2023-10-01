import Carrousel from "Components/Carrousel";
import Logo from "Assets/logo.png";
import Tabs from "Components/Tabs";
import {
  ContainerBox,
  SubContainerBox,
  Image,
  GridItem,
  BorderBox,
} from "./styled";
import Grid from "@mui/material/Grid";

export default function Header() {
  //TODO Change colors to theme
  return (
    <ContainerBox>
      <SubContainerBox>
        <Grid container spacing={2}>
          <GridItem item xs={6} content={"start"}>
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
          <GridItem item xs={6} content={"end"}>
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
        </Grid>
      </SubContainerBox>
      <BorderBox>
        <Tabs />
      </BorderBox>
      <Carrousel></Carrousel>
    </ContainerBox>
  );
}
