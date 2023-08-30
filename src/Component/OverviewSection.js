import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom theme to set primary color to blue
const theme = createTheme({
  palette: {
    primary: {
      main: '#0000ff',
    },
  },
});

const OverviewSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box id="overview" my={4}>
          <Typography variant="h4" color="primary">
            Overview
          </Typography>
          <Grid container spacing={3}>
            {/* Video Presentation Box */}
            <Grid item xs={12} sm={6}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 300, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                }}
              >
                <Typography variant="h6" color="primary">
                  Video Presentation
                </Typography>
                {/* Add Video Here */}
                <Typography>
                  Your video embed or link can go here.
                </Typography>
              </Box>
            </Grid>

            {/* Executive Summary Box */}
            <Grid item xs={12} sm={6}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 300, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                }}
              >
                <Typography variant="h6" color="primary">
                  Executive Summary
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                  pulvinar facilisis justo mollis, auctor consequat urna.
                </Typography>
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default OverviewSection;