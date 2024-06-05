import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Context } from "../../../../store/ContextProvider";
import { JackpotData, WinnersData } from "../Lottery/Lottery";
import { Button, Dropdown, Icon, Modal } from "../../../../shared/ui";
import SignIn from "../../../../features/SignIn/SignIn";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const handleClickSetLanguageEn = () => i18n.changeLanguage("en");
  const handleClickSetLanguageRu = () => i18n.changeLanguage("ru-RU");

  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);

  const {
    signIn,
    account: { address },
  } = useContext(Context);
  const handleClickCloseSignInDropdown = () => signIn.setValue(false);
  const handleClickSignOut = () => {
    setMenuDropdownOpen(false);
  };

  const [isGameModalOpen, setGameModalOpen] = useState(false);
  const handleClickCloseGameModal = () => setGameModalOpen(false);

  const [isWinnersModalOpen, setWinnersModalOpen] = useState(false);
  const handleClickCloseWinnersModal = () => setWinnersModalOpen(false);

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles._}>
      {(isMenuDropdownOpen || signIn.value) && <div className={styles.modal} />}
      <div className={styles.buttonsGroup}>
        {
          <Dropdown
            isOpen={isMenuDropdownOpen}
            setOpen={setMenuDropdownOpen}
            trigger={
              <Button
                className={isMenuDropdownOpen && styles.menu__trigger_opened}
              >
                <Icon iconType={isMenuDropdownOpen ? "Crosshair" : "Menu"} />
              </Button>
            }
            content={
              <>
                <div className={styles.menu__linksWrapper}>
                  <Link to="/" className={styles.menu__link}>
                    {t("navigation.homePage")}
                  </Link>
                  <Link to="/#games" className={styles.menu__link}>
                    {t("navigation.games")}
                  </Link>
                  <Link to="/Referral" className={styles.menu__link}>
                    {t("navigation.referral")}
                  </Link>
                  <Link to="/#about" className={styles.menu__link}>
                    {t("navigation.about")}
                  </Link>
                  <Link to="#" className={styles.menu__link}>
                    Whitelist
                  </Link>
                  <Link to="#" className={styles.menu__link}>
                    {t("navigation.support")}
                  </Link>
                  <div className={styles.menu__language}>
                    <Button
                      className={classNames(styles.menu__button, {
                        [styles.menu__button_active]: i18n.language === "ru-RU",
                      })}
                      onClick={handleClickSetLanguageRu}
                    >
                      Ru
                    </Button>
                    <Button
                      className={classNames(styles.menu__button, {
                        [styles.menu__button_active]: i18n.language === "en",
                      })}
                      onClick={handleClickSetLanguageEn}
                    >
                      En
                    </Button>
                  </div>
                </div>
                {address && (
                  <span
                    className={classNames(
                      styles.menu__link,
                      styles.menu__link_signOut
                    )}
                    onClick={handleClickSignOut}
                  >
                    {t("navigation.logout")}
                  </span>
                )}
                <span className={styles.menu__copyrigth}>
                  CryptoCarousel 2023
                </span>
              </>
            }
            className={classNames(styles.menuContent, {
              [styles.menuContent_enlarged]: address,
            })}
          />
        }
        {address ? null : (
          <Dropdown
            isOpen={signIn.value}
            setOpen={signIn.setValue}
            trigger={
              <Button className={signIn.value && styles.menu__trigger_opened}>
                <Icon
                  iconType={signIn.value ? "ArrowDown" : "SignIn"}
                  className={`${styles.icon} ${
                    signIn.value && styles.icon_open
                  }`}
                />
              </Button>
            }
            content={
              <SignIn
                classname={styles.signIn}
                handleClickClose={handleClickCloseSignInDropdown}
                mobile
              />
            }
            className={styles.signIn__wrapper}
          />
        )}
      </div>
      <div className={styles.buttonsGroup}>
        <Modal
          isOpen={isGameModalOpen}
          setOpen={setGameModalOpen}
          trigger={
            <Button className={styles.button}>
              <span className={styles.button__title}>{t("lottery.play")}</span>
            </Button>
          }
          content={<JackpotData handleClickClose={handleClickCloseGameModal} />}
          className={styles.gameContent}
        />
        {scroll < 100 && (
          <Modal
            isOpen={isWinnersModalOpen}
            setOpen={setWinnersModalOpen}
            trigger={
              <Button className={styles.button}>
                <span className={styles.button__title}>
                  {t("lottery.top10")}
                </span>
              </Button>
            }
            content={
              <WinnersData handleClickClose={handleClickCloseWinnersModal} />
            }
            className={styles.winsContent}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
