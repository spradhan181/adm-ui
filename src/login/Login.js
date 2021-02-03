
import axios from "../axios-adm";
import { Component } from "react";
import loginImage from "../resources/login.png"
import "./Login.css";
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
        console.log(this.state.userdata);
    
        if(this.state.userdata.username == "" || this.state.userdata.password == ""){
            this.setState({message : " Please provide required credentials."})
        }
        this.setState({displayResult : true})
        axios.post('http://localhost:8080/signin', this.state.userdata)
        .then(response => {
            console.log(response);
            this.setState({message : response.data.result})
        })
        .catch( error =>{
            console.log(error);
            this.setState({message : "Invalid Credentials, please check again !!!"})
        })

        
    }

    handleClick = () => {
        //this.context.router.push("/SignUp");
    }

    render(){
        let result = null;
        if(this.state.displayResult){
            result = <div style={{color : "red"}}>{this.state.message}</div>
        }
        return(
            <div  className = "main-div">
                <h1>Welcome to Affiliated Marketing</h1>
                <img src = {loginImage} height="60px" width= "60px"/>
               
                <div className="p-field p-grid" style={{paddingTop : "10px", paddingBottom : "10px"}}>
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
                    <button className ="btn" type="submit" onClick={this.submitData}> Login </button>
                </div>

                {result}

                <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div> New user. <a href="#" onClick={this.handleClick}>SignUp</a> </div>
                </div>
               
            </div>
        )
    };

}

export default Login;
