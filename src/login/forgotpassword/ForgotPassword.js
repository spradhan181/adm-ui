import {Component} from 'react'
import { InputText } from 'primereact/inputtext';
import {RadioButton} from 'primereact/radiobutton';
import { Button } from 'primereact/button';
class ForgotPassword extends Component{

    state = {
        deliveryMethod: "OnScreen",
        recoverRequest:{
            fullName: "",
            email:""
        },
        otp: "",
        displayError: false,
        displayResult: false,
        showPassword: false,
        onscreenPassword: ""
    }

    changeValue = (e) =>{
        this.setState({deliveryMethod: e})
    }
    changeValueFullName =(event) =>{
        let data = {...this.state.recoverRequest};
        data.fullName = event.target.value;
        this.setState({recoverRequest : data})
    }

    changeValueEmail =(event) =>{
        let data = {...this.state.recoverRequest};
        data.email = event.target.value;
        this.setState({recoverRequest : data})
    }
    changeValueOtp = (event) =>{
        this.setState({otp : event.target.value})
    }

    submit = (event) =>{
        event.preventDefault();
        this.setState({showPassword : false});
         if(this.state.recoverRequest.fullName === "" ||
             this.state.recoverRequest.email === ""){
                 this.setState({displayError : true})
         }else{
             this.setState({displayResult : true})
         }
     }
 
     clear = () =>{
         this.setState({displayResult : false , recoverRequest : {}})
         let clearedRecoveryData = {...this.state.recoverRequest};
         clearedRecoveryData.fullName = "";
         clearedRecoveryData.email= ""
         this.setState({recoverRequest : clearedRecoveryData});
         this.setState({displayError : false})
         this.setState({showPassword : false});
     }

     verifyOtp = () =>{
         this.setState({showPassword : true, onscreenPassword : "@dsadajhh"});
     }
    render(){

        let showPassword = null;
        if(this.state.showPassword){
            showPassword =  <span>Your password is : <b> {this.state.onscreenPassword} </b></span>
        }

        let showResult = null;
        if(this.state.displayResult && !this.state.displayError){
            showResult = <div style={{paddingTop: "20px"}}>
                <div>
                    <div>
                        <span>You will receive an otp on <b> {this.state.recoverRequest.email} </b> </span>
                    </div>
                    <div>
                            <span>You have choosen your password delivery method as <b>{this.state.deliveryMethod}</b></span>
                        </div>
                        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                            <span>
                                <InputText 
                                    type="password"
                                    value={this.state.otp} 
                                    placeholder= "Enter OTP received on mobile or email"
                                    onChange={this.changeValueOtp}/>
                            </span>
                            <span style={{paddingLeft : "10px"}}>
                                 <Button label="Verify OTP" className="p-button-outlined"  onClick={this.verifyOtp}/>
                            </span>
                        </div>
                        <div>
                           {showPassword}
                        </div>
                        
                </div>
            </div>
        }else if (this.state.displayError){
            showResult = <div style={{paddingTop:"20px", color: "red"}}>Please provide all the required fields</div>
        }
        return(
            <div>
                <h1>Password recovery page</h1>
                <div>
                     <div >
                        <span>
                            <RadioButton inputId="city5" name="city2" value="Email" onChange={e => this.changeValue(e.value)} checked={this.state.deliveryMethod === 'Email'} />
                            <label >Email</label>
                        </span>
                        <span style= {{paddingLeft: "10px"}}>
                            <RadioButton inputId="city8" name="city2" value="OnScreen" onChange={e => this.changeValue(e.value)} checked={this.state.deliveryMethod === 'OnScreen'} />
                            <label>On Screen</label>
                        </span>
                    </div>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <InputText 
                            value={this.state.recoverRequest.fullName} 
                            placeholder= "Enter full name"
                            onChange={this.changeValueFullName }/>
                    </div>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <InputText 
                            value={this.state.recoverRequest.email} 
                            placeholder= "Enter email address"
                            onChange={this.changeValueEmail }/>
                    </div>
                    <div>
                        <span style={{paddingLeft : "0px"}}>
                            <Button label="Search" className="p-button-outlined"  onClick={this.submit}/>
                        </span>
                        <span style={{paddingLeft : "10px"}}>
                            <Button label="Clear" className="p-button-outlined" onClick={this.clear}/>
                        </span>
                    </div>
                    {showResult}
                </div>
            </div>
        );
    }
}

export default ForgotPassword;