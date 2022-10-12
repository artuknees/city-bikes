import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetStations = (API) => {
    const [stations, setStations] = useState([]);
    const [basicData,setBasicData] = useState('');

    useEffect (() => {
        const fetchData = async () => {
            const {data , status} = await axios(API);
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

    },[API]); 
  
    return {stations,basicData};
};

export default useGetStations;
