import React from 'react';
// import Link from 'next/link';

import styles from '../../styles/LogIn.module.scss';

const LogIn = () => {

	return (
        <div className={styles.generalContainer}>
            <div className={styles.opacityContainer}>
                <div className={styles.titleContainer}>
                    <section className={styles.formContainer}>
                        <div className={styles.formSpace}>
                            <span>Happy to have you back!</span>
                            <form>
                                <div className={styles.labelInput}>
                                    <label htmlFor="">Username</label>
                                    <input type="text" />
                                </div>
                                <div className={styles.labelInput}>
                                    <label htmlFor="">Password</label>
                                    <input type="password" />
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button>Log In</button>
                                </div>
                                
                                <span className={styles.formSpan}>Forgot your password?</span>
                                
                            </form>
                        </div>
                        
                    </section>
                </div>
            </div>
            <div className={styles.lastContainer}>
                <div className={styles.sourceFooter}>
                    <p>Powered by CityBikes API</p>
                    <p>http://api.citybik.es/v2/</p>
                </div>
                <div className={styles.footerContainer}>
                    <p>Made with <b>♡</b> at Villa Urquiza</p>
                </div>
            </div>
        </div>
	);
}

export default LogIn;