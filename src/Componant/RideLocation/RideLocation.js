import React from 'react';
import { Link } from 'react-router-dom';

const handleRidePaymant =()=>{
}
const RideLocation = () => {
    return (
        <div>
           <form action="">
           <label htmlFor="from">From</label>
            <br/>
            <input type="text" name='from' placeholder='where you are'/>
            <br/>
            <label htmlFor="to">To</label>
            <br/>
            <input type="text" name='to' placeholder='where you want to go'/>
            <br/>
            <br/>

            <Link to="/ride"><button onClick ={handleRidePaymant} className='btn btn-primary'>Search</button></Link>
           </form>
        </div>
    );
};

export default RideLocation;