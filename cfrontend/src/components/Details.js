import React, {Component} from "react";
import axios from "axios";

export default class Details extends Component {
  constructor(props){
    super(props);

    this.state={
        jobs:{}
    };
  }

  componentDidMount(){

    const id = this.props.match?.params._id;

    axios.get(`http://localhost:8000/jobs/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          jobs:res.data.jobs
        });
        console.log(this.state.jobs);
      }
     
    });
  }
  render(){
    return(
     <div>
        Details
     </div>
     
    )
  }
}