import { Link } from "react-router-dom";
import Header from "../Header";

const VolunteerProfile = () => {
  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        <div className="col">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#D9D9D9",
              borderRadius: "8px",
              border: "none",
            }}
          ></div>
        </div>
        <div className="col ">
          <h6 className="fw-bold">Name:</h6>
          <h6 className="fw-bold">Organization:</h6>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <h6 className="fw-bold">About </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis,
            eos necessitatibus tenetur rerum quae molestias provident fugiat
            nisi vel!
          </p>
        </div>
        <div className="col-sm-12 ">
           <h6 className="fw-bold">Location</h6>
           <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='map_img'/>
      </div>

      </div>
      <Link to="/responsemsg"><button className="volbtn" style={{color:"white"}}>Ask For Help</button></Link>
    </div>
  );
};

export default VolunteerProfile;
