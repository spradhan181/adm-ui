
import { Component } from "react";
import loginImage from "../resources/login.png"
class Login extends Component {
    state = {
        userdata:{
            username: "",
            password: ""
        },
        response: "",
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
        this.setState({response : "Invalid Credentials, please check again !!!"})
        if(this.state.userdata.username == "" || this.state.userdata.password == ""){
            this.setState({response : " Please provide required credentials."})
        }
        this.setState({displayResult : true})
    }

    handleClick = () => {
        //this.context.router.push("/SignUp");
    }

    render(){
        let result = null;
        if(this.state.displayResult){
            result = <div style={{color : "red"}}>{this.state.response}</div>
        }
        return(
            <div style={{textAlign : "center"}}>
                <h1>Welcome to ADM UI</h1>
                <img src = {loginImage} height="60px" width= "60px"/>
               
                <div className="p-field p-grid" style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div className="p-col">
                             <input 
                                type="text" 
                                value= {this.state.username} 
                                name= "username" 
                                onChange= {this.changeUsername}
                                placeholder="username"
                             />
                    </div>
                </div>
                <div className="p-field p-grid" style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div className="p-col">
                            <input 
                                type="password" 
                                value= {this.state.password} 
                                name= "password" 
                                onChange= {this.changePassword}
                                placeholder="password"
                            />
                    </div>
                </div>
                <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <button type="submit" onClick={this.submitData}> Login </button>
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
