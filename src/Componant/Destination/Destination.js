import React, { useEffect, useState } from 'react';
import './Destination.css';
import DestinationData from '../DestinationData/DestinationData.json';
import RideLocation from '../RideLocation/RideLocation';
import image from '../../image/Map.png';





const Destination = () => {

    const [vahicle, setVahicle] = useState([]);
    useEffect(() => {
        const url = DestinationData;
        setVahicle(url);
        console.log(url);
    },[vahicle])
    
    return (
        <div className='destination-container'>
            <div className='form-container'>
                <RideLocation></RideLocation>
            </div>
            <div className='map-container'>
                <img style={{width:'70%', marginLeft:'15px'}} src={image} alt=""/>
            </div>
        </div>
    );
};

export default Destination;