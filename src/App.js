import React from "react";
import {Routes, Route} from 'react-router-dom'
import { Home1 } from "./pages/Home1";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home1/>}/>
      </Routes>
  );
}

export default App;