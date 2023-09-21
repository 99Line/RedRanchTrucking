import React from 'react'
import { DataContainer, FooterContainer, Line, RedStripe } from './styled'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { Typography } from '@mui/material'
import { theme } from '../../Theme/theme'

const Footer = () => {
  return (
    <FooterContainer>
      <DataContainer>
        <Typography variant="h3" color={theme.extraBackgrounds.burgundyColor}>
          Red Ranch Trucking LLC
        </Typography>
        <Line>
          <CopyrightOutlinedIcon style={{ color: 'white' }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            Red Ranch Trucking LLC
          </Typography>
        </Line>
        <Line>
          <LocalPhoneOutlinedIcon style={{ color: 'white' }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            (602) 535-7231
          </Typography>
        </Line>
        <Line>
          <EmailOutlinedIcon style={{ color: 'white' }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            info@rrt.com
          </Typography>
        </Line>
        <Line>
          <PlaceOutlinedIcon style={{ color: 'white' }} />
          <Typography variant="body1" color={theme.extraBackgrounds.grayColor}>
            Address
          </Typography>
        </Line>
      </DataContainer>
      <RedStripe></RedStripe>
    </FooterContainer>
  )
}

export default Footer
