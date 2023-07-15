import React from "react";
import Form from "./Form";
import fb from "../res/fb.png"
import google from '../res/google.png';


function SignUp(){
    
    
    return(
    <div className="signUpCon">
        <h1>Create Account</h1>

        <div className="signUpOption">
            <div className="google signUpOp">
                <img src={google}></img>
                <p>Sign up with Google</p>
            </div>
            <div className="facebook signUpOp">
                <img src={fb}></img>
                <p>Sign up with Facebook</p>
            </div>
        </div>

        <p className="center gray">- OR -</p>

        <Form />
    </div>    
    );
}

export default SignUp;