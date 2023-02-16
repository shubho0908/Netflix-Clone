import './App.css';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Signin/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
