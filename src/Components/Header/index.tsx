import Carrousel from "Components/Carrousel";
import Logo from "Assets/logo.png";
import Tabs from "Components/Tabs";
import { ContainerBox, SubContainerBox, Image, GridItem } from "./styled";
import Grid from "@mui/material/Grid";

export default function Header() {
  //TODO Change colors to theme
  return (
    <ContainerBox>
      <SubContainerBox>
        <Grid container spacing={2}>
          <GridItem item xs={6}>
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
          <GridItem item xs={6}>
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
        </Grid>
      </SubContainerBox>
      <Tabs />
      <Carrousel></Carrousel>
    </ContainerBox>
  );
}
