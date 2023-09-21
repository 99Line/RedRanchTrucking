import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '100vw', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        TabIndicatorProps={{ children: <span className="Tabs-Span" /> }}
      >
        <Tab  onClick={()=>{/*TODO add links*/}} sx={{mr: '30px'}} label="Home" />
        <Tab onClick={()=>{/*TODO add links*/}}sx={{mr: '30px'}} label="About Us" />
        <Tab onClick={()=>{/*TODO add links*/}}sx={{mr: '30px'}} label="Services" />
      </Tabs>
    </Box>
  );
}