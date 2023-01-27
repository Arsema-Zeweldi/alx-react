import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <body>
          <p>Login to access the full dashboard</p>
          <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input>
            <button>OK</button>
          </form>
        </body>
      </div>
      <div className="App-footer">
        <footer>
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
