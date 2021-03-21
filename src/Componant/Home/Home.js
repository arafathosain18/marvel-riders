import React, { useEffect, useState } from 'react';
import AllRides from '../AllRides/AllRides';
import FakeData from '../../FakeData/FakeData.json';
import image from '../../image/Bg.png';

const Home = () => { 
    const [rides, setRides] = useState([]);
    
    useEffect(()=>{
        setRides(FakeData);
       console.log(FakeData);
    } ,[])
    return (
        <div className='container'style={{backgroundImage: `url(${image})`, width:'100%'}}>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
            {
                rides.map(rides =><div className='cl-lg-3 cl-sm-12'> <AllRides rides={rides}></AllRides></div>)
            }
            </div>
        </div>
    );
};

export default Home;