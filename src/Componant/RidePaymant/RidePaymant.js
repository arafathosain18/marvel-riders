import React from 'react';
import fakedata from '../DestinationData/DestinationData.json';
import './RidePayment.css'
import image from '../../image/Map.png';
const RidePaymant = () => {
    const id = 1;
    const id1 = 2;
    const id2 = 3;
    const id3 = 4;
    const details = fakedata.find(vh => vh.id === id);
    const details1 = fakedata.find(vh => vh.id === id1);
    const details2 = fakedata.find(vh => vh.id === id2);
    const details3 = fakedata.find(vh => vh.id === id3);
    console.log(details.img,details1.img,details2.img, details3.img );
    const uuuuu = fakedata.filter(vh => vh.id === id);
    console.log(uuuuu);
    return (
        <div className='container'>
                <div className='form-container'>
                        <ul className='bg-primary'>
                            <li>Gulshan</li>
                            <li style={{listStyle:'none'}} >To</li>
                            <li>Mirpur 10</li>
                        </ul>

                        <form action="">
                            <ul>
                                <li className='d-flex' style={{listStyle:'none'}}>
                                        <img className='search' style={{width:'30px'}}src={details.img} alt=""/>
                                        <p className='search' >Car</p>
                                    <p className='search'>$70</p>
                                </li>
                                <li className='d-flex' style={{listStyle:'none'}}>
                                    <img className='search' style={{width:'30px'}} src={details1.img} alt=""/>
                                    <p className='search'>Bus</p>
                                    <p className='search'>$50</p>
                                </li>
                                <li className='d-flex' style={{listStyle:'none'}}>
                                    <img className='search' style={{width:'30px'}} src={details2.img} alt=""/>
                                    <p className='search'>Train</p>
                                    <p className='search'>$120</p> 
                                </li>
                                <li className='d-flex' style={{listStyle:'none'}}>
                                    <img className='search' style={{width:'30px'}} src={details3.img} alt=""/>
                                    <p className='search'>Bike</p> 
                                    <p className='search'>$90</p>
                                </li>
                            </ul>
                        </form>
                </div>
                <div className='map-container'>
                        <img style={{width:'70%', marginLeft:'120px'}} src={image} alt=""/>
                </div>
        </div>
    );
};

export default RidePaymant;