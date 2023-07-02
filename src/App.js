import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <TopBar/>
      <Home/>       
    </Router>
  );
}

export default App;
