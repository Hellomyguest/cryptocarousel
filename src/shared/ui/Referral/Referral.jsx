import { useNavigate } from "react-router-dom";
import { ReactComponent as Comp } from "./lib/Comp.svg";
import { ReactComponent as Back } from "./lib/ShortArrow.svg";
import { useResize } from "../../lib";
import styles from "./Referral.module.css";
import { useTranslation } from "react-i18next";

const Referral = () => {
  const { t } = useTranslation();
  const { isScreenSm, isScreenXxl } = useResize();

  const navigate = useNavigate();
  const handleClickNavigateReferral = () => navigate("/Referral");

  return (
    <section className={styles._}>
      {!isScreenSm && <Back className={styles.background} />}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("referral.title")}</h1>
        <span className={styles.text}>{t("referral.text")}</span>
        <button
          className={styles.navigateButton}
          onClick={handleClickNavigateReferral}
        >
          {t("referral.more")}
        </button>
      </div>
      {isScreenXxl && <Comp />}
    </section>
  );
};

export default Referral;
