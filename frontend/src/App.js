import React from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  <ToastContainer />
  </>
  );
}