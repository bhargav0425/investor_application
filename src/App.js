import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Container, Typography, Box, useScrollTrigger } from '@mui/material';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const elementId = getTabElementId(newValue);
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getTabElementId = (index) => {
    const tabs = ['overview', 'track-record', 'investment-strategy', 'esg', 'impact-invest', 'team'];
    return tabs[index];
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <div>
      {/* Banner */}
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Your Banner Here
        </Typography>
      </Container>

      {/* Tabs */}
      <AppBar position={trigger ? 'fixed' : 'static'} color="default">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" />
          <Tab label="Track Record" />
          <Tab label="Investment Strategy" />
          <Tab label="ESG" />
          <Tab label="Impact Invest" />
          <Tab label="Team" />
        </Tabs>
      </AppBar>

      <Container>
        <Box id="overview" my={4}>
          <Typography variant="h4">Overview</Typography>
          <Typography>Overview content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box id="track-record" my={4}>
          <Typography variant="h4">Track Record</Typography>
          <Typography>Track record content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box id="investment-strategy" my={4}>
          <Typography variant="h4">Investment strategy</Typography>
          <Typography>Overview content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box id="esg" my={4}>
          <Typography variant="h4">esg and impact</Typography>
          <Typography>Overview content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box id="impact-invest" my={4}>
          <Typography variant="h4">impact invest</Typography>
          <Typography>Track record content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box id="team" my={4}>
          <Typography variant="h4">Team</Typography>
          <Typography>Track record content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        {/* Add other sections similarly */}
      </Container>
    </div>
  );
}

export default App;