import React from 'react';
import {Redirect} from 'react-router-dom';

// import './../css/login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        const token=localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn=false
        }
        
        this.state={
            email:"",
            password:"",
            loggedIn
                }
        
        
        this.onChange=this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
        
    }
    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {email, password}= this.state;
        if(email==="aman" && password ==="aman"){
            localStorage.setItem("token","jsfsbvisnvjasnvasijbnsjnbiu")
            this.setState({
                loggedIn: true
            })
        }
    }
    
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return(

            <div className="container">
                <div className="hint">
                    <ul>
                        <li>
                            <h6>User id : </h6>
                            <h6>aman</h6>
                        </li>
                        {/* <li>
                            <h6>Password : </h6>
                            <h6>aman</h6>
                        </li> */}
                    </ul>
                </div>
        <div className="login">
        <div className="login-content">
        <ul>
            <li>
                <h4>Email ID : </h4>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Enter your email here"/>
            </li>
            {/* <li>
                <h4>Password : </h4>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter your Password here" />
            </li>
            <li>
                 <button className="btn btn-secondary" onClick={this.submitForm} >Submit</button>
            </li> */}
        </ul>
        </div>
        </div>
        </div>
        );
    }
}

export default Login;