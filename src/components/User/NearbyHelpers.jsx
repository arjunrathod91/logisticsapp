import { Link } from 'react-router-dom';
import Header from './Header'
import axios from 'axios';
import { useEffect, useState } from 'react';

function NearbyHelpers() {

  const [nearbyVol,setNearbyVol] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3002/nearbyVol')
    .then((data)=>{
      setNearbyVol(data.data)})
    .catch(err=>console.log(err))
  },[nearbyVol])


  return (
    <div className="container">
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
              </div>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default NearbyHelpers;
