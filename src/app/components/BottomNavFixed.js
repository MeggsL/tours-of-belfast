"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import "../globals.css";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DoNotDisturbOnTotalSilenceTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTotalSilenceTwoTone";
import RouteTwoToneIcon from "@mui/icons-material/RouteTwoTone";
//import WhereToVoteTwoToneIcon from "@mui/icons-material/WhereToVoteTwoTone";
//import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';
//import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import Container from "@mui/material/Container";
//import { useEffect } from "react";
import Link from "next/link";

{/*}
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
*/}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  //const [messages, setMessages] = React.useState(() => refreshMessages());

  {/*}
  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);
*/}

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItemButton key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemButton>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        [tour home]
            <BottomNavigationAction label="All tours" icon={<Link href={"/tours"}><RouteTwoToneIcon /></Link>} />
            [weather]
            <BottomNavigationAction label="" icon={<WbSunnyTwoToneIcon />} />
            [the overwhelm button]
            <BottomNavigationAction
              label=""
              icon={
                <Link href={"/tours/overwhelm"}>
                  {<DoNotDisturbOnTotalSilenceTwoToneIcon />}
                </Link>
              }
            />
         </BottomNavigation>
      </Paper>
    </Box>
  );
}