import { useContext, useState } from "react";
import classNames from "classnames";
import { ReactComponent as Game } from "./lib/BackGame.svg";
import { ReactComponent as LogoFrame } from "./lib/LogoFrame.svg";
import { ReactComponent as LogoMid } from "./lib/LogoMid.svg";
import Coins from "./lib/Coins.png";
import { useResize } from "../../../../shared/lib";
import { getBitSpinMarkUp } from "./lib/getBitSpinMarkUp/getBitSpinMarkUp";
import { Conditions, StartButton } from "./ui";
import styles from "./BitSpin.module.css";
import { useTranslation } from "react-i18next";
import { Context } from "../../../../store/ContextProvider";

const BitSpin = () => {
  const { t } = useTranslation();
  const { isScreenSm } = useResize();
  const {
    lottery: { jackpot },
  } = useContext(Context);

  const [spin, setSpin] = useState(null);
  let marks;
  if (spin) {
    marks = getBitSpinMarkUp(spin[1]);
  }

  const [gameCount, setGameCount] = useState(1);
  const [win, setWin] = useState(null);
  const [isLoading, setLoading] = useState(false);

  return (
    <div className={styles._}>
      <h1>Bit Spin</h1>
      <span className={styles.span}>
        {t("bitSpin.toStart")}
        <br />
        {t("bitSpin.minBet")}
        {`${10} BNB`}
      </span>
      <div className={styles.game}>
        <div className={styles.game__content}>
          <Game className={styles.game__frame} />
          <div className={styles.spinWrapper}>
            {spin ? (
              spin[0].map((item, index, array) => (
                <div
                  className={styles.spin}
                  key={`${item}${index}${array.join("")}`}
                >
                  <img
                    src={item}
                    alt="logo"
                    className={classNames(styles.spin__video, {
                      [styles.spin__video_marked]: marks.includes(index),
                    })}
                    key={`${item}${array.join("")}`}
                  />
                </div>
              ))
            ) : (
              <img src={Coins} className={styles.coins} alt="coins" />
            )}
          </div>
          <StartButton
            setSpin={setSpin}
            gameCount={gameCount}
            setGameCount={setGameCount}
            win={win}
            setWin={setWin}
            setLoading={setLoading}
          />
          {isLoading && (
            <div className={styles.logo}>
              <LogoFrame className={styles.logo__frame} />
              <LogoMid className={styles.logo__mid} />
            </div>
          )}
        </div>
        <div className={styles.game__conditions}>
          <div>
            <span className={styles.jackpot__title}>
              {t("bitSpin.jackpot")}
            </span>
            <div className={styles.jackpot__frame}>
              <span>{`${jackpot.toFixed(2)} BNB`}</span>
            </div>
          </div>
          {isScreenSm && (
            <Conditions
              gameCount={gameCount}
              setGameCount={setGameCount}
              win={win}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BitSpin;
