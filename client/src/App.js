import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CodeCreate from './components/CodeCreate/CodeCreate';
import Detail from './components/Detail/Detail';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
// import axios from "axios";

//  axios.defaults.baseURL = "https://api-pokemon-lruf.onrender.com";

function App() {
  return (
 
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/pokemon' element={<CodeCreate/>}/>
      <Route path='/dashboard' element={<DashboardAdmin/>}/>
    </Routes>
    <div
        style={{
          padding: "4%",
          
          marginBottom: "1%",
          marginTop: "3%",
          color: "#f0c305"
        }}
      >AppCode © Copyright Pigmaleon Studio . All rights reserved.
      
      </div>
    </div>

  );
}

export default App;
