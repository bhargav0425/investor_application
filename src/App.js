import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Container, Typography, Box, useScrollTrigger } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageTextComponent from './ImageTextComponent';

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

  const columns = [
    {
      width: 200,
      label: 'Dessert',
      dataKey: 'dessert',
    },
    {
      width: 120,
      label: 'Calories\u00A0(g)',
      dataKey: 'calories',
      numeric: true,
    },
    {
      width: 120,
      label: 'Fat\u00A0(g)',
      dataKey: 'fat',
      numeric: true,
    },
    {
      width: 120,
      label: 'Carbs\u00A0(g)',
      dataKey: 'carbs',
      numeric: true,
    },
    {
      width: 120,
      label: 'Protein\u00A0(g)',
      dataKey: 'protein',
      numeric: true,
    },
  ];

  const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
  ];
  // const rows = Array.from({ length: 200 }, (_, index) => {
  //   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  //   return createData(index, ...randomSelection);
  // });

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
          <TableRow>
            
          {columns.map((column) => (
          <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
          >
          {column.label}
          </TableCell>
          ))}
          </TableRow>

          <Container maxWidth="md">
          {/* Image Componenet one */}
        <ImageTextComponent
        videoSrc="path/to/your/video.mp4"
        title="Video Title"
        content="Content for Video"
        />

        <ImageTextComponent
        videoSrc="path/to/your/video.mp4"
        title="Video Title"
        content="Content for Video"
        />
    </Container>
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