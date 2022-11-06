import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from 'react-router-dom'
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import {SignUp} from './pages/SignUp.jsx'
import Login from "./pages/SingIn";
import { Cities } from "./pages/Cities";
import { City } from "./pages/City";

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/cities" element={<Cities/>}/>
            <Route path="/cities/:id" element={<City/>}/>
            <Route path="*" element={<NotFoundPage/>}></Route>
          </Routes>
        </Layout>
    
  );
}

export default App;