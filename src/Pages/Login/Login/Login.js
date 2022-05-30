import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
// clientId="1002037257972-dkv6ebac8q4vou20mrri2dppbvftrqo9.apps.googleusercontent.com";
// clientSecret = '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';

const Login = () => {
    // const isLoggedIn = false;
    const handleSubmit =(e) =>{
        e.preventDefault();
    }
    const handleChange= (e) =>{

    }
    
// const responseGoogle = (response) => {
//     console.log(response);
//   }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            
            <input type="email" name="email" placeholder='Enter your email' handleChange={handleChange}/> <br /> <br />
            <input type="password" name="password" placeholder='Enter your password'/> <br /> <br />
            
            <input type="submit"  value="Login"/> <br /> <br />
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            
            <div>
            -----------or-------------
            </div>
            
            {/* <button>Login With Google</button> */}
            {/* <GoogleLogin
                clientId="1002037257972-dkv6ebac8q4vou20mrri2dppbvftrqo9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
               
            />, */}
           
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Login;