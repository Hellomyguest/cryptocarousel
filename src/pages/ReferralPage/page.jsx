import classNames from "classnames";
import ReferralImg from "./lib/ReferralImg.png";
import ReferralImgSmall from "./lib/ReferralImgSmall.png";
import ReferralImgWebp from "./lib/ReferralImg.webp";
import ReferralImgSmallWebp from "./lib/ReferralImgSmall.webp";
import ReferralImgEn from "./lib/ReferralImgEn.png";
import ReferralImgSmallEn from "./lib/ReferralImgSmallEn.png";
import ReferralImgWebpEn from "./lib/ReferralImgEn.webp";
import ReferralImgSmallWebpEn from "./lib/ReferralImgSmallEn.webp";
import { ReactComponent as Tutorial1 } from "./lib/Tutorial1.svg";
import { ReactComponent as Tutorial2 } from "./lib/Tutorial2.svg";
import { ReactComponent as Tutorial3 } from "./lib/Tutorial3.svg";
import { ReactComponent as Tutorial4 } from "./lib/Tutorial4.svg";
import { ReactComponent as BackRight } from "./lib/BackRight.svg";
import { ReactComponent as BackLeft } from "./lib/BackLeft.svg";
import { ReactComponent as Steps } from "./lib/Steps.svg";
import { ReactComponent as StepsMobile } from "./lib/StepsMobile.svg";
import ReferralAdress from "./ui/ReferralAdress";
import styles from "./page.module.css";
import { useResize } from "../../shared/lib";
import Layout from "../../entities/Layout/Layout";
import { Breadcrumbs, Divider, Games } from "../../shared/ui";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

const ReferralPage = () => {
  const { t, i18n } = useTranslation();
  const { isScreenLg, isScreenMd, isScreenSmm, isScreenSm } = useResize();

  useEffect(() => {
    animateScroll.scrollToTop();
  })

  return (
    <Layout className={styles._}>
      <div className={styles.referral}>
        <Breadcrumbs className={styles.referral__breadcrumbs} />
        <picture>
          {i18n.language === "en" ? (
            <>
              <source
                srcSet={isScreenSm ? ReferralImgWebpEn : ReferralImgSmallWebpEn}
                type="image/webp"
              />
              <source
                srcSet={isScreenSm ? ReferralImgEn : ReferralImgSmallEn}
                type="image/png"
              />
              <img
                src={isScreenSm ? ReferralImgEn : ReferralImgSmallEn}
                alt="ReferralImg"
                className={styles.referral__img}
              />
            </>
          ) : (
            <>
              <source
                srcSet={isScreenSm ? ReferralImgWebp : ReferralImgSmallWebp}
                type="image/webp"
              />
              <source
                srcSet={isScreenSm ? ReferralImg : ReferralImgSmall}
                type="image/png"
              />
              <img
                src={isScreenSm ? ReferralImg : ReferralImgSmall}
                alt="ReferralImg"
                className={styles.referral__img}
              />
            </>
          )}
        </picture>
        <ReferralAdress className={styles.referral__adress} />
      </div>
      <div className={styles.tutorial}>
        <h3 className={styles.title}>{t("referral.whatToDo")}</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Tutorial1 className={styles.card__img} />
            <div className={styles.informationWrapper}>
              <span className={styles.card__title}>
                {t("referral.howItWork")}
              </span>
              <span className={styles.card__text}>
                {t("referral.description")}
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <Tutorial2 className={styles.card__img} />
            <div className={styles.informationWrapper}>
              <span className={styles.card__title}>
                {t("referral.getLink")}
              </span>
              <span className={styles.card__text}>
                {t("referral.findLink")}
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <Tutorial3 className={styles.card__img} />
            <div className={styles.informationWrapper}>
              <span className={styles.card__title}>
                {t("referral.addLink")}
              </span>
              <span className={styles.card__text}>
                {t("referral.sendLink")}
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <Tutorial4 className={styles.card__img} />
            <div className={styles.informationWrapper}>
              <span className={styles.card__title}>{t("referral.earn")}</span>
              <span className={styles.card__text}>
                {t("referral.earnDescription")}
              </span>
            </div>
          </div>
          {isScreenLg && <BackLeft className={styles.backLeft} />}
          <BackRight className={styles.backRight} />
        </div>
        <div className={styles.accrual}>
          <h3 className={classNames(styles.title, styles.title_leftSided)}>
            {t("referral.accrual")}
          </h3>
          <span className={classNames(styles.text, styles.text_leftSided)}>
            <b>{t("referral.firstLevel")}</b>
            {t("referral.firstLevelDescription")}
          </span>
          <span className={classNames(styles.text, styles.text_leftSided)}>
            <b>{t("referral.secondLevel")}</b>
            {t("referral.secondLevelDescription")}
          </span>
          <span className={classNames(styles.text, styles.text_leftSided)}>
            <b>{t("referral.thirdLevel")}</b>
            {t("referral.thirdLevelDescription")}
          </span>
          {isScreenLg || (!isScreenMd && isScreenSmm) ? (
            <div className={styles.accrual__steps}>
              <Steps className={styles.accrual__stepsImg} />
              <div
                className={classNames(
                  styles.accrual__step,
                  styles.accrual__step_first
                )}
              >
                <span
                  className={classNames(
                    styles.step__title,
                    styles.step__title_blue
                  )}
                >
                  {t("referral.you")}
                </span>
                <div
                  className={classNames(
                    styles.step__divider,
                    styles.step__divider_blue
                  )}
                />
                <span className={styles.step__text}>
                  {t("referral.youDescription")}
                </span>
              </div>
              <div
                className={classNames(
                  styles.accrual__step,
                  styles.accrual__step_second
                )}
              >
                <span
                  className={classNames(
                    styles.step__title,
                    styles.step__title_pink
                  )}
                >
                  {t("referral.step1Level")}
                </span>
                <div
                  className={classNames(
                    styles.step__divider,
                    styles.step__divider_pink
                  )}
                />
                <span className={styles.step__text}>
                  {t("referral.step1LevelDescription")}
                </span>
              </div>
              <div
                className={classNames(
                  styles.accrual__step,
                  styles.accrual__step_third
                )}
              >
                <span
                  className={classNames(
                    styles.step__title,
                    styles.step__title_darkPurple
                  )}
                >
                  {t("referral.step2Level")}
                </span>
                <div
                  className={classNames(
                    styles.step__divider,
                    styles.step__divider_darkPurple
                  )}
                />
                <span className={styles.step__text}>
                  {t("referral.step2LevelDescription")}
                </span>
              </div>
              <div
                className={classNames(
                  styles.accrual__step,
                  styles.accrual__step_fourth
                )}
              >
                <span
                  className={classNames(
                    styles.step__title,
                    styles.step__title_purple
                  )}
                >
                  {t("referral.step3Level")}
                </span>
                <div
                  className={classNames(
                    styles.step__divider,
                    styles.step__divider_purple
                  )}
                />
                <span className={styles.step__text}>
                  {t("referral.thirdLevelDescription")}
                </span>
              </div>
            </div>
          ) : (
            <StepsMobile className={styles.accrual__stepsImg_small} />
          )}
        </div>
      </div>
      <Games />
      <Divider />
    </Layout>
  );
};

export default ReferralPage;
