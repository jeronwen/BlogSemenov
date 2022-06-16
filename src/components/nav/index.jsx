import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";

export const Nav = () => {
  return (
    // <div className="menu-bar">
    //   <Box className="menu-box" sx={{ flexGrow: 0 }}>
    //     <AppBar className="=bar">
    //       <Toolbar>
    //         <IconButton
    //           size="large"
    //           edge="start"
    //           color="inherit"
    //           aria-label="menu"
    //           sx={{ mr: 2 }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           Меню
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    // </div>
    <div className="nav-bar">
      <Box className="menu">
        <div className="nav-text">МЕНЮ</div>

        <IconButton className="menu-btn">
          <MenuOutlinedIcon fontSize="large"></MenuOutlinedIcon>
        </IconButton>
      </Box>
    </div>
  );
};
