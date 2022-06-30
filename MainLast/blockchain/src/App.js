import React from 'react';
import Home from './page/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pay from './page/Pay';
import Vault from './page/Vault';
// import Notifications from './page/Notification';
import Notification from './components/Notifications/Notifications';
import Swap from './page/Swap';
import Referrals from './components/Referrals/Referrals';
import Settings from './components/Settingss/Settings';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Pay" element={<Pay />}></Route>
        <Route path="/Vault" element={<Vault/>}></Route>
        <Route path="/Notifications" element={<Notification/>}></Route>
        <Route path="/Swap" element={<Swap/>}></Route>
        <Route path='/Referrals' element={<Referrals/>} ></Route>
        <Route path='/Settingss' element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
