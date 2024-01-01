import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
const ChooseAuth = () => {
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
        </div>
        <div className="chooseauth d-flex flex-row gap-5 mt-5">
          <div className="chooseuser">
          <Link to="/signupasuser" ><FontAwesomeIcon icon={faUser} size="4x" style={{ color: 'gray' }}/></Link>
           <p className="fw-bold">user</p>
          </div>
          <div className="choosevolunteer">
         <Link to='/signupasvolunteer'><FontAwesomeIcon icon={faHandHoldingHeart} size="4x" style={{ color: 'gray' }}/></Link>
          <p className="fw-bold">volunteer</p>
          </div>
        </div>
        <div className="herobtnparent">
          <Link to="/">
            <button className="herobtn">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseAuth;
