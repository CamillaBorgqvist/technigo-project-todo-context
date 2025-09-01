import { useTasksContext } from "./TasksContext";

export const TodoForm = () => {
    const { tasks, addTask, newTask, handleChange, errorMessage, handleSubmit, categoryColors } = useTasksContext ();

    return (
        <div className="form-container"> 
            <div className="form-input">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input className="task-input"
                            type="text"
                            name="task"
                            placeholder="Type your new task here"
                            value={newTask.task}
                            onChange={handleChange}
                        />  
                    </label>      
                    <br />
                    <div className="deadline-category-field">
                        <label>
                            <input  className="deadline-input"
                                type="text"
                                name="deadline"
                                placeholder="Deadline"
                                value={newTask.deadline}
                                onChange={handleChange}
                            />
                        </label> 
                        <br />
                        <label>
                            <select  className="select-category"
                                name="category" 
                                value={newTask.category} 
                                onChange={handleChange}
                            >
                                <option value="" disabled hidden> Category</option>
                                <option value="Work" style={{ backgroundColor: categoryColors.Work }}>
                                    Work
                                </option>
                                <option value="Home" style={{ backgroundColor: categoryColors.Home }}>
                                    Home
                                </option>
                                <option value="Personal" style={{ backgroundColor: categoryColors.Personal }}>
                                    Personal
                                </option>
                                <option value="Other" style={{ backgroundColor: categoryColors.Other }}>
                                    Other
                                </option>
                            </select>
                        </label>
                    </div>    
                    <br />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <br/>
                    <div className="button-field">
                        <button className="submit-button" type="submit">Add Task</button>  
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default TodoForm;