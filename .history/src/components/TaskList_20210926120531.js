import React, { Component } from 'react';

class TaskList extends Component {
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    state = {
        editing: false,
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TaskList;