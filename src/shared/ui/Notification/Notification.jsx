import classNames from "classnames";
import { useEffect, useRef } from "react";
import styles from "./Notification.module.css";

const Notification = ({ message, isOpen, setOpen, className }) => {
  const containerRef = useRef();
  const handleClickClose = () => setOpen(false);
  useEffect(() => {
    const handleClick = (e) => {
      if (!isOpen || containerRef?.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    isOpen && (
      <div className={styles._}>
        <div
          ref={containerRef}
          className={classNames(styles.wrapper, {
            [styles.wrapper_show]: isOpen,
          })}
        >
          <button className={styles.closeButton} onClick={handleClickClose}>
            <div className={styles.crosshair}>
              <div className={styles.crosshair__left}></div>
              <div className={styles.crosshair__right}></div>
            </div>
          </button>
          <span>{message}</span>
        </div>
      </div>
    )
  );
};

export default Notification;
