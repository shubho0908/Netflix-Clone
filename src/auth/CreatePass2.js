import { React, useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import swal from "sweetalert";


const auth = getAuth(app);

const CreatePass2 = () => {

  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
      })
      .catch((error) => {
        swal({
          title: "Error!",
          text: "Email Already Resgistered, Please Sign In",
          icon: "warning",
          button: "Ok!",
        });
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event) => {
    if (event.target.value === "" || !event.target.value.includes("@")) {
      setEmailError("Please enter a valid email address");
    } else if (event.target.value.includes("@")) {
      setEmailError("");
    } else {
      setEmailError("");
    }
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassBlur = (event) => {
    if (event.target.value === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <>
      <div className="App">
        <div className="bg-back2">
          <div className="navbar-3">
            <div className="logo3">
              <img
                onClick={() => (window.location.href = "/signup")}
                src={Logo}
                className="Netflix-logo3"
              />
            </div>
            <p className="signin-txt">
              <Link to="/" className="signin-link3">
                Sign In
              </Link>
            </p>
          </div>
          <div className="center-content">
            <div className="middle-content2">
              <p className="steps2">
                STEP <b>2</b> OF <b>2</b>
              </p>
              <div className="content-innerData2">
                <p className="mid-head2">
                  Create a password to start your membership
                </p>
                <p className="mid-desc2">
                  Just a few more steps and you're done! We hate paperwork, too.
                </p>
                <input
                  type="email"
                  className="final-email"
                  placeholder="  Email"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
                {emailError && (
                  <div className="error-message2">{emailError}</div>
                )}
                <input
                  style={{ marginTop: "12px" }}
                  type="password"
                  className="final-password"
                  value={password}
                  placeholder="  Add a password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                  onChange={handlePassChange}
                  onBlur={handlePassBlur}
                  required
                />
                {passwordError && (
                  <div className="error-message2">{passwordError}</div>
                )}
              </div>
              <button
                style={{ color: "white" }}
                onClick={CreateUser}
                className="next2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePass2;
