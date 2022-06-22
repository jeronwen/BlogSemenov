import { IconButton } from "@mui/material";
import { TransitionsModal } from "../login/";
import { RegistrationModal } from "../registration/";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./Header.scss";

export const Header = () => {
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };
  const [openReg, setOpenReg] = React.useState(false);

  const handleOpenReg = () => {
    setOpenReg(!openReg);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="header">
      <h1>SEMENOV BLOG</h1>

      <div className="group-btn">
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton onClick={handleOpenLogin}>
          <PersonIcon></PersonIcon>
        </IconButton>
        <TransitionsModal
          open={openLogin}
          handleClose={handleOpenLogin}
        ></TransitionsModal>
        {/* <RegistrationModal
          open={openReg}
          handleOpen={handleOpenReg}
        ></RegistrationModal> */}
        {/* <IconButton>
          <CreateIcon></CreateIcon>
        </IconButton> */}
        {/* <IconButton>
          <ExitToAppIcon></ExitToAppIcon>
        </IconButton> */}
      </div>
    </div>
  );
};
