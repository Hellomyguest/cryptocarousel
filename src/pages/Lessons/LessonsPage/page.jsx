import classNames from 'classnames';
import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import classes from "./page.module.css";

const LessonsPage = () => {
    const webp = isWebpSupported();

    return (
        <div className={classNames(classes._, {
            [classes._webp]: webp,
            [classes._png]: !webp,
          })}>
            <a href={'/programs/btcAddressGenerate'}>Урок 1</a>
        </div>
    );
};

export default LessonsPage;