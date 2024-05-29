import {BrowserRouter, Router, Routes, Route} from "react-router-dom"
import { useState } from "react";
import HomePage from "./assets/components/HomePage";
import LoginForm from "./assets/components/LoginForm";


function App() {
  let [app, setApp] = useState(false);
  return <>
  
  {app ? <HomePage /> : <LoginForm setApp={setApp} />}
  
  
  </>;
  
}

export default App;
