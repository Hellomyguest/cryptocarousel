import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Offer from "./ui/Offer/Offer";
import styles from "./Lottery.module.css";
import { Button, Icon } from "../../../../shared/ui";
import { useTranslation } from "react-i18next";
import { Context } from "../../../../store/ContextProvider";

const Jackpot = () => {
  const {
    lottery: { jackpot },
  } = useContext(Context);

  return (
    <span className={styles.offerSpan}>{`${jackpot.toFixed(2)} BNB`}</span>
  );
};
const lotteryTimeStamp = +new Date() + 100000000;

const Timer = () => {
  const [date, setDate] = useState(0);
  let daysLeft, hoursLeft, minutesLeft, secondsLeft;

  daysLeft = Math.floor((lotteryTimeStamp - date) / (24 * 3600 * 1000))
    .toString()
    .padStart(2, "0");
  hoursLeft = Math.floor(
    ((lotteryTimeStamp - date) % (24 * 3600 * 1000)) / (3600 * 1000)
  )
    .toString()
    .padStart(2, "0");
  minutesLeft = Math.floor(
    ((lotteryTimeStamp - date) % (3600 * 1000)) / (60 * 1000)
  )
    .toString()
    .padStart(2, "0");
  secondsLeft = Math.floor(((lotteryTimeStamp - date) % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, "0");

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <span className={styles.offerSpan}>
      {date
        ? `${daysLeft} : ${hoursLeft} : ${minutesLeft} : ${secondsLeft}`
        : "-"}
    </span>
  );
};

export const JackpotData = ({ className, handleClickClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClickNavigateBitSpin = () => navigate("/Games/BitSpin");

  return (
    <div className={`${styles.lottery} ${className}`}>
      {handleClickClose && (
        <Button className={styles.closeButton} onClick={handleClickClose}>
          <Icon iconType="Crosshair" />
        </Button>
      )}
      <div
        className={classNames(
          styles.offerContainer,
          styles.offerContainer_jackpot
        )}
      >
        <span className={styles.offerTitle}>{t("lottery.jackpot")}</span>
        <Offer className={styles.Offer_mobile}>
          <Jackpot />
        </Offer>
      </div>

      <div
        className={classNames(
          styles.offerContainer,
          styles.offerContainer_timer
        )}
      >
        <span className={styles.offerTitle}>{t("lottery.timer")}</span>
        <Offer className={styles.Offer_mobile}>
          <Timer />
        </Offer>
      </div>
      <button
        className={styles.gameButton}
        onClick={handleClickNavigateBitSpin}
      >
        {t("lottery.play")}
      </button>
    </div>
  );
};

export const WinnersData = ({ className, handleClickClose }) => {
  const { t } = useTranslation();
  const [isFullListShown, setFullListShown] = useState(false);
  const handleClickShowFull = () => setFullListShown(!isFullListShown);
  const {
    winners: { winners },
  } = useContext(Context);

  return (
    <div className={classNames(styles.users, className)}>
      {handleClickClose && (
        <Button className={styles.closeButton} onClick={handleClickClose}>
          <Icon iconType="Crosshair" />
        </Button>
      )}
      <div className={styles.users__header}>
        <span className={styles.offerTitle}>{t("lottery.top")}</span>
        {!handleClickClose && (
          <button
            className={styles.showAllButton}
            onClick={handleClickShowFull}
          >
            {isFullListShown ? t("lottery.hide") : t("lottery.all")}
          </button>
        )}
      </div>
      <div className={styles.winnersWrapper}>
        {Object.values(winners)
          .slice(0, isFullListShown || handleClickClose ? 10 : 4)
          .map((winner, index) => (
            <Offer
              key={`${winner.address}${index}`}
              className={classNames(
                styles.offer_mobile,
                styles.offer_WinnersMobile
              )}
            >
              <div className={styles.offerSpans}>
                <span className={styles.name}>{winner.address}</span>
                <span className={styles.win}>{winner.win}</span>
              </div>
            </Offer>
          ))}
      </div>
    </div>
  );
};

const Lottery = () => {
  return (
    <div className={styles._}>
      <JackpotData />
      <WinnersData />
    </div>
  );
};

export default Lottery;
