import { useContext, useRef, useState } from "react";
import styles from "./ReferralAdress.module.css";
import Icon from "../../../shared/ui/Icon/Icon";
import { ReactComponent as ReferralFrame } from "../lib/ReferralFrame.svg";
import { useTranslation } from "react-i18next";
import { Context } from "../../../store/ContextProvider";

const ReferralAdress = ({ className }) => {
  const { t } = useTranslation();
  const [isNotificationShown, setNotificationShown] = useState(false);
  const referralRef = useRef();
  const {
    account: { address },
  } = useContext(Context);

  const handleClickCopyToClipboard = () => {
    setNotificationShown(true);
    navigator.clipboard.writeText(referralRef.current.textContent);
    setTimeout(() => setNotificationShown(false), 1000);
  };
  return (
    <div className={className}>
      <ReferralFrame className={styles.referral__frame} />
      <span className={styles.referral__text}>
        {address
          ? isNotificationShown
            ? t("referral.copied")
            : `https://cryptocarousel.fun/?ref=${address.substr(
                0,
                5
              )} … ${address.substr(-3, 3)}`
          : t("referral.auth")}
      </span>
      <span ref={referralRef} className={styles.referral__link}>
        {address
          ? `https://cryptocarousel.fun/?ref=${address}`
          : t("referral.auth")}
      </span>
      <button
        className={styles.referral__copyButton}
        onClick={handleClickCopyToClipboard}
      >
        <Icon iconType="CopyIcon" />
      </button>
    </div>
  );
};

export default ReferralAdress;
