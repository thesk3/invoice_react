import React, { Component } from "react";

import FormHelperText from '@material-ui/core/FormHelperText';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Select ,Radio ,RadioGroup ,FormLabel ,FormControlLabel 
} from "@material-ui/core";

class AddClient extends Component {
 
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    document.title = "Add Client"
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
      <MDBContainer>
      <MDBCard>
      <MDBCardHeader color="deep-orange lighten-1" style={{     textAlign: 'center',}} >Featured</MDBCardHeader>
        <MDBCardBody>
    
        {/* <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" className="form-control input-sm" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form> */}

            <div className="row">
              <div className="col-sm-6">

              <div
        style={{
          display: "flex",
          
          margin: 20,
          padding: 20
        }}
      >
       


        <form style={{ width: "100%" }}>
        <label> Client Type</label>
        
         <RadioGroup aria-label="position" name="position" value={this.value} onChange={this.handleChange} row>
         <FormControlLabel
          value="Residential"
          control={<Radio color="primary" />}
          label="Residential"
          labelPlacement="end"
        />
         <FormControlLabel
          value="Business"
          control={<Radio color="primary" />}
          label="Business"
          labelPlacement="end"
        />
        
      </RadioGroup>
    
        <FormControl  style={{ width: "100%" }}>
        <InputLabel htmlFor="age-native-simple">Client Type</InputLabel>
        <Select
          native
          value={this.state.age}
          
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
        </Select>
      </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Client Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Contact Person</InputLabel>
            <Input id="name" type="text" />
          </FormControl>
         
     
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Address</InputLabel>
            <Input id="email" multiline rows={4} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
              </div>
              <div className="col-sm-6"></div>
            </div>

           
         
    
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
    );
  }
}

export default AddClient;