import React from "react";
import styles from "./modalLogin.module.css";
import mateGretting from "@/app/assets/images/mete_gretting.png";
import { BackLogo } from "./BackLogo";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ show, handleClose, children }: ModalProps) => {
  return (
    <div className={`${styles.modal} ${show ? styles.show : styles.hidden}`}>
      <div className={styles.modal_main}>
        <div className={styles.modal_controller}>
          <div onClick={handleClose} className={styles.close_modal}>
            <BackLogo />
          </div>
          <div className={styles.modal_children}>{children}</div>
        </div>
        <div className={styles.modal_copy}>
          <div className={styles.modal_title}>
            <h2>Welcome to Inlaze Movies!</h2>
            <p className={styles.modal_info}>
              🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!
            </p>
          </div>
          <div className={styles.image_container}>
            <img src={mateGretting.src} alt="" className={styles.modal_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
