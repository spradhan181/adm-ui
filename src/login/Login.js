
import axios from "../axios-adm";
import { Component } from "react";
import loginImage from "../resources/login.png";
import affiliateimg from "../resources/affiliate.png";
import affiliatelogo from"../resources/worldwide.png"
import loginJson from "../resources/login.json";
import "./Login.css";
import { FaGithub } from "react-icons/fa";


class Login extends Component {
    state = {
        userdata:{
            username: "",
            password: ""
        },
        message: "",
        displayResult: false
    }


    changeUsername = (event) =>{
        let data = {...this.state.userdata}
        data.username  = event.target.value;
        this.setState({userdata : data})
        this.setState({displayResult : false})
    }

    changePassword = (event) =>{
        let data = {...this.state.userdata}
        data.password  = event.target.value;
        this.setState({userdata : data})
        this.setState({displayResult : false})
    }

    submitData = () =>{
        this.setState({displayResult : true})
        if(this.state.userdata.username === "" || this.state.userdata.password === ""){
            this.setState({message : " Please provide required credentials."})
        } else{
            axios.post('http://localhost:8080/signin', this.state.userdata)
        .then(response => {
            console.log(response);
            this.setState({message : response.data.result})
        })
        .catch( error =>{
            console.log(error);
            this.setState({message : loginJson.result})
            this.props.history.push("/search");
        })
        }
    }

    handleClick = () => {
        this.props.history.push("/signup");
    }
    redirectToForgotPassword = () =>{
        this.props.history.push("/forgot")
    }

    render(){
        let result = null;
        if(this.state.displayResult){
            result = <div style={{color : "red"}}>{this.state.message}</div>
        }
        return(
        <div className="main-div-1">
           
           <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <span className="navbar-brand">
                    <img className="brandlogo" src ={affiliatelogo} alt= "Not Found"/>
                 </span>
                    <ul className="navbar-nav">
                       <li className="nav-item">
                             <span className="nav-link" >Contact</span>
                       </li>
                       <li className="nav-item">
                             <span className="nav-link" >Pricing</span>
                       </li>
                       <li className="nav-item">
                             <span className="nav-link" >Download</span>
                       </li>
                    </ul>
             </nav>
            </div>
            <h1>WELCOME TO AFFILIATED DIGITAL MARKETING</h1>
           
            <div  className = "main-div-2">
                <h3>Continue to LogIn</h3>
                <img className="brandlogo"src = {loginImage}  alt= "Not Found" height="60px" width= "60px" margin-left="20px"/>
               
                <div className="p-field p-grid" style={{paddingTop : "30px", paddingBottom : "10px"}}>
                    <div className="p-col">
                             <input id="userid-text"
                                type="text" 
                                value= {this.state.username} 
                                name= "username" 
                                onChange= {this.changeUsername}
                                placeholder="User Name"
                             />
                    </div>
                </div>
                <div className="p-field p-grid" style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div className="p-col">
                            
                            <input id="userid-text"
                                type="password" 
                                value= {this.state.password} 
                                name= "password" 
                                onChange= {this.changePassword}
                                placeholder="Password"
                            />
                    </div>
                </div>
                <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <FaGithub/><button className ="btn" type="submit" onClick={this.submitData}> Login </button>
                </div>
                <div>
                <span>or</span>
                <hr/>
                </div>

                {result}

                <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div> <span>Don't have account? </span> 
                        <span className="span" style={{color: "blue"}} onClick={this.handleClick}>
                            Create One
                        </span> 
                    </div>
                    <div className="span" style={{color: "blue"}} onClick={this.redirectToForgotPassword}>
                            Forgot Password ?
                    </div>
                </div>
                <div>
                    <img src = {affiliateimg} height="200px" alt= "Not Found" />
                </div>
              </div>
              < div className="contact-page">
              
                    <span>Copyright@Adm</span> 
                    <i className="fab fa-twitter"></i>
                </div>
        </div>
        )
    };

}

export default Login;
