import { Link } from 'react-router-dom';
import Header from '../Header'

const cardData = [
  { id: 1, Name: 'Akshay Chaudhari', Service: 'First Aid',Location:"12km " },
  { id: 2,Name: 'Akshay Chaudhari',  Service: 'First Aid',Location:"12km " },
  { id: 3, Name: 'Akshay Chaudhari',  Service: 'First Aid',Location:"12km "}
];

function NearbyHelpers() {
  return (
    <div className="container">
    <Header />
      <h4>Nearby Helpers</h4>
      <div className="row">
        {cardData.map((card) => (
          <Link to="/volunteerprofile"><div key={card.id} className="col-lg-4 col-md-6 mb-4 ">
            <div className="card custom-card">
              <div className="card-body bg-secondary" style={{backgroundColor:"#D9D9D9"}}>
                <div className="circle custom-circle"></div>
              <h5 className="card-title">Name:{card.Name}</h5>
                <p className="card-text">Service:{card.Service}</p>
                <p className="card-text">Location:{card.Location}</p>
              </div>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default NearbyHelpers;
