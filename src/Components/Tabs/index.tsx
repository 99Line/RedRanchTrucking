import * as React from "react";
import { CustomTab, CustomTabs } from "./styled";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable auto tabs"
    >
      <CustomTab
        onClick={() => {
          /*TODO add links*/
        }}
        label="Home"
      />
      <CustomTab
        onClick={() => {
          /*TODO add links*/
        }}
        label="About Us"
      />
      <CustomTab
        onClick={() => {
          /*TODO add links*/
        }}
        label="Services"
      />
    </CustomTabs>
  );
}
