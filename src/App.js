import logo from './logo.svg';
import './App.css';
// import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import Loading from './components/Loading';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loading/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/game" element={<Game/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
