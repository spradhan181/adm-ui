import { Component } from "react";

class SignUp extends Component{

    state = {
        userFormData :{
            name: "",
            email:"",
            password: "",
            confirmPassword: ""
        }
    }
    changeValueName = (event) =>{
        let data = {...this.state.userFormData}
        data.name=event.target.value;
        this.setState({userFormData : data})

    }

    changeValueEmail = (event) =>{
        let data = {...this.state.userFormData}
        data.email=event.target.value;
        this.setState({userFormData : data})

    }

    changeValuePassword = (event) =>{
        let data = {...this.state.userFormData}
        data.password=event.target.value;
        this.setState({userFormData : data})

    }

    changeValueConfirmPassword = (event) =>{
        let data = {...this.state.userFormData}
        data.confirmPassword=event.target.value;
        this.setState({userFormData : data})

    }

    submitForm = () => {
        console.log(this.state.userFormData)
    }

    render(){
        return(
            <div>
                <div className = "main-div">
                    <h1>Signup to Affiliated Market</h1>
                    <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                    <div >
                        <span style={{paddingRight:"100px", textAlign:"left"}}>
                            Name :
                        </span>
                        <span> 
                                <input id="userid-text"
                                    type="text" 
                                    value= {this.state.name} 
                                    name= "name" 
                                    onChange= {(name) => this.changeValueName(name)}
                                    placeholder="Name"
                                />

                        </span> 
                    </div>
                        
                    </div>
                    <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                        <div >
                        <span style={{paddingRight:"100px", textAlign:"left"}}>Email :</span>
                            <span>
                            <input id="userid-text"
                                    type="text" 
                                    value= {this.state.email} 
                                    name= "email" 
                                    onChange= {(name) => this.changeValueEmail(name)}
                                    placeholder="Email"
                                />
                            </span>
                                
                        </div>
                    </div>
                    <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                        <div >
                        <span style={{paddingRight:"70px", textAlign:"left"}}>Password :</span>
                            <span>
                            <input id="userid-text"
                                    type="password" 
                                    value= {this.state.password} 
                                    name= "password" 
                                    onChange= {(name) => this.changeValuePassword(name)}
                                    placeholder="Password"
                                />
                            </span>
                                
                        </div> 
                    </div>
                    <div style={{paddingTop : "10px", paddingBottom : "10px"}}>
                        <div >
                        <span style={{paddingRight:"5px", textAlign:"left"}}>Confirm Password :</span>
                            <span>
                            <input id="userid-text"
                                    type="text" 
                                    value= {this.state.confirmPassword} 
                                    name= "confirmPassword" 
                                    onChange= {(name) => this.changeValueConfirmPassword(name)}
                                    placeholder="Confirm Password"
                                />
                            </span>
                                
                        </div>
                    </div>
                    <div style={{paddingTop : "30px", paddingBottom : "10px"}}>
                        <button className ="btn" type="submit" onClick={this.submitForm}> SignUp </button>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default SignUp