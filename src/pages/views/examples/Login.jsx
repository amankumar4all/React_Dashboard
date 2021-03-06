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
import ForgetPwd from "./ForgetPwd.js";
import { validateAll } from 'indicative';




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

class Login extends React.Component {

  constructor(props){
    super(props);
    const token=localStorage.getItem("token")

    let loggedIn;
    let forgetValue = false;
  
    if(token == null){
        loggedIn=false
    }
    
    this.state={
        email:"",
        password:"",
        loggedIn,
        forgetValue
            }
    
    
    this.onChange=this.onChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.forgetPwd=this.forgetPwd.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
}

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
validateEmail(e){
  e.preventDefault()
  const{email}=this.state;
  var atposition=email.indexOf("@");
  var dotposition=email.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert('Enter Valid Email'); 
    // alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
    } 
}

submitForm(e){
    e.preventDefault()
    const {email, password}= this.state;

    // const data=this.state;
    // const rules={
    //   email: 'required|email',
    //   password : 'required|string|min:8'
    // }
    // validateAll(data,rules)
    //   .then(() =>{
    //     console.log("password is---")
    //   })
    //   .catch(errors =>{
    //     console.log(errors);
    //   })

    if(email==="login@x.com" && password ==="Aman1234"){
        localStorage.setItem("token","jsfsbvisnvjasnvasijbnsjnbiu")
        this.setState({
            loggedIn: true
        })
    }
}

forgetPwd(e){
  e.preventDefault()
  this.setState({
  forgetValue : true
  })
}


  render() {
    if(this.state.loggedIn){
      return <Redirect to="/admin/index" />
    }

    if(this.state.forgetValue){
      return <Redirect to="/auth/register" />
    }

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.onChange} onBlur={this.validateEmail}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.submitForm} >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small onClick={this.forgetPwd} >Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small  onClick={this.forgetPwd}>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
