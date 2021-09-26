import { useState } from "react";


class TaskEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            title: title,
            desc: desc,

        }
    }
}
// this.handleChange = this.handleChange.bind(this);
// this.onFormSubmit = this.onFormSubmit.bind(this);
const [desc, setDesc] = useState("");
const [date, setDate] = useState("");

const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
};
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

            {/* <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /> */}
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


export default TaskEdit;