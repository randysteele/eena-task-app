function Task({ task, onTglStatus }) {
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    state = {
        editing: false,
    }
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    return (
        <div className="card text-left" key={task.id}>
            <div className="row">
                <div onDoubleClick={handleEditing}>Edit</div>
                <input type="text" className={task}></input>
                <div className="col-10">
                    <h4>{task.desc}</h4>
                    <div className="task-meta">
                        <img
                            src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                            alt="calendar"
                        />
                        {task.date}
                    </div>
                </div>

                <div className="col-2 is-center">
                    {task.complete}
                    <button
                        className="button icon-only clear"
                        onClick={() => onTglStatus(task)}>
                        {task.complete && "✅"}
                        {!task.complete && "⬜"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task;
