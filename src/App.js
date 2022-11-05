import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from 'react-router-dom'
import { Home1 } from "./pages/Home1";
import Home2 from "./pages/Home2";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/Notfound" element={<NotFoundPage/>}></Route>
        <Route path="/home2" element={<Home2/>}></Route>
        
      </Routes>

  );
}

export default App;