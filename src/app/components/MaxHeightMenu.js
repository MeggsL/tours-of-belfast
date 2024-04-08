import * as React from "react";
import { Link } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AllMenuLinks from "../components/TopMenuLinks.js";

// putting the exported parent component in a constant
//const allthelinks = <AllMenuLinks />;

const allthelinks = [
    'Tours',
    'Toilets',
    'Cafes',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
 const tours = () => {
  <Link></Link>
 }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
                <Link href="/tours">
          {""}<MenuItem key="Tours" onClick={handleClose}>Tours</MenuItem></Link>
          <Link href="/tours">
          {" "}<MenuItem onClick={handleClose}>Toilets</MenuItem></Link>
        <MenuItem onClick={handleClose}>Cafes</MenuItem>
        
      </Menu>
    </div>
  );
}
