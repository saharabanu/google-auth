import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from 'react-google-login';
import './App.css';

function App() {
 
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  
  return (
    <div className="App">
       <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          
          <GoogleLogin
        clientId="59748591446-3rrfi7raljt3f3abvno3hms5013c98oa.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        
      />
        </div>
      </header>
      
    </div>


  );
}

export default App;
