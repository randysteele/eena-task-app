import "./App.css";
import "./assets/styles.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit"

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { desc: "Learn React", id: 1, date: "2021-01-03 10:00", status: "Complete" },
    { desc: "Profit", id: 2, date: "2021-01-05 15:00", status: "Open" },
  ]);
  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };
  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };
  <button
    className="button outline"
    onClick={() => setShowTaskEdit(!showTaskEdit)}>
    {!showTaskEdit && "New"}
    {showTaskEdit && "➖"}
  </button>;
  {
    showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />;
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;