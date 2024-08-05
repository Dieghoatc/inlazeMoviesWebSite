"use client";

import { useState } from "react";
import { Modal } from "./ModalLogin";
import { LogInLogo } from "../../LogInLogo";
import { LoginUser } from "./components/LoginUser";

export function Login() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div onClick={handleOpenModal} className="cursor-pointer">
        <LogInLogo />
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <LoginUser />
      </Modal>
    </div>
  );
}
