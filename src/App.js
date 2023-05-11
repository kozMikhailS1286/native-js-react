import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

// import

function App() {
  // useEffect(() => {
  //   const script = document.createElement('script')
  //
  //   script.src= './js11.js'
  //   script.async=true
  //   document.body.appendChild(script)
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
