import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";

export default class Home extends Component {
constructor(props){
  super(props)

  this.state={
    jobs:[]
  };

}

componentDidMount(){
  this.retrievejobs();
}

retrievejobs(){
  axios.get(`http://localhost:8000/jobs`).then(res =>{
    if(res.data.success){
      this.setState({
        jobs:res.data.existingJobs
      });

      console.log(this.state.jobs)

     }
  });
}


onDelete = (id) =>{

  axios.delete(`/jobs/delete/${id}`).then((res) =>{
    alert("Successfully Deleted");
    this.retrievejobs();
  })

}

filterData(jobs,searchKey){

  const result = jobs.filter((jobs)=>
  jobs.companyname.toLowerCase().includes(searchKey)||
  jobs.vactype.toLowerCase().includes(searchKey)||
  jobs.description.toLowerCase().includes(searchKey)||
  jobs.contactno.toLowerCase().includes(searchKey)||
  jobs.address.toLowerCase().includes(searchKey)||
  jobs.email.toLowerCase().includes(searchKey)
  )

  this.setState({jobs:result})
}

handleSearchArea =(e) =>{

  const searchKey = e.currentTarget.value;

  axios.get(`http://localhost:8000/jobs`).then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existingJobs,searchKey)

     }
  });

}


render(){
    return (
      
      <div className='container-fluid'>
        <div className="col-lg-12 mt-2 mb-2">
        <h1 style={{color:'#2D283E',fontWeight:'bold',textAlign:'center'}}>------------------- CAREER OPPERTUNITIES ------------------</h1>

        
          <div className="row">
            <div className="col-lg-12 mt-0 mb-2">
              <input 
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
              style={{borderRadius:'10px'}}>
                  
              </input>
            </div>
          </div>

          <div>
        <img class="image" src="https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg" width='1200px' height='400px'></img>
        </div>
          </div>

        <table className="table table-hover" style={{marginTop:'20px'}}>
           <thead >
             <tr>
               <th scope="col">No</th>
               <th scope="col">Name</th>
               <th scope="col">Vac.type</th>
               <th scope="col">Description</th>
               <th scope="col">Cont.Number</th>
               <th scope="col">Address</th>
               <th scope="col">Email</th>
               <th scope="col">Edit/Remove</th>

             </tr>
           </thead>

           <tbody>
           {this.state.jobs.map((jobs,index) =>(
             <tr key={index} class="tr">
               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/jobs/${jobs._id}`} style={{textDecoration:'none'}}>
                   {jobs.companyname}
                   </a>   
                </td>
               <td>{jobs.vactype}</td>
               <td>{jobs.description}</td>
               <td>{jobs.contactno}</td>
               <td>{jobs.address}</td>
               <td>{jobs.email}</td>

               <td>
                 <a className='btn btn-warning' href={`/edit/${jobs._id}`}>
                   <i className='fas fa-edit'></i>
                 </a>
                 &nbsp;
                 <a className='btn btn-danger' href='#' onClick={() => this.onDelete(jobs._id)}>
                   <i className='far fa-trash-alt'></i>
                 </a>
               </td>
             </tr>
      ))}
           </tbody>

         </table>

         <button className='btn btn-success'><a href='/add' style={{textDecoration:'none',color:'white'}}>Create New Vacancy</a></button>
      </div>
    )
 }
}