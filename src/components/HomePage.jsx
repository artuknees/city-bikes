import React , {useState} from 'react';
import homeImage from '../../public/homeImage.webp';
import Image from 'next/image';
import styles from '../../styles/HomePage.module.scss';

const HomePage = () => {

    const [stations, setStations] = useState([]);
    const [basicData,setBasicData] = useState('');
    const [selectedIndex,setSelectedIndex] = useState('');


	return (
        <div className={styles.generalContainer}>
            <figure className={styles.figure}>
                <Image src={homeImage} objectFit={'cover'} ></Image>
            </figure>
            {/* <h1>Bicicletas públicas</h1> */}
            


        </div>
	);
}

export default HomePage;