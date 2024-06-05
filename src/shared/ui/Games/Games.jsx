import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Frame } from "./lib/Frame.svg";
import { ReactComponent as FrameWithButtons } from "./lib/FrameWithButtons.svg";
import { ReactComponent as SlideLeftFrame } from "./lib/SlideLeftFrame.svg";
import { ReactComponent as SlideRightFrame } from "./lib/SlideRightFrame.svg";
import styles from "./Games.module.css";
import { useResize } from "../../lib";
import Icon from "../Icon/Icon";
import { useTranslation } from "react-i18next";

const Games = ({ className, id }) => {
  const { t } = useTranslation();
  const { isScreenSm, isScreenXl } = useResize();
  const navigate = useNavigate();
  const handleClickNavigateBitSpin = () => navigate("/Games/BitSpin");

  return (
    <div className={classNames(styles._, className)} id={id}>
      <span className={styles.title}>{t("games.title")}</span>
{/*       <div className={styles.menu}>
        <div>
          <span>{t("games.sorting")}</span>
          <span>
            {t("games.direction")}
            {<Icon iconType="ArrowDown" className={styles.arrowIcon} />}
          </span>
        </div>
        <span>{t("games.all")}</span>
      </div> */}
      <div className={styles.games}>
        {isScreenSm ? (
          isScreenXl ? (
            <>
              <button
                className={styles.gameButton}
                onClick={handleClickNavigateBitSpin}
              >
                <Frame
                  className={classNames(
                    styles.gameButton__frame,
                    styles.gameButton__frame_bitSpin
                  )}
                />
                <div className={styles.gameButton__noveltyBlock}>New</div>
              </button>
              <div className={styles.buttonWrapper}>
                <button className={styles.gameButton}>
                  <FrameWithButtons className={styles.gameButton__frame} />
                </button>
                <button className={styles.slideLeftButton}>
                  <SlideLeftFrame className={styles.slideLeftButton__frame} />
                  <Icon
                    iconType="ArrowDown"
                    className={styles.slideLeftButton__arrow}
                  />
                </button>
                <button className={styles.slideRightButton}>
                  <SlideRightFrame className={styles.slideRightButton__frame} />
                  <Icon
                    iconType="ArrowDown"
                    className={styles.slideRightButton__arrow}
                  />
                </button>
              </div>

              <button className={styles.gameButton}>
                <Frame className={styles.gameButton__frame} />
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.gameButton}
                onClick={handleClickNavigateBitSpin}
              >
                <Frame
                  className={classNames(
                    styles.gameButton__frame,
                    styles.gameButton__frame_bitSpin
                  )}
                />
                <div className={styles.gameButton__noveltyBlock}>New</div>
              </button>
              <button className={styles.gameButton}>
                <Frame className={styles.gameButton__frame} />
              </button>
              <div className={styles.buttonWrapper}>
                <button className={styles.gameButton}>
                  <FrameWithButtons className={styles.gameButton__frame} />
                </button>
                <button className={styles.slideLeftButton}>
                  <SlideLeftFrame className={styles.slideLeftButton__frame} />
                  <Icon
                    iconType="ArrowDown"
                    className={styles.slideLeftButton__arrow}
                  />
                </button>
                <button className={styles.slideRightButton}>
                  <SlideRightFrame className={styles.slideRightButton__frame} />
                  <Icon
                    iconType="ArrowDown"
                    className={styles.slideRightButton__arrow}
                  />
                </button>
              </div>
            </>
          )
        ) : (
          <div className={styles.buttonWrapper}>
            <button
              className={styles.gameButton}
              onClick={handleClickNavigateBitSpin}
            >
              <FrameWithButtons
                className={classNames(
                  styles.gameButton__frame,
                  styles.gameButton__frame_bitSpinWithButtons
                )}
              />
              <div className={styles.gameButton__noveltyBlock}>New</div>
            </button>
            <button className={styles.slideLeftButton}>
              <SlideLeftFrame className={styles.slideLeftButton__frame} />
              <Icon
                iconType="ArrowDown"
                className={styles.slideLeftButton__arrow}
              />
            </button>
            <button className={styles.slideRightButton}>
              <SlideRightFrame className={styles.slideRightButton__frame} />
              <Icon
                iconType="ArrowDown"
                className={styles.slideRightButton__arrow}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
