import React, {useState, useEffect} from 'react';
import './App.css';
import Webplayback from './WebPlayback'
import './Login'

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function fetToken(){
      const reponse = await fetch("/auth/token");
      const json = await reponse.json();
      setToken(json.access_token);
    }
    getToken();
  },[])

  return (
    <>
    {(token === '') ? <Login/> : <Webplayback token={token} />}
    </>
  );
}

export default App;
