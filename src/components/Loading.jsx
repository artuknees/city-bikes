import React from 'react';
import styles from '../../styles/Loading.module.scss';

const Loading = () => {

	return (
        <div className={styles.container}>
            <div className={styles.progress}></div>
        </div>
	);
}

export default Loading;