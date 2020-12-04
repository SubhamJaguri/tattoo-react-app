import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'

const Loader = ({ spinning = true, fullScreen }) => {
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        },5000);
    },[]);
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !loader,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

export default Loader