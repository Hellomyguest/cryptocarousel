import classNames from "classnames";
import { ReactComponent as DividerImg } from "./lib/Divider.svg";
import styles from './Divider.module.css'

const Divider = ({className}) => {
    return (
        <div className={classNames(styles._, className)}>
        <DividerImg className={styles.img} />
      </div>
    )
}

export default Divider;