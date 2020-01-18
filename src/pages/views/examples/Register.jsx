/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Redirect} from 'react-router-dom';  

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {

  constructor(props){
    super(props);
    const token=localStorage.getItem("token")

    let create = false;
        
    this.state={
        name:"",
        email:"",
        password:"",
        privacy:false,
        logIn:false,
        loginData: []
            }
    
    this.onChange=this.onChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.forgetPwd=this.forgetPwd.bind(this);
    this.changePage=this.changePage.bind(this);
    
}
toggleChangePrivacy=()=>{
  this.setState(prevState =>({
    privacy: !prevState.privacy,
  }));
}

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitForm(e){
    e.preventDefault()
    const {name,email, password,loginData}= this.state;

    if (this.state.name ==='' || this.state.email ==='' || this.state.password ===''){
      alert('Fill Your Registration Form');
  } 
  else {
    loginData.push(name,email,password);
    this.setState({
      logIn:true
    })
    // this.setState({
    //    name : this.state.name.value,
    //    email : this.state.email.value,
    //    name : this.state.name.value
    // })
  }
    // console.log(loginData);
}
changePage(loginData){

}


forgetPwd(e){
  e.preventDefault()
  this.setState({
  forgetValue : true
  })
}


  render() {
    if(this.state.logIn){
      return     <Redirect to="/admin/index" />
    }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("./../../assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("./../../assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" name="name" value={this.state.loginData.name} onChange={this.onChange} required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" value={this.state.loginData.email} onChange={this.onChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password" value={this.state.loginData.password} onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox" 
                        checked={this.state.privacy}
                        onChange={this.toggleChangePrivacy}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()} >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={this.submitForm} disabled={!this.state.privacy || !this.state.name || !this.state.email || !this.state.password}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
