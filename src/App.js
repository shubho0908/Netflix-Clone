import './App.css';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePass from './auth/CreatePass';
import CreatePass2 from './auth/CreatePass2';
import Main from './Component/Main';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase";


const auth = getAuth(app);


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
       onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logged In
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/createpassword" element={<CreatePass />} />
        <Route exact path="/createpassword2" element={<CreatePass2 />} />
      </Routes>
      </BrowserRouter>
        
      </div>
    );
  }


  return (
<>
<div className="App">
        <div style={{zIndex:"-2"}} className="container">
        <h3>Welcome, {user.email}</h3>
        <button className="btn btn-danger"
          onClick={() => {
            signOut(auth);
            alert("Successfully Logged Out");
          }}
        >
          Log Out
        </button>
        </div>
        <Main/>
      </div>
</>
  );
}

export default App;
