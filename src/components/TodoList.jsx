import { useTasksContext } from "./TasksContext";
import { useState } from "react";

export const TodoList = () => {
    const { tasks, toggleTaskDone, removeTask, categoryColors } = useTasksContext ();
    const [filter, setFilter] = useState("All");

    const filteredTasks =
        filter === "All"
        ? tasks
        : tasks.filter((task) => task.category === filter);

 return(
   <> 
    <h2>Todays tasks</h2>
    {/*message shown depending on tasks in list or not*/}
    <div>
        {tasks.length === 0 ? (
            <h4>You don't have any tasks to do at the moment</h4>
        ) : (
            <h4>You have {tasks.filter(task => !task.done).length} tasks left to do today</h4>     

        )}
    </div>
     {/*filter buttons for category filtration*/}   
    <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Work")} style={{ backgroundColor: categoryColors.Work }}>Work</button>
        <button onClick={() => setFilter("Home")}style={{ backgroundColor: categoryColors.Home }}>Home</button>
        <button onClick={() => setFilter("Personal")}style={{ backgroundColor: categoryColors.Personal }}>Personal</button>
        <button onClick={() => setFilter("Other")}style={{ backgroundColor: categoryColors.Other }}>Other</button>
    </div>

    <div className="list-container">
      {filter !== "All" && filteredTasks.length === 0 ? (
        <p>No tasks in this category.</p>
      ) : (
        filteredTasks.map((task) => (
          <div className="task-box" key={task.id} style={{ backgroundColor: categoryColors[task.category] || "#f1efef" }} >
                <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTaskDone(task.id)}
                />    
                <div className="task-deadline-box">
                <h5 style={{ textDecoration: task.done ? "line-through" : "none" }}>
                    {task.task}
                </h5>
                <p style={{ textDecoration: task.done ? "line-through" : "none" }}>
                    Deadline: {task.deadline}
                </p>
                </div>    
                <div className="button-box">
                <button className="remove-button" onClick={() => removeTask(task.id)}> Remove ❌ </button>
                </div>
          </div>    
        ))
      )}
    </div>
  </>
);
}



export default TodoList;