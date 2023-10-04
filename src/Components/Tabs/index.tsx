import * as React from "react";
import { CustomTab, CustomTabs } from "./styled";
import { useNavigate } from "react-router-dom";

export default function ScrollableTabsButtonAuto() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToServices = () => {
    navigate("/services");
  };

  return (
    <CustomTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable auto tabs"
    >
      <CustomTab onClick={goToHome} label="Home" />
      <CustomTab onClick={goToAbout} label="About Us" />
      <CustomTab onClick={goToServices} label="Services" />
    </CustomTabs>
  );
}
