import React, {Component} from "react"
import axios from "axios";
import "./Create.css";



export default class Create extends Component {

  constructor(props){
    super(props);
    this.state={
      companyName:"",
      vacancyType:"",
      description:"",
      contactNumber:"",
      address:"",
      email:""
    }
  }

  handleInputChange = (e)=>{

    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e)=>{

    e.preventDefault();

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

    axios.post("http://localhost:8000/jobs/save",data).then((res)=>{
      if(res.data.success){
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

  render(){
    return(
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal" style={{marginBottom:'5px',fontWeight:'bold',fontSize:'40px',textAlign:'center'}}>----------- Create New Job Vacancy -----------</h1>
        
          <form className="needs-validation" noValidate>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px',fontWeight:'bold'}}>Company Name</label>
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

            <button className="btn btn-info" type="submit" style={{marginTop:'15px',fontWeight:'bold'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>

          </form>
     </div>
     
    );
  }
}