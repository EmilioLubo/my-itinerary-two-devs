import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from 'react-router-dom'
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import Login from "./pages/SingIn";

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<NotFoundPage/>}></Route>
          </Routes>
        </Layout>
    
  );
}

export default App;