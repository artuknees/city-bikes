import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logoBikes.png';
import styles from '../../styles/Header.module.scss';

const Header = () => {

	return (
		<>
			<nav className={styles.Nav}>
				<div className={styles.navbarLeft}>
					<ul className={styles.itemsLeft}>
						<figure className={styles.logoFigure}>
							<Link href="/">
								<div className={styles.ImageDetail}>
									<Image src={logo} 
									objectFit={'contain'} 
									></Image>
								</div>
							</Link>
						</figure>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/stationsFinder">Stations</Link>
						</li>
						<li>
							<Link href="/">Donate</Link>
						</li>
					</ul>
				</div>
				<div className={styles.navbarRigth}>
					<ul className={styles.itemsRight}>
						<li>
							<Link href="/logIn"> Log In</Link>
						</li>
						<div className={styles.logIn}>
							<Link href="/"> Join In</Link>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;