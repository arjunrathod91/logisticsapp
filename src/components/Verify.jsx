const Verify = () => {
  return (
    <div className="container verify-parent">
      <div>
        <p className="circle"></p>
        <h6 className="fw-bold" style={{ color: "#000" }}>
          HelpYours!
        </h6>
      </div>
      <div className="d-flex verifyinputparnet mt-5 mb-4">
        <div className="verify-div">+91</div>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Enter Your Mobile no."
          className="verifyinput"
        />
      </div>
      <div>
        <button className="verifybtn">Verify</button>
      </div>
    </div>
  );
};

export default Verify;
