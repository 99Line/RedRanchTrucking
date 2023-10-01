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
import { useMobile } from "Utils/mixins";

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
              <Image src={Logo} alt="Red Ranch Trucking Logo" />
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
