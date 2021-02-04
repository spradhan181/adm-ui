
import axios from "../axios-adm";
import { Component } from "react";
import loginImage from "../resources/login.png";
import affiliateimg from "../resources/affiliate.png";
import affiliatelogo from"../resources/worldwide.png"
import loginJson from "../resources/login.json";
import "./Login.css";
import { FaGithub,FaFacebook,faLock,FaUser } from "react-icons/fa";
import { faUser } from "@fortawesome/free-solid-svg-icons";


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

    render(){
        let result = null;
        if(this.state.displayResult){
            result = <div style={{color : "red"}}>{this.state.message}</div>
        }
        return(
        <div className="main-div-1">
           
           <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <a className="navbar-brand">
                    <img className="brandlogo" src ={affiliatelogo}/>
                 </a>
                    <ul className="navbar-nav">
                       <li className="nav-item">
                             <a className="nav-link" href="">Contact</a>
                       </li>
                       <li className="nav-item">
                             <a className="nav-link" href="">Pricing</a>
                       </li>
                       <li className="nav-item">
                             <a className="nav-link" href="">Download</a>
                       </li>
                    </ul>
             </nav>
            </div>
            <h1>WELCOME TO AFFILIATED DIGITAL MARKETING</h1>
           
            <div  className = "main-div-2">
                <h3>Continue to LogIn</h3>
                <img classname="brandlogo"src = {loginImage} height="60px" width= "60px" margin-left="20px"/>
               
                <div className="p-field p-grid" style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div className="p-col">
                            <faUser/>
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
                    <div> <span>Donn't have ccount? </span> 
                        <a className="span" style={{color: "blue"}} onClick={this.handleClick}>
                            Create One
                        </a> 
                    </div>
                </div>
                <div>
                    <img src = {affiliateimg} height="200px"/>
                </div>
              </div>
              < div className="contact-page">
              
                    <span>Copyright@Adm</span> 
                    <i class="fab fa-twitter"></i>
                </div>
        </div>
        )
    };

}

export default Login;
