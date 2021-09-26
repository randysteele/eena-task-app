import { useState } from "react";
import React from 'react'
import { render } from 'react-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { onSaveTask, desc, date, setDesc, setDate } from "./App"

class TaskEdit extends React.Component {
    // const[desc, setDesc] = useState("");
    // const[date, setDate] = useState("");

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            title: "",
            desc: "",

        }
    }
}
// this.handleChange = this.handleChange.bind(this);
// this.onFormSubmit = this.onFormSubmit.bind(this);

const saveTask = (e) => {

    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

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