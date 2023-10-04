import * as React from "react";
import { CustomTab, CustomTabs } from "./styled";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ScrollableTabsButtonAuto() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const location = useLocation().pathname;

  useEffect(() => {
    location === "/" && setValue(0);
    location === "/about" && setValue(1);
    location === "/services" && setValue(2);
  }, [value, location]);

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
