import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from 'react-router-dom'
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import {SignUp} from './pages/SignUp.jsx'
import Login from "./pages/SingIn";
import Hotels from "./pages/Hotels";
import { Cities } from "./pages/Cities";
import { City } from "./pages/City";
import { NewCity } from "./pages/NewCity";
import { Hotel } from "./pages/Hotel";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/Hotels" element={<Hotels/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/cities/:id" element={<City/>}/>
      <Route path="/newcity" element={<NewCity/>}/>
      <Route path="/Hotels/:id" element={<Hotel/>}/>
      <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  </Layout>  
  );
}

export default App;