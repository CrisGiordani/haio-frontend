import React from "react";
import { ToastContainer } from "react-toastify";

import "./global.css";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={60000} />
    </>
  );
}
