import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #efff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const HeaderBar = ({ open, handleDrawer}) => {
  const logo ="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
  return (
    <Header  open={open}>
      <Toolbar>
        <IconButton
          
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: '28px'}}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" />
        <Typography color="#5f6368" opacity ="1" fontFamily="Arial,sans-serif Product San" fontSize="22px" position="relative"
        >
         Keep
        </Typography>
      </Toolbar>
    </Header>
  );
};
export default HeaderBar;
