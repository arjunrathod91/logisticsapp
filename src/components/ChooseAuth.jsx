import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
const ChooseAuth = () => {
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center pt-5 " >
      import logo from '../assets/logo.png'
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
        </div>
        <div className="chooseauth d-flex flex-row gap-5 mt-5">
          <div className="chooseuser">
          <Link to="/login" ><FontAwesomeIcon icon={faUser} size="4x" style={{ color: 'gray' }}/></Link>
           <p className="fw-bold">user</p>
          </div>
          <div className="choosevolunteer">
         <Link to='/volregister'><FontAwesomeIcon icon={faHandHoldingHeart} size="4x" style={{ color: 'gray' }}/></Link>
          <p className="fw-bold">volunteer</p>
          </div>
        </div>
        <div className="herobtnparent">
            <button className="herobtn ">Choose mode</button>
        </div>
      </div>
    </>
  );
};

export default ChooseAuth;
