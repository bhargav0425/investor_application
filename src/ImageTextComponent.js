import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

// function ImageTextComponent({ imageSrc, title, content }) {
//     return (
//         <div style={{ margin: '20px 0' }}> {/* Add margin here */}
//       <Paper elevation={3} style={{ padding: '16px' }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={4}>
//             <img src={imageSrc} alt="Image" style={{ maxWidth: '100%' }} />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <Typography variant="h5">{title}</Typography>
//             <Typography variant="body1">{content}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       </div>
//     );
//   }
  
//   export default ImageTextComponent;
  
function ImageTextComponent({ videoSrc, title, content }) {
    return (
      <div style={{ margin: '20px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <video controls width="100%">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body1">{content}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
  
  export default ImageTextComponent;