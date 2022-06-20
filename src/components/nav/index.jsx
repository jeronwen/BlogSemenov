import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";
import ClearIcon from "@mui/icons-material/Clear";

export const Nav = () => {
  const [active, setActive] = React.useState(false);
  const handleOpen = () => {
    setActive(!active);
  };
  return (
    <div className={active ? "nav-bar-active" : "nav-bar-inactive"}>
      <Box className="menu">
        {active ? (
          <div className="container">
            <div className="nav-header">
              <h2>Имя Профиля</h2>
            </div>
            <div className="nav-body">
              <div className="nav-item">
                <Link to={"/"}>
                  <h3>Главная</h3>
                </Link>
              </div>
              <div className="nav-item">
                <h3>Мой профиль</h3>
              </div>
              <div className="nav-item">
                <h3>Создать запись</h3>
              </div>
              <div className="nav-item">
                <h3>Выйти</h3>
              </div>
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
