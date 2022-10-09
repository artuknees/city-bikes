import React , {useState} from 'react';
import Link from 'next/link';

import styles from '../../styles/HomePage.module.scss';

const HomePage = () => {

	return (
        <div className={styles.generalContainer}>
            <div className={styles.opacityContainer}>
                <div className={styles.titleContainer}>
                    <section className={styles.titleSpace}>
                        
                        <h1 className={styles.title}>Ride your bike through Buenos Aires City</h1>
                        <p>Become a member, breeze through the boroughs, and explore the city you love</p>
                        
                        <div>
                            <Link href="/stationsFinder">
                                <button className={styles.searchButton}>Search your bike!</button>                        
                            </Link>
                        </div>

                        <div className={styles.spanContainer}>
                            <span>How it works?</span>
                        </div>
                        <div className={styles.spanContainer}>
                            <span>Pricing</span>
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

export default HomePage;