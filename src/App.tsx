// Main component Start's here 

import {  useRoutes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login";

const App = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    
  ]);
  return routes;
};
export default App;



