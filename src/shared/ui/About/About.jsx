import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./About.module.css";
import { ReactComponent as Comp } from "./lib/Frame.svg";
import { ReactComponent as Cloud } from "./lib/FrameDouble.svg";
import { ReactComponent as Folder } from "./lib/FrameThird.svg";

const About = ({id}) => {
  const { t } = useTranslation();
  return (
    <section className={classes.AboutUs} id={id}>
      <h1 className={classes.Title}>{t('about.title')}</h1>
      <p className={classes.Text}>
        {t('about.description')}
      </p>
      <div className={classes.AboutUsPoints}>
        <div className={classes.AboutOffer}>
          <Comp className={classes.icon} />
          <h3 className={classes.AboutUsTitle}>{t('about.opennessTitle')}</h3>
          <p className={classes.AboutUsText}>
          {t('about.opennessText')}
          </p>
        </div>
        <div className={classes.AboutOffer}>
          <Cloud className={classes.icon} />
          <h3 className={classes.AboutUsTitle}>{t('about.securityTitle')}</h3>
          <p className={classes.AboutUsText}>
          {t('about.securityText')}
          </p>
        </div>
        <div className={classes.AboutOffer}>
          <Folder className={classes.icon} />
          <h3 className={classes.AboutUsTitle}>{t('about.anonymityTitle')}</h3>
          <p className={classes.AboutUsText} style={{ height: "80px" }}>
          {t('about.anonimityText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
