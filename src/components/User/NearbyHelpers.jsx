import { Link } from 'react-router-dom';

import Header from './Header'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header'


function NearbyHelpers() {

  const [nearbyVol,setNearbyVol] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3002/nearbyVol')
    .then((data)=>{
      setNearbyVol(data.data)})
    .catch(err=>console.log(err))
  },[nearbyVol])


  return (
    <div className="container pt-2">
      <Header />
      <h4>Nearby Helpers</h4>
      <div className="row">
        {nearbyVol.map((item) => (
          <Link to="/volunteerprofile"><div key={item} className="col-lg-4 col-md-6 mb-4 ">
            <div className="card custom-card">
              <div className="card-body bg-secondary" style={{backgroundColor:"#D9D9D9"}}>
                <div className="circle custom-circle"></div>
              <h5 className="card-title">Name:{item.username}</h5>
                <p className="card-text">Service:{item.whatYouProvide}</p>
                <p className="card-text">Location:{item.address}</p>
        {cardData.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6 mb-4">
            <Link to="/volunteerprofile" style={{ textDecoration: 'none' }}>
              <div className="card custom-card">
                <div className="card-body " style={{backgroundColor:"rgb(41, 169, 204)"}}>
                  <div className="circle custom-circle"></div>
                  <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Name: {card.Name}</h5>
                  <p className="card-text" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Service: {card.Service}</p>
                  <p className="card-text" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Location: {card.Location}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyHelpers;
