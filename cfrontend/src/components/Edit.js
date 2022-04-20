import React, {Component} from "react"
import axios from "axios";


export default class Edit extends Component {


  onSubmit = (e)=>{
    
    e.preventDefault();
    const id = this.props.match?.params._id;

    const {companyName,vacancyType,description,contactNumber,address,email} = this.state;

    const data = {
      companyName:companyName,
      vacancyType:vacancyType,
      description:description,
      contactNumber:contactNumber,
      address:address,
      email:email
    }

    console.log(data)

    axios.put(`http://localhost:8000/jobs/update/${id}`,data).then((res)=>{
      if(res.data.success){
        alert("post updated successfully")
        this.setState(
          {
            companyName:"",
            vacancyType:"",
            description:"",
            contactNumber:"",
            address:"",
            email:""
          }
        )
      }
    })

  }

  componentDidMount(){

    const id = this.props.match.params._id;

    axios.get(`http://localhost:8000/jobs/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          companyName:res.data.jobs.companyName,
          vacancyType:res.data.jobs.vacancyType,
          description:res.data.jobs.description,
          contactNumber:res.data.jobs.contactNumber,
          address:res.data.jobs.address,
          email:res.data.jobs.email
        });
        console.log(this.state.jobs);
      }
     
    });
  }

  render(){
    return(
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Details</h1>
          <form className="needs-validation" noValidate>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Company Name</label>
              <input type="text"
              className="form-control"
              name="companyName"
              placeholder="Enter Company Name"
              value={this.state.companyName}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Vacancy Type</label>
              <input type="text"
              className="form-control"
              name="vacancyType"
              placeholder="Enter Vacancy Type"
              value={this.state.vacancyType}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Job Description</label>
              <input type="text"
              className="form-control"
              name="description"
              placeholder="Enter Job Description"
              value={this.state.description}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactNumber"
              placeholder="Enter Mobile/Lan"
              value={this.state.contactNumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Company Address"
              value={this.state.address}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>E-mail</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Company E-mail"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-squar"></i>
              &nbsp; Update
            </button>

          </form>
     </div>
     
    );
  }
}