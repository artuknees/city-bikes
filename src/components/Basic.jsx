import React , {useState , useEffect} from 'react';
import axios from 'axios';

const Basic = () => {

    const [generalData,setGeneralData] = useState([]);

    const api = axios.create({
        baseURL: 'http://api.citybik.es/v2/networks/ecobici-buenos-aires'
    });
    
    useEffect(() => {
        const download = async () => {
            const { data , status} = await api.get('',{});
            setGeneralData(data.network);
            console.log(data.network);
            // console.log(data.network.stations.length);
        }
        download();
        },[]);
    
	return (
        <>
		<h1>City Bikes company</h1>
        
        <h5>{generalData?.company}</h5>

        {generalData?.stations? 
            <div>Stations = { generalData.stations.length }</div> : null
        }
        </>
	);
}

export default Basic;