import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { LoginNav } from "./LoginNav";
import { NoLoginNav } from "./NoLoginNav";

export const Nav = () => {
  return <NoLoginNav />;
};
