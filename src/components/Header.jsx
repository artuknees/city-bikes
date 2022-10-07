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
						<span>
							<Link href="/about">About</Link>
						</span>
						<span>
							<Link href="/stationsFinder">Stations</Link>
						</span>
						<span>
							<Link href="/">Donate</Link>
						</span>
					</ul>
				</div>
				<div className={styles.navbarRigth}>
					<ul className={styles.itemsRight}>
						<span>
							<Link href="/"> Log In</Link>
						</span>
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