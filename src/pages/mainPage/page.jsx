import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import video from "./lib/crypto.mp4";
import videoSmall from "./lib/cryptoSmall.mp4";
import { useResize } from "../../shared/lib";
import Layout from "../../entities/Layout/Layout";
import { About, Divider, Games, Referral } from "../../shared/ui";
import styles from "./page.module.css";
import { animateScroll, scroller } from "react-scroll";

const MainPage = () => {
  const { isScreenSm } = useResize();
  const [searchParams] = useSearchParams();
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoaded = () => setVideoLoaded(true);

  useEffect(() => {
    const cookieRef = Cookies.get("ref");
    if (cookieRef === undefined) {
      const ref = searchParams.get("ref");
      if (ref) Cookies.set("ref", ref);
    }
  });

  const location = useLocation();
  useEffect(() => {
    if (isVideoLoaded) {
      if (location.hash === "#games") {
        scroller.scrollTo("games", {
          duration: 500,
          smooth: "easeInOutQuad",
          offset: -30,
        });
      } else if (location.hash === "#about") {
        scroller.scrollTo("about", {
          duration: 500,
          smooth: "easeInOutQuad",
          offset: -30,
        });
      } else if (location.hash === "") animateScroll.scrollToTop();
    } else if (location.hash === "") animateScroll.scrollToTop();
  }, [isVideoLoaded, location]);

  return (
    <Layout>
      <div className={styles.videoWrapper}>
        <video
          width="100%"
          preload="auto"
          autoPlay
          loop
          playsInline
          muted
          className={styles.video}
          onLoadedData={handleVideoLoaded}
        >
          <source src={isScreenSm ? video : videoSmall} type="video/mp4" />
        </video>
      </div>
      <Games className={styles.games} id="games" />
      <Divider />
      <About id="about" />
      <Referral />
    </Layout>
  );
};

export default MainPage;
