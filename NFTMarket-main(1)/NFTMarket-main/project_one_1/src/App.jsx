import { useState } from 'react'
import logo from './logo.svg'
import {CounterProvider} from './conext/CounterContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home_page/HomePage'
import Market_1 from './pages/Market/Market1'
import Singin_1 from './pages/Singin/Singin'
import Log_in from './pages/log_in/LogIn'
import Login_info from './pages/log_in/login-info';
import './App.css'

function App() {
 
  return (
  

    <Routes>
      <Route path="/" >
        <Route index element={<HomePage video_link="src/images/video.mp4"/>}/>
        <Route path="Market" element={<Market_1/>}/>
        <Route path='Singin' element={<Singin_1/>}/>
        <Route path='logn_info' element={<Login_info/>}/>
        <Route path='login' element={<Log_in/>}/>
        

      </Route>



    </Routes>
      // <HomePage video_link="/src/images/video2.mp4"/>

 
  )
}

export default App
