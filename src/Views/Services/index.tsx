import React from 'react'
import { ServicesContainer, Line } from './styled'
import Card from '../../Components/Card'
import CheckIcon from '@mui/icons-material/Check';
import { CustomTypography } from './styled';
import { theme } from '../../Theme/theme';

export default function Services() {
  return (
    <ServicesContainer>
      <Card>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Truckload delivery</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Trash Removal</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Aggregates delivery</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Landscaping decorative rock (samples available)</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Dirty Removal</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Dirty Delivery</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Construction Material Removal</CustomTypography>
        </Line>
        <Line>
          <CheckIcon style={{fontSize: '20px', color: theme.extraBackgrounds.burgundyColor}}/>
          <CustomTypography>Wood Chips and Mulch Delivery</CustomTypography>
        </Line>
      </Card>
    </ServicesContainer>
  )
}
