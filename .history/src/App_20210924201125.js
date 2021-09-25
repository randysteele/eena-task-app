import logo from './logo.svg';
import './App.css';
import "./assets/styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header></Header>
        <button className="button">New</button>
        <Tasks></Tasks>
      </header>
    </div>
  );
}

export default App;
