import { Link } from 'react-router-dom';
import Header from '../Header'

const cardData = [
  { id: 1, Name: 'Akshay Chaudhari', Service: 'First Aid', Location: '12km ' },
  { id: 2, Name: 'Akshay Chaudhari', Service: 'First Aid', Location: '12km ' },
  { id: 3, Name: 'Akshay Chaudhari', Service: 'First Aid', Location: '12km ' },
];

function NearbyHelpers() {
  return (
    <div className="container pt-2">
      <Header />
      <h4>Nearby Helpers</h4>
      <div className="row">
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
