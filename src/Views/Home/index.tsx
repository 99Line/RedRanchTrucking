import Grid from '@mui/material/Grid'
import CustomForm from 'Components/CustomForm'
import { useMobile } from 'Utils/mixins'
import Truck from 'Assets/truck.png'
//import Card from "Components/Card";
import { Image, FormContainer, ImageContainer, SubCustomTypography, TitleCustomTypography } from './styled'
import Image2 from "Assets/Image2.jpeg";
import { ServicesContainer, Line } from "../Services/styled";
import { CheckCustom } from "../Services/styled";
import { CustomTypography } from "../Services/styled";
import Card from 'Components/Card'

const Home = () => {
  const mobile = useMobile()
  return (
    <Grid container spacing={0}>
      <Grid item xs={mobile ? 12 : 7} sx={{ display: 'flex', margin: 'auto' }}>
        <Card>
          <TitleCustomTypography>
            Serving Arizona since 2005
          </TitleCustomTypography>
        <Line>
          <CheckCustom />
          <CustomTypography>Buckeye</CustomTypography>
        </Line>
      <Line>
          <CheckCustom />
          <CustomTypography>Tonopah</CustomTypography>
        </Line>
        <Line>
          <CheckCustom />
          <CustomTypography>Avondale</CustomTypography>
        </Line>
        <Line>
          <CheckCustom />
          <CustomTypography>Goodyear</CustomTypography>
        </Line>
        <Line>
          <CheckCustom />
          <CustomTypography>
          Surprise
          </CustomTypography>
        </Line>
        <Line>
          <CheckCustom />
          <CustomTypography>Waddel</CustomTypography>
        </Line>
        <Line>
          <CheckCustom />
          <CustomTypography>Tolleson</CustomTypography>
        </Line>
        <SubCustomTypography>Local Small Business</SubCustomTypography>
        </Card>
      </Grid>
      <Grid item xs={mobile ? 12 : 5}>
        <FormContainer>
          <CustomForm />
        </FormContainer>
      </Grid>
    </Grid>
  )
}

export default Home
