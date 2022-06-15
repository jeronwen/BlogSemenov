import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <h1>SEMENOV BLOG</h1>

      <div className="group-btn">
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton>
          <PersonIcon></PersonIcon>
        </IconButton>
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
