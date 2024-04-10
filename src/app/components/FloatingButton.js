import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WeekendIcon from '@mui/icons-material/Weekend';


export default function FloatingButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab disabled aria-label="like">
        <WeekendIcon />
      </Fab>
    </Box>
  );
}