import { useEffect, useState } from "react";
import InputTask from "./components/InputTask";
import { Task } from "./model";
import TaskList from "./components/TaskList";
import LoadTask from "./components/LoadTask";
import FilterTask from "./components/FilterTask";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string>("");
  const [taskFilter, setTaskFilter] = useState<string>("all");

  //persisting tasks in local storage
  const LOCAL_STORAGE_KEY = "tasks";

  const [taskInput, setTaskInput] = useState<Task[]>(() => {
    const storedTasks = window.localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskInput));
  }, [taskInput]);

  //add Tasks
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (tasks) {
      const newTask: Task = { id: Date.now(), tasks, completed: false };
      setTaskInput((prevTasks) => [...prevTasks, newTask]);
      setTasks("");
    }
  };

  const handleFetchedTasks = (fetchedTasks: Task[]) => {
    const combinedTasks = [...taskInput, ...fetchedTasks];
    setTaskInput(combinedTasks);
  };

  //filter tasks based on completion status
  const filteredTasks = taskInput.filter((task) => {
    if (taskFilter === "completed") {
      return task.completed;
    } else if (taskFilter === "incomplete") {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <span className="text-3xl font-bold mt-8 mb-4"> Task Management App</span>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <InputTask tasks={tasks} setTasks={setTasks} addTask={addTask} />
        <FilterTask taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
        <LoadTask handleFetchedTasks={handleFetchedTasks} />
        <TaskList taskInput={filteredTasks} setTaskInput={setTaskInput} />
      </div>
    </div>
  );
};

export default App;
