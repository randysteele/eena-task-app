function Tasks({ tasks }) {
    return (
        <div className="row">
            <div className="col-12 text-right">
                <button className="button primary">New</button>
            </div>
            {tasks.map((task) => {
                return (
                    <div className="col-12 text-left" key={task.id}>
                        <h4>{task.desc}</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default Tasks;