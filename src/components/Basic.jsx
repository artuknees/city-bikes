import React , {useState , useEffect} from 'react';
// import axios from 'axios';
import Loading from './Loading';
import useGetStations from '../hooks/useGetStations';
import styles from '../../styles/basic.module.scss';

const Basic = () => {

    const [selectedIndex,setSelectedIndex] = useState('');
    const API = 'http://api.citybik.es/v2/networks/ecobici-buenos-aires';
    const {stations , basicData} = useGetStations(API);

    const selectStation = (value) => {
        const selection = document.getElementById('selectName');
        const result = selection.options[selection.selectedIndex].value;
        setSelectedIndex(result);
        return result
    };

	return (
        <div className={styles.basicContainer}>
            <div className={styles.dataContainer}>

                <h1>Find your bike or your empty slot</h1>
                
                {basicData ? null : 
                    <div className={styles.loaderContainer}>
                        <h3 className={styles.LoadingTitle}>Loading data...</h3>
                        <Loading/>
                    </div>
                }

                {basicData ? <p> Stations found: { stations ? stations.length : '' } </p>  : null }
                
                { selectedIndex ? 

                    <div className={styles.container}>
                        <button className={styles.button}>Refresh
                            {/* <span className={styles.span}>Refresh</span> */}
                        </button>
                    </div>
                : null }


                {basicData ? 
                    <div className={styles.selectContainer}>
                        <span className={styles.span}>Select a station: </span>
                        <select defaultValue={'Seleccionar'} name="" id="selectName" onChange={(e) => selectStation(e.target.value)}>
                        <option value='Seleccionar' disabled>Seleccionar</option>
                        { [...stations].sort((a,b) => a.name.localeCompare(b.name)).map(item => <option value={item.index} key={item.index}>{item.name}</option>)  } 
                        </select> 
                    </div>
                    : null}

                
                {selectedIndex === '' ? null : 
                    <div className={styles.results}>
                        <p><b>Seleccionaste la estaci??n:</b> { stations[selectedIndex].name }</p>
                        <p><b>Direcci??n exacta:</b> { stations[selectedIndex].address }</p>
                        <p><b>Bicicletas disponibles:</b> { stations[selectedIndex].free_bikes }</p>
                        <p><b>Lugares libres:</b> { stations[selectedIndex].empty_slots }</p>
                        <p><b>??ltima actualizaci??n:</b> { new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format((stations[selectedIndex].last_updated)*1000) }</p>
                    </div>    
                }
            </div>
        </div>
	);
}

export default Basic;