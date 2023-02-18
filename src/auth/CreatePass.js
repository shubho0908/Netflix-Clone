import Logo from "../img/logo.png";
import BGimg from "../img/pass-bg.PNG";
import React from "react";
import { Link } from "react-router-dom";


const CreatePass = () => {
  return (
    <>
      <div className="App">
        <div className="bg-back2">
          <div className="navbar-3">
            <div className="logo3">
              <img onClick={()=> window.location.href = "/signup"} src={Logo} className="Netflix-logo3" />
            </div>
            <p className="signin-txt"><Link to="/" className="signin-link3">Sign In</Link></p>
          </div>
          <div className="middle-content">
            <img src={BGimg} alt="" className="bg-image" />
            <p className="steps">STEP <b>1</b> OF <b>2</b></p>
            <div className="content-innerData">
            <p className="mid-head">Finish setting up your account</p>
            <p className="mid-desc">Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            </div>
            <button className="next"><Link className="next-btn" to="/welcome-2">Next</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePass;
