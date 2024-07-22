//import { useState } from "react";
import GlobalStyle from "../assets/style/GlobalStyle";
import Dash from "./dash/Dash";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Dash></Dash>
         {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/draw" element={< Draw/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
