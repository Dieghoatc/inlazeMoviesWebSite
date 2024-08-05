"use client";

import { useState } from "react";
import styles from "./save.module.css";

export function Save() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.save_button} onClick={handleClick}>
      {toggle ? (
        <svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.208 23.875V7.208c0-.573.204-1.063.612-1.471a2.006 2.006 0 0 1 1.472-.612h10.416c.573 0 1.064.204 1.472.612.408.408.612.898.612 1.471v16.667L14.5 20.75l-7.292 3.125Z"
            fill="#F0B90B"
          />
        </svg>
      ) : (
        <svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.208 23.875V7.208c0-.573.204-1.063.612-1.471a2.006 2.006 0 0 1 1.472-.612h10.416c.573 0 1.064.204 1.472.612.408.408.612.898.612 1.471v16.667L14.5 20.75l-7.292 3.125Z"
            fill="#fff"
          />
        </svg>
      )}
    </div>
  );
}
