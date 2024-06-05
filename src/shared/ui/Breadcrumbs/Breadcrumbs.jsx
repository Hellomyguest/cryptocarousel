import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routes } from "../../../App";
import styles from "./Breadcrumbs.module.css";

const EN_BREADCRUMBS_MAP = {
  Главная: "Home",
  Игры: "Games",
  "Реферальная программа": "Referral program",
  "Bit Spin" : "Bit Spin"
};

const translateToEn = (breadcrumb) => {
  const enBreadcrumb = {
    ...breadcrumb,
    props: { children: EN_BREADCRUMBS_MAP[breadcrumb.props.children] },
  };
  return enBreadcrumb;
};

const Breadcrumbs = ({ className }) => {
  const breadcrumbs = useBreadcrumbs(routes);
  const { i18n } = useTranslation();

  return (
    <div className={classNames(styles._, className)}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        return (
          <div
            className={classNames(styles.wrapper, {
              [styles.wrapper_last]: index === breadcrumbs.length - 1,
            })}
            key={`${index}${match.url}`}
          >
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link to={match.route.path || ""} className={styles.link}>
                  {i18n.language === "en" ? translateToEn(breadcrumb) : breadcrumb}
                </Link>
                <span>/</span>
              </>
            ) : (
              i18n.language === "en" ? translateToEn(breadcrumb) : breadcrumb
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
