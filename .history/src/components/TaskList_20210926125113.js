import React, { Component } from 'react';
// import { onTglStatus } from "../App"
class TaskList extends Component {
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    state = {
        editing: false,
    }
    onTglStatus = (task) => {
        console.log("completing task");
        this.setTasks(
            this.tasks.map((chkTask) => {
                chkTask.complete =
                    task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
                return chkTask;
            })
        );
    };

    render() {
        return (
            <div className="card text-left" >
                <div className="row">
                    <input type="text" className={this.task}></input>
                    <div className="col-10">
                        <h4>{this.desc}</h4>
                        <div className="task-meta">
                            <img
                                src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                                alt="calendar"
                            />
                            {this.date}
                        </div>
                    </div>

                    <div className="col-2 is-center">
                        {this.complete}
                        <button
                            className="button icon-only clear"
                            onClick={() => this.onTglStatus(this.task)}>
                            {this.complete && "✅"}
                            {!this.complete && "⬜"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;