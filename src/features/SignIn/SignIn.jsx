import styles from "./SignIn.module.css";
import metamaskIcon from "./lib/metamaskIcon.png";
import walletconnectIcon from "./lib/walletconnectIcon.png";
import { ReactComponent as Frame } from "./lib/ButtonFrame.svg";
import { Notification } from "../../shared/ui";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/ContextProvider";

const SignIn = ({ classname, handleClickClose, closeButton, mobile }) => {
  const { t } = useTranslation();
  const {
    account: { setAddress },
    balance: { setBalance },
  } = useContext(Context);

  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleClickMetamask = () => {
    setAddress("123123123");
    setBalance(1000);
    handleClickClose();
  };
  const handleClickWalletConnect = () => {
    setAddress("123123123");
    setBalance(1000);
    handleClickClose();
  };

  return (
    <>
      <Notification
        message={t("signIn.notificationMessage")}
        isOpen={isNotificationOpen}
        setOpen={setNotificationOpen}
      />
      <div className={`${styles._} ${classname}`}>
        {closeButton && (
          <button className={styles.closeButton} onClick={handleClickClose}>
            <div className={styles.crosshair}>
              <div className={styles.crosshair__left}></div>
              <div className={styles.crosshair__right}></div>
            </div>
          </button>
        )}
        <span className={`${styles.title} ${mobile && styles.title_mobile}`}>
          {mobile
            ? t("signIn.signInTitle")
            : t("signIn.signInTitle").toUpperCase()}
        </span>
        <div
          className={`${styles.buttonWrapper} ${
            mobile && styles.buttonWrapper_mobile
          }`}
        >
          <button
            className={`${styles.button} ${mobile && styles.button_mobile}`}
            onClick={handleClickMetamask}
          >
            <Frame className={styles.button__frame} />
            <img
              src={metamaskIcon}
              alt="metamask"
              className={`${styles.button__icon} ${
                mobile && styles.button__icon_mobile
              }`}
            />
            <span
              className={`${styles.button__title} ${
                mobile && styles.button__title_mobile
              }`}
            >
              MetaMask
            </span>
          </button>
          <button
            className={`${styles.button} ${mobile && styles.button_mobile}`}
            onClick={handleClickWalletConnect}
          >
            <Frame className={styles.button__frame} />
            <img
              src={walletconnectIcon}
              alt="walletconnect"
              className={`${styles.button__icon} ${
                mobile && styles.button__icon_mobile
              }`}
            />
            <span
              className={`${styles.button__title} ${
                mobile && styles.button__title_mobile
              }`}
            >
              WalletConnect
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
