import React from 'react'
import { ServicesContainer, Line } from './styled'
import Card from '../../Components/Card'
import { CheckCustom } from './styled';
import { CustomTypography } from './styled';
import { theme } from '../../Theme/theme';

export default function Services() {
  return (
    <ServicesContainer>
      <Card>
        <Line>
          <CheckCustom/>
          <CustomTypography>Truckload delivery</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Trash Removal</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Aggregates delivery</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Landscaping decorative rock (samples available)</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Dirty Removal</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Dirty Delivery</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Construction Material Removal</CustomTypography>
        </Line>
        <Line>
          <CheckCustom/>
          <CustomTypography>Wood Chips and Mulch Delivery</CustomTypography>
        </Line>
      </Card>
    </ServicesContainer>
  )
}
