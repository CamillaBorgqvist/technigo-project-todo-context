import { createContext, useContext, useState } from "react";

const TasksContext = createContext ();

export const TasksProvider = ({ children }) => {

    //array to add new tasks to
    const[tasks, setTasks] = useState ([])
    
    //update array with new task
    const addTask = (newTask) => { 
        setTasks((prev) => [{...newTask, id: Date.now(), done: false}, ...prev]);
    }

    //newTask to add to the array
    const [newTask, setNewTask] = useState ({
        task: "",
        deadline: "",
        category: ""
    })

    //update newTask value from input field
    const handleChange = event => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        })
    }

    //to handle error message
    const [errorMessage, setErrorMessage] = useState("");

    //handle submit button
    const handleSubmit = event => {
        event.preventDefault()

        if (!newTask.task || !newTask.deadline || !newTask.category) {
            setErrorMessage("Please fill in all fields");
                return;
        }
        if (newTask.task.trim().length > 20) {
            setErrorMessage("Your task cant be over 20 characters");
            return;
        }    
            addTask(newTask)
            setNewTask ({ task: "", deadline: "", category: ""})
            setErrorMessage("");
    };
     

    //toggle item between done/ not done
    const toggleTaskDone = (id) =>
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );

    //remove tasks
    const removeTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    //color for category
    const categoryColors = {
        Work: "rgba(131, 226, 250, 0.5)",      
        Home: "rgba(139, 252, 227, 0.5)",      
        Personal: "rgba(252, 210, 139, 0.5)",  
        Other: "rgba(253, 189, 189, 0.5)"      
    };

    return (
        <TasksContext.Provider value={{tasks, addTask, newTask, handleChange, errorMessage, handleSubmit, toggleTaskDone, removeTask, categoryColors}}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => useContext(TasksContext);