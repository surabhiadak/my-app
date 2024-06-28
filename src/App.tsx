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
    const existingTaskIds = new Set(taskInput.map((task) => task.id));
    const newTasks = fetchedTasks.filter(
      (task) => !existingTaskIds.has(task.id)
    );
    const combinedTasks = [...taskInput, ...newTasks];
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

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-GB").split("/").join(".");
  };

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
        <div className="flex mb-4">
          <InputTask tasks={tasks} setTasks={setTasks} />
          <button
            onClick={addTask}
            className="bg-gray-400 text-white px-4 mx- 4 rounded-r-md hover:bg-gray-600 transition duration-200"
          >
            Add
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">{getCurrentDate()}</span>
          <FilterTask taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
        </div>
        <TaskList taskInput={filteredTasks} setTaskInput={setTaskInput} />
        <LoadTask handleFetchedTasks={handleFetchedTasks} />
      </div>
    </div>
  );
};

export default App;
