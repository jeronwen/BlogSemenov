import { IconButton } from "@mui/material";
import { TransitionsModal } from "../login/";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./Header.scss";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <h1>SEMENOV BLOG</h1>

      <div className="group-btn">
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton onClick={handleOpen}>
          <PersonIcon></PersonIcon>
        </IconButton>
        <TransitionsModal
          open={open}
          handleClose={handleClose}
        ></TransitionsModal>
        {/* <IconButton>
          <CreateIcon></CreateIcon>
        </IconButton>
        <IconButton>
          <ExitToAppIcon></ExitToAppIcon>
        </IconButton> */}
      </div>
    </div>
  );
};
