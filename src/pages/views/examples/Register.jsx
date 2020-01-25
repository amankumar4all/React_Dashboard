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
import '../../assets/css/error.css';

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


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm= (errors)=>{
  let valid=true;
  Object.values(errors).forEach(
    (val)=> val.length >0 && (valid= false),
  );
  console.log(valid);
  return valid;
}

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
        errors:{
          name:'',
          email:'',
          password:''
        }
            }
    
    this.onChange=this.onChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.forgetPwd=this.forgetPwd.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
    this.validateName=this.validateName.bind(this);

  }
validateName(e){
  e.preventDefault();
  const{name}=this.state;
  if(name.length < 3){
    alert("Name must be greater than 3 character");
  }
  else if(name.length >15){
    alert("Name must be less than 15 character")
  }
}
validateEmail(e){
  e.preventDefault()
  const{email}=this.state;
  var atposition=email.indexOf("@");
  var dotposition=email.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert("enter valid email");
    // alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    var email1=validEmailRegex.test()
        ? ''
        : 'Email is not valid!';
    return false;  
    } 
}
toggleChangePrivacy=()=>{
  this.setState(prevState =>({
    privacy: !prevState.privacy,
  }));
}

onChange(e){
    e.preventDefault();
    const {inputData,value}=e.target;
    let errors=this.state.errors;
    let email=this.state.email;

    // switch(inputData){
    //   case 'name':
    //     errors.name=value.length< 5 
    //     ? 'Full name must be 5 character long!'
    //     : '';
    //     break;
    //   case 'email': 
    //     email=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //   this.ValidateEmail(this.email);
    //     errors.email=validEmailRegex.test(value)
    //     ? ''
    //     : 'Email is not valid!';
    //     break;
    //   case 'password':
    //     errors.password=value.length < 8
    //     ? 'Password must be 8 character long!'
    //     : '';
    //     break;
    //   default:
    //     break;
    // }

    this.setState({
      // errors,[inputData]:value,
      [e.target.name]: e.target.value
  });
}
ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
submitForm(e){
    e.preventDefault();
    const {name,email, password,inputData}= this.state;
    if(validateForm(this.state.errors)){
      console.info("Valid entry");
      console.log(this.state.errors);
  //   if (this.state.name ==='' || this.state.email ==='' || this.state.password ===''){
  //     alert('Fill Your Registration Form');
  } 
  else {
    console.error('Invalid');
    // this.setState({
    //   logIn:true
    // })
  
  }
}
// }
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
    const {errors}=this.state;
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up with Credentials</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.onChange} onBlur={this.validateName}/>
                    {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" className="error" value={this.state.email} onChange={this.onChange} onBlur={this.validateEmail}/>
                    {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
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
                    {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
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
