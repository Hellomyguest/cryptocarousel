import Logo from "./lib/Logo.svg";
import styles from "./Footer.module.css";
import { useResize } from "../../../../shared/lib/useResize/use-resize";
import Icon from "../../../../shared/ui/Icon/Icon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { socialMedia } from "../../../../shared/lib/socialMediaLinks";

const Footer = () => {
  const { t } = useTranslation();
  const { isScreenSm, isScreenLg, isScreenXl, isScreenXxl } = useResize();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerOfferLeft}>
        {isScreenSm && (
          <div className={styles.OfferLogo}>
            <img src={Logo} alt="" />
          </div>
        )}
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{t("navigation.navigation")}</h3>
          <div className={styles.offerLinks}>
            {isScreenLg && isScreenXl && isScreenXxl ? (
              <>
                <div className={styles.linksWrapper}>
                  <Link to="/"
                    className={styles.link}
                  >
                    {t("navigation.homePage")}
                  </Link>
                  <Link to="/#games"
                    className={styles.link}
                  >
                    {t("navigation.games")}
                  </Link>
                </div>
                <div className={styles.linksWrapper}>
                  <Link to="/referral"
                    className={styles.link}
                  >
                    {t("navigation.referral")}
                  </Link>
                  <Link to="/#about"
                    className={styles.link}
                  >
                    {t("navigation.about")}
                  </Link>
                </div>
                <div className={styles.linksWrapper}>
                  <Link className={styles.link}>Whitelist</Link>
                  <Link className={styles.link}>{t("navigation.support")}</Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.linksWrapper}>
                  <Link to="/"
                    className={styles.link}
                  >
                    {t("navigation.homePage")}
                  </Link>
                  <Link to="/#games"
                    className={styles.link}
                  >
                    {t("navigation.games")}
                  </Link>
                  <Link to="/referral"
                    className={styles.link}
                  >
                    {t("navigation.referral")}
                  </Link>
                </div>
                <div className={styles.linksWrapper}>
                  <Link to="/#about"
                    className={styles.link}
                  >
                    {t("navigation.about")}
                  </Link>
                  <Link className={styles.link}>Whitelist</Link>
                  <Link className={styles.link}>{t("navigation.support")}</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.footerOfferRight}>
        <h3 className={styles.title}>{t("navigation.contacts")}</h3>
        <div className={styles.buttonsWrapper}>
          {socialMedia.map(({ iconType, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              key={iconType}
            >
              <Icon iconType={iconType} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
