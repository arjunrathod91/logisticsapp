import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


const AskForHelp = () => {
    return (
        <>
        <Header />

        <div >
          <Link to="/useremergencyinfo"><p className="help">Ask For A Help</p></Link>
        </div>
        <Footer/>
        </>
      );
}
 
export default AskForHelp;
