import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const AllRides = (props) => {
    // const [name, image] = props.rides;
   const {name, image} = props.rides;

    const history = useHistory()
    const handleDestination =() => {
    
        history.push('/destination')
}

    
    return (

        <Card onClick={handleDestination} style={{ width: '15rem', marginTop:'130px', marginRight:'55px'}}>
        <Card.Img style={{width:'145px'}}variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    );
};

export default AllRides;