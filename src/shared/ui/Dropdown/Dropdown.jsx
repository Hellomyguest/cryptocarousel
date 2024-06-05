/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, cloneElement } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({
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
      if ((!isOpen && !isOpened) || containerRef.current.contains(e.target)) {
        return;
      }
      if (setOpen) {
        setOpen(false);
      } else {
        setOpened();
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = ({ target }) => {
    if (!shouldCloseOnClick) {
      return;
    }

    const tagName = target.tagName.toLowerCase();

    if (tagName === 'button') {
      setOpened(false);
    }
  };

  const controlledTrigger = cloneElement(trigger, {
    onClick: () => setOpen(!isOpen),
  });
  const uncontrolledTrigger = cloneElement(trigger, {
    onClick: () => setOpened(!isOpened),
  });
  const newContent = cloneElement(content, { className });

  if (setOpen) {
    return (
      <div className={styles._} ref={containerRef}>
        {controlledTrigger}
        {isOpen && (
          <div className={`${styles.content} ${className}`}>
            {newContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles._} ref={containerRef}>
      {uncontrolledTrigger}
      {isOpened && (
        <div
          className={`${styles.content} ${className}`}
          onClick={handleClick}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          {newContent}
        </div>
      )}
    </div>
  );
}

export default Dropdown;