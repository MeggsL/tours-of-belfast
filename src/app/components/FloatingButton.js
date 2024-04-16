import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
//import WeekendIcon from '@mui/icons-material/Weekend';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';


export default function FloatingButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary">
        <WbSunnyTwoToneIcon />
      </Fab>
    </Box>


  );
}