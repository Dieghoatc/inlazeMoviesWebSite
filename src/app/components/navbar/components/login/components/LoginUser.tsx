import styles from "./loginUser.module.css";

export function LoginUser() {
  return (
    <div className={styles.login_user_container}>
      <div className={styles.register}>
        <div className={styles.sign_up}>
          <p>Sign Up</p>
        </div>
        <div className={styles.log_in}>
          <p>Log in</p>
        </div>
      </div>
      <div className={styles.button_register}>
        <p>Register with your Email</p>
        <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0H1a.5.5 0 0 0-.5.5V9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V.5A.5.5 0 0 0 13 0Zm-1.286 1L7 5.322 2.286 1h9.428Zm.786 8h-11V1.637l5.162 4.732a.5.5 0 0 0 .676 0L12.5 1.637V9Z"
            fill="#343330"
          />
        </svg>
      </div>
      <div className={styles.support}>
        <p>For any questions, reach out to support@inlazedmovies.com</p>
      </div>
    </div>
  );
}
