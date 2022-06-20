import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import "./Modal.scss";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = ({ open, handleClose }) => {
  return (
    <div className="modalMenu">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="header-modal">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Вход в аккаунт
              </Typography>
              <IconButton onClick={handleClose}>
                <ClearIcon></ClearIcon>
              </IconButton>
            </div>

            <br />
            <TextField
              sx={{ borderRadius: "15px" }}
              required
              id="outlined-required"
              label="Email"
            />
            <br />
            <TextField
              sx={{ borderRadius: "15px" }}
              id="outlined-password-input"
              label="Пароль"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <Button sx={{ borderRadius: "12px" }} variant="contained">
              Войти
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
