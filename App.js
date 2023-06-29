
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>  </Route>
        <Route path="/signup" element={<Signup/>}>  </Route>
        <Route path="/home" element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
