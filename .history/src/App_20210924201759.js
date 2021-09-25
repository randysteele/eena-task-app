import './App.css';
import "./assets/styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { desc: "Learn React", id: 1 },
    { desc: "Profit", id: 2 },
  ]);

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Tasks tasks={tasks}></Tasks>
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default App;
