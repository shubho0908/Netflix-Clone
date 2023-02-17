import './App.css';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePass from './auth/CreatePass';
import CreatePass2 from './auth/CreatePass2';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Signin/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
  <Route exact path="/createpassword" element={<CreatePass/>}/>
  <Route exact path="/createpassword2" element={<CreatePass2/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
