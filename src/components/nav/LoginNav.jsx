import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/globalSettings";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Nav.scss";
import ClearIcon from "@mui/icons-material/Clear";

export const LoginNav = () => {
  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setActive(!active);
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
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
                <Link to={"/create-post"}>
                  <h3>Создать запись</h3>
                </Link>
              </div>
              <div className="nav-item">
                <Link to={"/"} onClick={() => handleLogout()}>
                  <h3>Выйти</h3>
                </Link>
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
