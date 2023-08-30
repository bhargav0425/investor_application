import React from 'react';
import { Grid, Typography, Paper, Avatar, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

function RoundImageTextComponent({ imageSrc, name, title, content, linkedinUrl }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar alt="Image" src={imageSrc} sx={{ width: 100, height: 100 }} />
              <Typography variant="body1" align="center">
                {name}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{content}</Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '16px' }}>
              <IconButton href={linkedinUrl} target="_blank">
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default RoundImageTextComponent;
