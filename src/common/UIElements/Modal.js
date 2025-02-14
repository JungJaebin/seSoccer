import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalButton } from "../style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "40px 30px 30px 30px",
};

export default function TransitionsModal({ children, state, setIsLoginMode }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isLoginModeHandler = () => {
    if (state === "LogIn") setIsLoginMode(true);
    if (state === "SignUp") setIsLoginMode(false);
  };

  return (
    <div>
      <ModalButton
        onClick={() => {
          handleOpen();
          isLoginModeHandler();
        }}
        sx={{
          color: "white",
          marginRight: "15px",
          fontWeight: "bold",
          fontSize: "12px",
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        {state}
      </ModalButton>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
