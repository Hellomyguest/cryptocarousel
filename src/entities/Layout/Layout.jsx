import { Header, Footer, Navigation, Lottery } from "./ui";
import styles from "./Layout.module.css";
import { useResize } from "../../shared/lib/useResize/use-resize";
import { isWebpSupported } from "react-image-webp/dist/utils";
import classNames from "classnames";

const Layout = ({ className, children }) => {
  const { isScreenMd } = useResize();
  const webp = isWebpSupported();
  return (
    <div
      className={classNames(className, {
        [styles._webp]: webp,
        [styles._png]: !webp,
      })}
    >
      <div className={styles.layout}>
        {isScreenMd && (
          <div className={styles.fixedContainer}>
            <div className={styles.fixedContainer__menuWrapper}>
              <Navigation />
              <Lottery />
            </div>
          </div>
        )}
        <div className={styles.container}>
          {!isScreenMd && <Header />}
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
