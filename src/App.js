import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';


function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    console.log(result);
    console.log(result.profileObj);
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData)
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

 
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  
  return (
    <div className="App">
       <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId="917937444435-bk64pt8nko9co261h0nffilpbgn7u5ef.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
        <div>
          
          {/* <GoogleLogin
        clientId="917937444435-bk64pt8nko9co261h0nffilpbgn7u5ef.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        
      /> */}
        </div>
      </header>
      
    </div>


  );
}

export default App;
