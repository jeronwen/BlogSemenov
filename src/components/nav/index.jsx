import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";
import { FullNav } from "./FullNav";

export const Nav = () => {
  const [active, setActive] = React.useState(false);
  const handleOpen = () => {
    setActive(!active);
  };
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
    <div className={active ? "nav-bar-inactive" : "nav-bar-active"}>
      <Box className="menu">
        <div className="nav-text">МЕНЮ</div>

        <IconButton onClick={handleOpen} className="menu-btn">
          <MenuOutlinedIcon fontSize="large"></MenuOutlinedIcon>
        </IconButton>
        {/* <FullNav state={active} toggleDrawer={handleOpen}></FullNav> */}
      </Box>
    </div>
  );
};
