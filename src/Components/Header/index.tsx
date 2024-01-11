import Carrousel from 'Components/Carrousel'
import Logo from 'Assets/logo.png'
import Tabs from 'Components/Tabs'
import {
  ContainerBox,
  SubContainerBox,
  Image,
  GridItem,
  BorderBox,
  Line,
  DataContainer,
  ContainerBoxHome,
} from './styled'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { useMobile } from 'Utils/mixins'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { theme } from 'Theme/theme'
import { info } from 'Utils/strings'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const { /*ADDRESS, */ CELPHONE, EMAIL } = info

export default function Header() {
  const mobile = useMobile()
  const location = useLocation().pathname;



  return (
    <ContainerBoxHome >
      <SubContainerBox>
        <Grid container spacing={2}>
          <GridItem
            item
            xs={mobile ? 12 : 6}
            content={mobile ? 'center' : 'start'}
          >
            <Image src={Logo} alt="Red Ranch Trucking Logo" />
          </GridItem>
          {mobile || (
            <GridItem item xs={6} content={'end'}>
              <DataContainer>
                {/*TODO Add links */}
                <Line>
                  <LocalPhoneOutlinedIcon
                    style={{ color: 'white', fontSize: '20px' }}
                  />
                  <a href={`tel:${CELPHONE}`} style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="body1"
                      color={theme.extraBackgrounds.grayColor}
                      sx={{ fontSize: '20px', fontWeight: '600' }}
                    >
                      {CELPHONE}
                    </Typography>
                  </a>
                </Line>
                {/*TODO Add links */}
                <Line>
                  <EmailOutlinedIcon
                    style={{ color: 'white', fontSize: '20px' }}
                  />
                  <a href={`mailto:${EMAIL}`}>
                    <Typography
                      variant="body1"
                      color={theme.extraBackgrounds.grayColor}
                      sx={{
                        fontSize: '20px',
                        textDecoration: 'underline',
                        fontWeight: '600',
                      }}
                    >
                      {EMAIL}
                    </Typography>
                  </a>
                </Line>
              </DataContainer>
            </GridItem>
          )}
        </Grid>
      </SubContainerBox>
      <BorderBox content={mobile ? 'center' : undefined}>
        <Tabs />
      </BorderBox>
    <Carrousel/>
    </ContainerBoxHome>
  )
}
