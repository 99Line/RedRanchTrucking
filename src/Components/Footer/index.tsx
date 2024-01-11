import React from 'react'
import { DataContainer, FooterContainer, Line, RedStripe } from './styled'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { Typography } from '@mui/material'
import { theme } from 'Theme/theme'
import { info } from 'Utils/strings'
import { useMobile } from 'Utils/mixins'

const { ADDRESS, CELPHONE, EMAIL } = info

const Footer = () => {
  const mobile = useMobile()

  return (
    <FooterContainer>
      <DataContainer
        style={{
          padding: mobile ? '2rem 0px 0px 2rem' : '3.625rem 0px 0px 5rem',
        }}
      >
        <Typography variant="h3" color={theme.extraBackgrounds.burgundyColor}>
          Red Ranch Trucking LLC
        </Typography>
        <Line>
          <CopyrightOutlinedIcon style={{ color: 'white', fontSize: '20px' }} />
          <Typography
            variant="body1"
            color={theme.extraBackgrounds.grayColor}
            sx={{ fontSize: '20px', fontWeight: '600' }}
          >
            Red Ranch Trucking LLC
          </Typography>
        </Line>
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
              {/*TODO Add links */}
              {CELPHONE}
            </Typography>
          </a>
        </Line>
        <Line>
          <EmailOutlinedIcon style={{ color: 'white', fontSize: '20px' }} />
          <a href={`mailto:${EMAIL}`}>
            <Typography
              variant="body1"
              sx={{
                textDecoration: 'underline',
                fontSize: '20px',
                fontWeight: '600',
              }}
              color={theme.extraBackgrounds.grayColor}
            >
              {EMAIL}
            </Typography>
          </a>
        </Line>
        <Line>
          {/*TODO Add links */}
          <PlaceOutlinedIcon style={{ color: 'white', fontSize: '20px' }} />
          <Typography
            variant="body1"
            color={theme.extraBackgrounds.grayColor}
            sx={{ fontSize: '20px', fontWeight: '600' }}
          >
            {ADDRESS}
          </Typography>
        </Line>
      </DataContainer>
      <RedStripe></RedStripe>
    </FooterContainer>
  )
}

export default Footer
