import { useContext, useState } from "react";
import { useResize, wait } from "../../../../../../shared/lib";
import { Context } from "../../../../../../store/ContextProvider";
import styles from "./StartButton.module.css";
import { ReactComponent as StartButtonFrame } from "./lib/StartButton.svg";
import { Modal, Notification } from "../../../../../../shared/ui";
import { Conditions } from "../";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { getUrl } from "./lib/getSpinUrl/getSpinUrl";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const getCombinations = (spin) => {
  let combinations = 0;
  if (spin[0] === spin[1] && spin[1] === spin[2]) {
    combinations += 1;
  }
  if (spin[3] === spin[4] && spin[4] === spin[5]) {
    combinations += 1;
  }
  if (spin[6] === spin[7] && spin[7] === spin[8]) {
    combinations += 1;
  }
  if (spin[0] === spin[3] && spin[3] === spin[6]) {
    combinations += 1;
  }
  if (spin[1] === spin[4] && spin[4] === spin[7]) {
    combinations += 1;
  }
  if (spin[2] === spin[5] && spin[5] === spin[8]) {
    combinations += 1;
  }
  if (spin[0] === spin[4] && spin[4] === spin[8]) {
    combinations += 1;
  }
  if (spin[2] === spin[4] && spin[4] === spin[6]) {
    combinations += 1;
  }
  return combinations;
};

const MULTIPLIER = {
  0: 0,
  1: 3,
  2: 10,
  3: 20,
  4: 30,
  5: 40,
  6: 50,
  7: 100,
  8: 200,
  9: 500,
  10: 1000,
  11: 2000,
  12: 4000,
};

const getLastSpin = () => {
  const spinResult = [];
  for (let i = 0; i < 9; i++) {
    spinResult.push(Math.floor(Math.random() * 7));
  }
  return {
    data: spinResult,
    win: 5,
  };
};

export default function StartButton({
  gameCount,
  setGameCount,
  setSpin,
  win,
  setWin,
  setLoading,
}) {
  const { t } = useTranslation();
  const { isScreenSm } = useResize();
  const isWebp = isWebpSupported();
  const {
    account: { address },
    balance: { balance, setBalance },
    lottery: { setJackpot },
    winners: { setWinners },
    signIn: { setValue, value },
  } = useContext(Context);

  const handleSignInOpen = () => setValue(true);

  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isConditionsOpen, setConditionsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClickConditionsClose = () => setConditionsOpen(false);
  const handleClickPlay = async () => {
    console.log("click play");
    if (address) {
      console.log("if ", address);
      if (balance < gameCount * 10) {
        setNotificationOpen(true);
        return;
      }
      setDisabled(true);
      setLoading(true);
      await wait(2000);
      console.log("start the game");
      setBalance((prev) => prev - 10 * gameCount);
      let win = 0;
      for (let i = 0; i < gameCount; i++) {
        const lastSpin = await getLastSpin();
        const combinations = getCombinations(lastSpin.data);
        const spinNumbers = lastSpin.data.map((item) => +item);
        const spin = await Promise.all(
          lastSpin.data.map(async (item) => await getUrl(item, isWebp))
        );
        setLoading(false);
        setSpin([spin, spinNumbers]);
        if (combinations > 12) {
          win += 10 * 10000;
        } else {
          win += MULTIPLIER[combinations] * 10;
        }

        await wait(4000);
      }
      setJackpot((prev) => prev + gameCount);
      if (win) {
        setWinners((prev) => {
          const userData = prev[address];
          if (userData) {
            return { ...prev, [address]: { address, win: userData.win + win } };
          }
          return { ...prev, [address]: { address, win } };
        });
      }
      setWin(win.toFixed(2));
      setDisabled(false);
    } else {
      handleSignInOpen();
    }
  };

  return (
    <>
      {isScreenSm ? (
        <button
          className={classNames(styles._, {
            [styles.disabled]: disabled,
          })}
          disabled={disabled}
          onClick={handleClickPlay}
        >
          <StartButtonFrame className={styles.button} />
          <span className={styles.button__title}>{t("bitSpin.start")}</span>
        </button>
      ) : (
        <Modal
          isOpen={isConditionsOpen}
          setOpen={setConditionsOpen}
          trigger={
            <button className={styles._}>
              <StartButtonFrame className={styles.button} />
              <span className={styles.button__title}>{t("bitSpin.start")}</span>
            </button>
          }
          content={
            <Conditions
              account={address}
              gameCount={gameCount}
              setGameCount={setGameCount}
              handleClickClose={handleClickConditionsClose}
              handleClickPlay={handleClickPlay}
              win={win}
            />
          }
          className={styles.modal}
        />
      )}
      <Notification
        isOpen={isNotificationOpen}
        setOpen={setNotificationOpen}
        message="Недостаточно средств"
      />
    </>
  );
}
