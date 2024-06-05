import classNames from "classnames";
import { ReactComponent as Frame } from "./lib/frame.svg";
import { ReactComponent as FrameSmall } from "./lib/frame_small.svg";
import { ReactComponent as Marker } from "./lib/marker.svg";
import { ReactComponent as Point } from "./lib/point.svg";
import { useResize } from "../../../../shared/lib";
import { Divider } from "../../../../shared/ui";
import styles from "./Rules.module.css";
import { useTranslation } from "react-i18next";

const MULTIPLIERS = [
  "Баллы",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "> 12",
  "Множитель",
  "3",
  "10",
  "20",
  "30",
  "40",
  "50",
  "100",
  "200",
  "500",
  "1000",
  "2000",
  "4000",
  "10000",
];

const MULTIPLIERS_VERTICAL = [
  "Баллы",
  "Множитель",
  "1",
  "3",
  "2",
  "10",
  "3",
  "20",
  "4",
  "30",
  "5",
  "40",
  "6",
  "50",
  "7",
  "100",
  "Баллы",
  "Множитель",
  "8",
  "200",
  "9",
  "500",
  "10",
  "1000",
  "11",
  "2000",
  "12",
  "4000",
  "> 12",
  "10000",
];

const Field = ({ points }) => {
  return (
    <div className={styles.field}>
      <div className={classNames(styles.cell, styles.cell_first)}>
        {points.includes(1) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_second)}>
        {points.includes(2) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_third)}>
        {points.includes(3) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_fourth)}>
        {points.includes(4) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_fifth)}>
        {points.includes(5) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_sixth)}>
        {points.includes(6) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_seventh)}>
        {points.includes(7) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_eighth)}>
        {points.includes(8) && <Point className={styles.cell__point} />}
      </div>
      <div className={classNames(styles.cell, styles.cell_ninth)}>
        {points.includes(9) && <Point className={styles.cell__point} />}
      </div>
    </div>
  );
};

const Rules = () => {
  const { t } = useTranslation();
  const { isScreenSm, isScreenLg, isScreenXl } = useResize();

  return (
    <>
      {!isScreenLg && isScreenSm && (
        <Divider className={styles.divider_fullscreen} />
      )}
      <div className={styles._}>
        {isScreenLg && <Frame className={styles.frame} />}
        {!isScreenSm && <FrameSmall />}
        <div className={styles.container}>
          <div>
            <h3 className={styles.title}>{t("bitSpinRules.rulesTitle")}</h3>
            <span className={classNames(styles.text, styles.text_incoming)}>
            {t("bitSpinRules.rules1")}
              <br />
              {t("bitSpinRules.rules2")}{10}{t("bitSpinRules.rules3")}
            </span>
          </div>
          {isScreenXl && <Divider className={styles.divider} />}
          <div>
            <h3 className={styles.title}>
              {isScreenSm
                ? t("bitSpinRules.combinations")
                : t("bitSpinRules.combinationsSmall")}
            </h3>
            <div className={styles.combinations}>
              <div className={styles.combinations__rule}>
                <span className={styles.text}>
                  <Marker className={styles.marker} />
                  {t("bitSpinRules.rule1")}
                </span>

                <div className={styles.fields}>
                  <Field points={[1, 2, 3]} />
                  <Field points={[1, 4, 7]} />
                  <Field points={[1, 5, 9]} />
                </div>
              </div>

              <div className={styles.combinations__rule}>
                <span className={styles.text}>
                  <Marker className={styles.marker} />
                  {t("bitSpinRules.rule2")}
                </span>
                <div className={styles.fields}>
                  <Field points={[1, 2, 3, 4, 5, 6]} />
                  <Field points={[1, 2, 4, 5, 7, 8]} />
                </div>
              </div>
            </div>
            <div>
              <span className={styles.text}>
                <Marker className={styles.marker} />
                {t("bitSpinRules.rule3")}
              </span>
              {isScreenLg ? (
                <div className={styles.table}>
                  {MULTIPLIERS.map((item, index) => {
                    if (item === "Баллы") item = t("bitSpinRules.points");
                    if (item === "Множитель") item = t("bitSpinRules.multiplier");
                    return(
                    <div className={styles.table__cell} key={item + index}>
                      {item}
                    </div>
                  )})}
                </div>
              ) : (
                <div className={styles.tableWrapper}>
                  <div className={styles.table}>
                    {MULTIPLIERS_VERTICAL.slice(0, 16).map((item, index) => (
                      <div className={styles.table__cell} key={item + index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.table}>
                    {MULTIPLIERS_VERTICAL.slice(16).map((item, index) => (
                      <div className={styles.table__cell} key={item + index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className={styles.title}>{t("bitSpinRules.jackpot")}</h3>
            <span className={styles.text}>
              <Marker className={styles.marker} />
              {t("bitSpinRules.jackpotDescription")}
            </span>
            <div className={styles.top}>
              <div className={styles.top__wrapper}>
                <div
                  className={classNames(
                    styles.top__position,
                    styles.top__position_first
                  )}
                >
                  1 {t("bitSpinRules.place")} - 30%
                </div>
                <div className={styles.top__position}>2 место - 24%</div>
                <div
                  className={classNames(
                    styles.top__position,
                    styles.top__position_third
                  )}
                >
                  3 {t("bitSpinRules.place")} - 18%
                </div>
              </div>
              <div className={styles.top__wrapper}>
                <div className={styles.top__position}>4 {t("bitSpinRules.place")} - 7%</div>
                <div className={styles.top__position}>5 {t("bitSpinRules.place")} - 6%</div>
                <div className={styles.top__position}>6 {t("bitSpinRules.place")} - 5%</div>
              </div>
              <div className={styles.top__wrapper}>
                <div className={styles.top__position}>7 {t("bitSpinRules.place")} - 4%</div>
                <div className={styles.top__position}>8 {t("bitSpinRules.place")} - 3%</div>
                <div className={styles.top__position}>9 {t("bitSpinRules.place")} - 2%</div>
              </div>
              <div className={styles.top__wrapper}>
                <div className={styles.top__position}>10 {t("bitSpinRules.place")} - 1%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isScreenLg && isScreenSm && (
        <Divider className={styles.divider_fullscreen} />
      )}
    </>
  );
};

export default Rules;
