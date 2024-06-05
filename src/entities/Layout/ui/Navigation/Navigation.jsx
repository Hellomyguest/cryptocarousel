import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../store/ContextProvider";
import SignIn from "../../../../features/SignIn/SignIn";
import styles from "./Navigation.module.css";
import {
  Button,
  ControlWithLabel,
  Icon,
  Modal,
  Radio,
} from "../../../../shared/ui";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const handleChange = ({ target: { value } }) => i18n.changeLanguage(value);

  const navigate = useNavigate();
  const handleClickNavigateHome = () => navigate("/");
  const handleClickNavigateGames = () => navigate("/#games");
  const handleClickNavigateReferral = () => navigate("/Referral");

  const {
    account: { address, setAddress },
  } = useContext(Context);

  const { signIn } = useContext(Context);
  const handleClose = () => signIn.setValue(false);
  const handleClickSignOut = () => setAddress("");

  return (
    <div className={styles._}>
      {address ? null : (
        <>
          <Modal
            isOpen={signIn.value}
            setOpen={signIn.setValue}
            trigger={
              <Button className={styles.button}>
                <Icon iconType="SignIn" className={styles.icon} />
                <div className={`${styles.hint} ${styles.hint_signIn}`}>
                  <span>{t("navigation.login")}</span>
                </div>
              </Button>
            }
            content={
              <SignIn
                handleClickClose={handleClose}
                closeButton
                classname={styles.signIn}
              />
            }
            className={styles.content}
          />
          <div className={styles.divider} />
        </>
      )}

      <div className={styles.buttonsWrapper}>
        <Button className={styles.button} onClick={handleClickNavigateHome}>
          <Icon iconType="Home" className={styles.icon} />
          <div className={`${styles.hint} ${styles.hint_home}`}>
            <span>{t("navigation.homePage")}</span>
          </div>
        </Button>
        <Button className={styles.button} onClick={handleClickNavigateGames}>
          <Icon iconType="Games" className={styles.icon} />
          <div className={`${styles.hint} ${styles.hint_games}`}>
            <span>{t("navigation.games")}</span>
          </div>
        </Button>
        <Button className={styles.button} onClick={handleClickNavigateReferral}>
          <Icon
            iconType="Referal"
            className={`${styles.icon} ${styles.icon_filled}`}
          />
          <div className={`${styles.hint} ${styles.hint_referal}`}>
            <span>{t("navigation.referral")}</span>
          </div>
        </Button>
      </div>
      <div className={styles.divider} />
      <div className={styles.buttonsWrapper}>
        <Button className={styles.button}>
          <Icon
            iconType="Menu"
            className={`${styles.icon} ${styles.icon_menu}`}
          />
          <div className={`${styles.hint} ${styles.hint_menu}`}>
            <span>WhiteList</span>
          </div>
        </Button>
        <Button className={styles.button}>
          <Icon
            iconType="Language"
            className={`${styles.icon} ${styles.icon_filled}`}
          />
          <div className={`${styles.hint} ${styles.hint_language}`}>
            <ControlWithLabel
              control={
                <Radio
                  value="ru-RU"
                  checked={i18n.language === "ru-Ru"}
                  onChange={handleChange}
                />
              }
              label="Ru"
            />
            <ControlWithLabel
              control={
                <Radio
                  value="en"
                  checked={i18n.language === "en"}
                  onChange={handleChange}
                />
              }
              label="En"
            />
          </div>
        </Button>
      </div>
      {address && (
        <>
          <div className={styles.divider} />
          <Button className={styles.button} onClick={handleClickSignOut}>
            <Icon iconType="SignOut" className={styles.icon} />
            <div className={`${styles.hint} ${styles.hint_signIn}`}>
              <span>{t("navigation.logout")}</span>
            </div>
          </Button>
        </>
      )}
      <Button className={styles.button}>
        <Icon
          iconType="Crypto"
          className={`${styles.icon} ${styles.icon_filled}`}
        />
        <div className={`${styles.hint} ${styles.hint_crypto}`}>
          <span>Crypto Carousel</span>
        </div>
      </Button>
    </div>
  );
};

export default Navigation;
