import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Emner from './pages/Emner';
import HomeButton from './components/HomeButton';
import VisitedCountries from './pages/VisitedCountries';
import PlaygroundPage from './pages/PlaygroundPage';
import CountryMaker from './components/CountryMaker';
import SolsystemSimulator from './pages/SolsystemSimulator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/emner" element={<Emner />}/>
        <Route path="/lande" element={<VisitedCountries />} />
        <Route path="/playground" element={<PlaygroundPage />}/>
        <Route path="/landeleg" element={<CountryMaker />}/>
        <Route path="/solsystem" element={<SolsystemSimulator />}/>

      </Routes>
    <HomeButton link="/"></HomeButton>
    </HashRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
