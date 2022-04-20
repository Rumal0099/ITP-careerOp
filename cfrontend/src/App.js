import React, {Component} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css"

export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div >
          
          <NavBar></NavBar>
          <div className="sidebar">
          <SideBar></SideBar>
         
          <div className="others">
          <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/add" element={<Create/>}/>
          <Route exact path="/edit/:id" element={<Edit/>}/>
          <Route exact path="/jobs/:id" element={<Details/>}/>
          </Routes>
          </div>
          </div>

        </div>
      </BrowserRouter>
     
    )
  }
}