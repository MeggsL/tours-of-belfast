import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ToursContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#c1b0d1', width: '300vh', height: '320vh' }} />
      </Container>
    </React.Fragment>
  );
}