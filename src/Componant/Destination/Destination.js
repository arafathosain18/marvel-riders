import React, { useEffect, useState } from 'react';
import './Destination.css';
import DestinationData from '../DestinationData/DestinationData.json';
import RideLocation from '../RideLocation/RideLocation';
import { useParams } from 'react-router';
import image from '../../image/Map.png';





const Destination = () => {
    const {id} = useParams();
    const [vahicle, setVahicle] = useState([]);
    useEffect(() => {
        const url = DestinationData;
        setVahicle(url);
        console.log(url);
    },[])
    
    return (
        <div className='destination-container'>
            <div className='form-container'>
                <RideLocation></RideLocation>
            </div>
            <div className='map-container'>
                <img style={{width:'70%', marginLeft:'120px'}} src={image} alt=""/>
            </div>
        </div>
    );
};

export default Destination;