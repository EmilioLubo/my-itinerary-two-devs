import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from 'react-router-dom'
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import {SignUp} from './pages/SignUp.jsx'
import Login from "./pages/SingIn";
import Hotels from "./pages/Hotels";

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/Hotels" element={<Hotels/>}/>
            <Route path="*" element={<NotFoundPage/>}></Route>
          </Routes>
        </Layout>
    
  );
}

export default App;