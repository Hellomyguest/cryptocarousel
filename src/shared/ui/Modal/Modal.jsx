import { useState, useEffect, useRef, cloneElement } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  setOpen,
  trigger,
  content,
  shouldCloseOnClick,
  className,
}) => {
  const [isOpened, setOpened] = useState(false);
  const containerRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if ((!isOpen && !isOpened) || containerRef?.current.contains(e.target)) {
        return;
      }
      if (setOpen) {
        setOpen(false);
      } else {
        setOpened();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = ({ target }) => {
    if (!shouldCloseOnClick) {
      return;
    }

    const tagName = target.tagName.toLowerCase();

    if (tagName === "button") {
      setOpened(false);
    }
  };

  const controlledTrigger = cloneElement(trigger, {
    onClick: () => setOpen(!isOpen),
  });
  const uncontrolledTrigger = cloneElement(trigger, {
    onClick: () => setOpened(!isOpened),
  });
  const styledContent = cloneElement(content, { className });

  if (setOpen) {
    return (
      <>
        {isOpen && (
          <div className={styles._}>
            <div ref={containerRef}>{styledContent}</div>
          </div>
        )}
        {controlledTrigger}
      </>
    );
  }

  return (
    <>
      {isOpened && (
        <div className={styles._} onClick={handleClick}>
          <div ref={containerRef}>{styledContent}</div>
        </div>
      )}
      {uncontrolledTrigger}
    </>
  );
};

export default Modal;
