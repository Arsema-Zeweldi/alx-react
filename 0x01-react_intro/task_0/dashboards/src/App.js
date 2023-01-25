import logo from "./holberton_logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <header>
          <h1>School dashboard</h1> 
        </header>
      </div>
      <div className="App-body">
        <body>
          <p>Login to access the full dashboard</p>
        </body>
      </div>
      <div className="App-footer">
        <foorter>
          <p>Copyright 2020 - holberton School</p>
        </foorter>
      </div>
    </div>
  );
}

export default App;