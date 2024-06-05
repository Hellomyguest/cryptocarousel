import classNames from "classnames";
import { Button, Icon } from "../../../../../../shared/ui";
import { ReactComponent as PlayButton } from "./lib/Play.svg";
import styles from "./Conditions.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../../../../../../store/ContextProvider";

export default function Conditions({
  gameCount,
  setGameCount,
  handleClickClose,
  handleClickPlay,
  win,
  className,
}) {
  const { t } = useTranslation();
  const handleClickIncrement = () => {
    setGameCount(++gameCount);
  };

  const {
    balance: { balance },
  } = useContext(Context);

  const handleClickDecrement = () => {
    if (gameCount > 1) {
      setGameCount(--gameCount);
    }
  };

  const handleClick = () => {
    console.log("start");
    handleClickPlay();
    handleClickClose();
  };

  return (
    <div className={classNames(styles._, className)}>
      {handleClickClose && (
        <Button className={styles.closeButton} onClick={handleClickClose}>
          <Icon iconType="Crosshair" />
        </Button>
      )}
      <div className={styles.condition}>
        <span className={styles.condition__title}>{t("bitSpin.bet")}</span>
        <div className={styles.condition__content}>
          <button
            className={classNames(
              styles.condition__frame,
              styles.condition__frame_small
            )}
            onClick={handleClickDecrement}
          >
            <span>-</span>
          </button>
          <div
            className={classNames(
              styles.condition__frame,
              styles.condition__frame_big
            )}
          >
            <span>{(gameCount * 10).toFixed(2)}</span>
          </div>
          <button
            className={classNames(
              styles.condition__frame,
              styles.condition__frame_small
            )}
            onClick={handleClickIncrement}
          >
            <span>+</span>
          </button>
        </div>
      </div>

      <div className={styles.condition}>
        <span className={styles.condition__title}>{t("bitSpin.lastWin")}</span>
        <div className={styles.condition__frame}>
          <span>{win ? `${win} BNB` : "-"}</span>
        </div>
      </div>

      <div className={styles.condition}>
        <span className={styles.condition__title}>{t("bitSpin.balance")}</span>
        <div className={styles.condition__frame}>
          <span>{balance ? `${(+balance).toFixed(2)} BNB` : "-"}</span>
        </div>
      </div>
      {handleClickPlay && (
        <button
          className={styles.playButton}
          onClick={handleClickClose ? handleClick : handleClickPlay}
        >
          <PlayButton />
        </button>
      )}
    </div>
  );
}
