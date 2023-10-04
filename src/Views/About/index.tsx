import React from "react";
import { AboutContainer, Line } from "./styled";
import Card from "../../Components/Card";
import { CheckCustom } from "./styled";
import { CustomTypography } from "./styled";

export default function Services() {
  return (
    <AboutContainer>
      <Card>
        <Line>
          <CustomTypography>
            Family owned, Local business. Red Ranch Trucking started in 2017.
            Manuel has been Trucking for +10 years, we started our business in
            the hopes of making a little more money to support our family of 4. 
            We thank you for visiting our site and considering our services. We
            hope you give us the opportunity to help with your home or
            commercial project.
          </CustomTypography>
        </Line>
        <Line>
          <CustomTypography>Sincerely, The Meraz Family</CustomTypography>
        </Line>
      </Card>
    </AboutContainer>
  );
}
