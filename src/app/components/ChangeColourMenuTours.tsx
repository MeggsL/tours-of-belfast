import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import Link from "next/link";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { grey } from "@mui/material/colors";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//the button for the peachy pink experience

const ButtonColor = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: grey[900]
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { ButtonColor };

export default function ColourMenTours() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ThemeProvider theme={ButtonColor}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          size="large"
          startIcon={<ColorLensOutlinedIcon/>}
          sx={{  pl: 3, pr: 3, pt: 2, pb: 2 }}
        >
          Change
        </Button>
      </ThemeProvider>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Link href="/alt-colours/peachypink/peachy-welcome/peachy-tours">
          <MenuItem onClick={handleClose}>Peachy Pink</MenuItem>
        </Link>
        <Link href="/alt-colours/blueygrey/bluey-welcome/bluey-tours/">
          <MenuItem onClick={handleClose}>Bluey Beige</MenuItem>
        </Link>
        <Link href="../../../purpley-welcome/purpley-tours">
          <MenuItem onClick={handleClose}>Lucious Lilac</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}