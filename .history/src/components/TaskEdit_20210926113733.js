import { useState } from "react";
import React from 'react'
import { render } from 'react-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class TaskEdit extends React.Component {
    state = {
        title: "",
        description: "",
        startDate: new Date(),
    }
}

const onSaveTask = ({ }) => {
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

    console.log("saving tasks");
    setTasks([
        { desc: desc, date: date, id: Date.now(), complete: false },
        ...tasks,
    ]);
};

const saveTask = (e) => {

    e.preventDefault();
    onSaveTask({ desc, date });

    setDesc("");
    setDate("");


    render(); {
        return (
            <div className="card">
                <h3>Add Task</h3>
                <form>
                    <label htmlFor="desc">Description</label>
                    <input
                        type="text"
                        name="desc"
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        name="startDate"
                        dateFormat="MM/dd/yyyy"
                    />

                    <div className="text-right">
                        <button className="button dark" onClick={saveTask}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default TaskEdit;