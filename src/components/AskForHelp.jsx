import { Link } from 'react-router-dom';
import Header from './Header'


const AskForHelp = () => {
    return (
        <>
        <Header />

        <div >
          <Link to="/useremergencyinfo"><p className="help">Ask For A Help</p></Link>
        </div>
        </>
      );
}
 
export default AskForHelp;