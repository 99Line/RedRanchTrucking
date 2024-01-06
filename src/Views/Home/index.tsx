import Grid from '@mui/material/Grid'
import CustomForm from 'Components/CustomForm'
import { useMobile } from 'Utils/mixins'
import Truck from 'Assets/truck.png'
//import Card from "Components/Card";
import { Image, FormContainer, ImageContainer } from './styled'

const Home = () => {
  const mobile = useMobile()
  return (
    <Grid container spacing={2}>
      <Grid item xs={mobile ? 12 : 7} sx={{ display: 'flex' }}>
        <ImageContainer>
          <Image src={Truck} alt="Red Ranch Trucking Logo" />
        </ImageContainer>
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
