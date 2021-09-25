import logo from './logo.svg';
import './App.css';
import "./assets/styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        >
          Learn React
          <Header></Header>
        </a>
      </header>
    </div>
  );
}

export default App;
