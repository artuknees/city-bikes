import React , {useState} from 'react';
import styles from '../../styles/About.module.scss';

const About = () => {

    const [stations, setStations] = useState([]);
    const [basicData,setBasicData] = useState('');
    const [selectedIndex,setSelectedIndex] = useState('');


	return (
        <div className={styles.generalContainer}>

            
            <div className={styles.parragraph}>
                <h1>Bicicletas públicas</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
            


        </div>
	);
}

export default About;