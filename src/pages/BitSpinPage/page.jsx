import { useResize } from "../../shared/lib/useResize/use-resize";
import { isWebpSupported } from "react-image-webp/dist/utils";
import BitSpinImg from "./lib/BitSpinImg.png";
import BitSpinImgSmall from "./lib/BitSpinSmall.png";
import BitSpinImgWebp from "./lib/BitSpinImg.webp";
import BitSpinImgSmallWebp from "./lib/BitSpinSmall.webp";
import BitSpinImgEn from "./lib/BitSpinImgEn.png";
import BitSpinImgSmallEn from "./lib/BitSpinSmallEn.png";
import BitSpinImgWebpEn from "./lib/BitSpinImgEn.webp";
import BitSpinImgSmallWebpEn from "./lib/BitSpinSmallEn.webp";
import styles from "./page.module.css";
import Layout from "../../entities/Layout/Layout";
import { BitSpin, Rules } from "./ui";
import {
  Breadcrumbs,
  Games,
  Divider,
  Referral,
  Notification,
} from "../../shared/ui";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

const BitSpinPage = () => {
  const { i18n } = useTranslation();
  const { isScreenSm } = useResize();
  const webp = isWebpSupported();

  useEffect(() => {
    animateScroll.scrollToTop();
  })

  return (
    <Layout className={webp ? styles._webp : styles._png}>
      <div className={styles.Gif}>
        <Breadcrumbs className={styles.breadcrumbs} />
        <picture>
          {i18n.language === "en" ? (
            <>
              <source
                srcSet={isScreenSm ? BitSpinImgWebpEn : BitSpinImgSmallWebpEn}
                type="image/webp"
              />
              <source
                srcSet={isScreenSm ? BitSpinImgEn : BitSpinImgSmallEn}
                type="image/png"
              />
              <img
                src={isScreenSm ? BitSpinImgEn : BitSpinImgSmallEn}
                alt="BitSpinImg"
                className={styles.img}
              />
            </>
          ) : (
            <>
              <source
                srcSet={isScreenSm ? BitSpinImgWebp : BitSpinImgSmallWebp}
                type="image/webp"
              />
              <source
                srcSet={isScreenSm ? BitSpinImg : BitSpinImgSmall}
                type="image/png"
              />
              <img
                src={isScreenSm ? BitSpinImg : BitSpinImgSmall}
                alt="BitSpinImg"
                className={styles.img}
              />
            </>
          )}
        </picture>
      </div>
      <BitSpin />
      <Rules />
      <Games />
      <Divider />
      <Referral />
      <Notification />
    </Layout>
  );
};

export default BitSpinPage;
