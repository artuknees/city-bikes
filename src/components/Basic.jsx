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
                
                {basicData ? <h3>{basicData}</h3> : <h3>Loading data...</h3>}

                {basicData ? <p> Stations = { stations ? stations.length : '' } </p>  : <Loading/> }
                
                { selectedIndex ? 

                    <div className={styles.container}>
                        <button className={styles.button}>

                            <span className={styles.span}>Refresh</span>
                        </button>
                    </div>
                : null }


                {basicData ? 
                    <>
                    <span>Select a station: </span>
                    <select defaultValue={'Seleccionar'} name="" id="selectName" onChange={(e) => selectStation(e.target.value)}>
                    <option value='Seleccionar' disabled>Seleccionar</option>
                    { [...stations].sort((a,b) => a.name.localeCompare(b.name)).map(item => <option value={item.index} key={item.index}>{item.name}</option>)  } 
                    </select> 
                    </>
                    : null}

                
                {selectedIndex === '' ? null : 
                    <div className={styles.results}>
                        <p><b>Seleccionaste la estación:</b> { stations[selectedIndex].name }</p>
                        <p><b>Dirección exacta:</b> { stations[selectedIndex].address }</p>
                        <p><b>Bicicletas disponibles:</b> { stations[selectedIndex].free_bikes }</p>
                        <p><b>Lugares libres:</b> { stations[selectedIndex].empty_slots }</p>
                        <p><b>Última actualización:</b> { new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format((stations[selectedIndex].last_updated)*1000) }</p>
                    </div>    
                }

            </div>
        </div>
	);
}

export default Basic;