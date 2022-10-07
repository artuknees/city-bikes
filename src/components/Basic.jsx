import React , {useState , useEffect} from 'react';
import axios from 'axios';
import styles from '../../styles/basic.module.scss';

const Basic = () => {

    const [stations, setStations] = useState([]);
    const [basicData,setBasicData] = useState('');
    const [selectedIndex,setSelectedIndex] = useState('');

    useEffect (() => {
        const fetchData = async () => {
            const {data , status} = await axios('http://api.citybik.es/v2/networks/ecobici-buenos-aires');
            if (status === 200) {
                setBasicData(data.network.company[0]);
                setStations(data.network.stations.map((item,index) => ({
                    name: item.name,
                    id: item.id,
                    free_bikes: item.free_bikes,
                    empty_slots: item.empty_slots,
                    address: item.extra.address,
                    last_updated: item.extra.last_updated,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    timestamp: item.timestamp,
                    index: index,
                })));
            };
            
        };
        fetchData();

    },[]);

    const fetchData = async () => {
        const {data , status} = await axios('http://api.citybik.es/v2/networks/ecobici-buenos-aires');
        if (status === 200) {
            setBasicData(data.network.company[0]);
            setStations(data.network.stations.map((item,index) => ({
                name: item.name,
                id: item.id,
                free_bikes: item.free_bikes,
                empty_slots: item.empty_slots,
                address: item.extra.address,
                last_updated: item.extra.last_updated,
                latitude: item.latitude,
                longitude: item.longitude,
                timestamp: item.timestamp,
                index: index,
            })));
        };  
    };


    const selectStation = (value) => {
        const selection = document.getElementById('selectName');
        const result = selection.options[selection.selectedIndex].value;
        setSelectedIndex(result);

        return result
    };

	return (
        <div className={styles.basicContainer}>
            <h1>Bicicletas públicas</h1>
            
            <h5>{basicData ? basicData : 'Loading...'}</h5>

            {basicData ? <p> Stations = { stations ? stations.length : '' } </p>  : <p>Loading stations...</p>  }
            
            { selectedIndex ? 

            <div className={styles.container}>
                <button className={styles.button} onClick={() => fetchData()}>
                    <span className={styles.span}>Refresh</span>
                </button>
            </div>
            : null }

            <p>
                <span>Select a station: </span>
                { basicData ?
                <select defaultValue={'Seleccionar'} name="" id="selectName" onChange={(e) => selectStation(e.target.value)}>
                    <option value='Seleccionar' disabled>Seleccionar</option>
                    { [...stations].sort((a,b) => a.name.localeCompare(b.name)).map(item => <option value={item.index} key={item.index}>{item.name}</option>)  } 
                </select> : <span>Loading stations...</span> }
            </p>
            
            {selectedIndex === '' ? null : 
                <div >
                    <p>Seleccionaste la estación: { stations[selectedIndex].name }</p>
                    <p>Dirección exacta: { stations[selectedIndex].address }</p>
                    <p>Bicicletas disponibles: { stations[selectedIndex].free_bikes }</p>
                    <p>Lugares libres: { stations[selectedIndex].empty_slots }</p>
                    <p>Última actualización: { new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format((stations[selectedIndex].last_updated)*1000) }</p>
                </div>    
            }


        </div>
	);
}

export default Basic;