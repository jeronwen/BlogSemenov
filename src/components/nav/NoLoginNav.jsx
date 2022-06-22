import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { RegistrationModal } from "../registration/index";

export const NoLoginNav = () => {
  const [active, setActive] = React.useState(false);
  const handleOpen = () => {
    setActive(!active);
  };
  const [openReg, setOpenReg] = React.useState(false);

  const handleOpenReg = () => {
    setOpenReg(!openReg);
  };
  //   const [open, setOpen] = React.useState(false);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <div className={active ? "nav-bar-active" : "nav-bar-inactive"}>
      <Box className="menu">
        {active ? (
          <div className="container">
            <div className="nav-body">
              <div className="nav-item">
                <Link to={"/"}>
                  <h3>Главная</h3>
                </Link>
              </div>
              <div
                onClick={() => {
                  handleOpenReg();
                }}
                className="nav-item"
              >
                <h3>Зарегистрироваться</h3>
              </div>
              <RegistrationModal open={openReg} handleClose={handleOpenReg} />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="nav-bottom">
          <h3>МЕНЮ</h3>
          <IconButton onClick={handleOpen} className="menu-btn">
            {active ? (
              <ClearIcon fontSize="large"></ClearIcon>
            ) : (
              <MenuOutlinedIcon fontSize="large"></MenuOutlinedIcon>
            )}
          </IconButton>
        </div>
      </Box>
    </div>
  );
};
