import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"
import { TasksProvider } from "./components/TasksContext"

export const App = () => {
  
  return(

    
      <TasksProvider>
          <div className="header-form-container">
            <h1>Create you Agenda</h1>
            <TodoForm />
          </div>  
            <TodoList />
      </TasksProvider>
    
  );
};

export default App;
