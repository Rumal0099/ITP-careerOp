import React, {Component} from "react";
import "./SideBar.css";



export default class SideBar extends Component {


  render(){
    return(
        
        <div class="wrapper" >
    
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3 style={{fontWeight:'bold',textAlign:'left',marginLeft:'10px'}}>Dashboard</h3>
        </div>
        &nbsp;
        <ul class="container-fluid">
           
            <li class="active">
                
            <button id="btn"><a href='/' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-house-user"></i> &nbsp;Home</a></button> 
                
            </li>
            
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-user"></i>  &nbsp;Profile</a></button>
            </li>
            &nbsp;
            <h3 style={{fontWeight:'bold',textAlign:'left',color:'white'}}>Pages</h3>
            &nbsp;
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-star-half-stroke"></i> &nbsp;FeedBack</a></button>
            </li>
            
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-gauge-high"></i> &nbsp;Dashboard</a></button>
            </li>
            &nbsp;
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-chart-simple"></i> &nbsp;Collections</a></button>
            </li>
            &nbsp;
            <h3 style={{fontWeight:'bold',textAlign:'left',color:'white'}}>Other</h3>
            &nbsp;
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-address-card"></i> &nbsp;About Us</a></button>
            </li>
            
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-square-phone"></i> &nbsp;Contact Us</a></button>
            </li>
            &nbsp;
           
        </ul>
    </nav>

</div>
     
    )
  }
}