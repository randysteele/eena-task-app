import Task from "./Task";
function Tasks({ tasks, onTglStatus }) {
    return (
        <div className="row">
            <div className="col-12 text-right">
                <button className="button primary">New</button>
            </div>
            {tasks.map((task) => (
                <Task task={task} onTglStatus={onTglStatus} />
            ))}
            <div className="col-12"></div>
        </div>
    );
}

export default Tasks;
