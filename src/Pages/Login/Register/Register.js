import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
           <form >
            <input type="text" name="name" placeholder='Enter your name'/> <br /> <br />
            <input type="email" name="email" placeholder='Enter your email'/> <br /> <br />
            <input type="password" name="password" placeholder='Enter your password'/> <br /> <br />
            <input type="date" name="dob" placeholder='Enter your birthday'/> <br /> <br />
            <input type="number" name="mobile" placeholder='Enter your mobile number'/> <br /> <br />
            <input type="submit"  value="Register"/> <br /> <br />
            </form>
            <p>Already have an account <Link to="/login">Login</Link></p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Register;