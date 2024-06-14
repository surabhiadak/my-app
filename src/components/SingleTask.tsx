import React from "react";
import { Task } from "../model";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  tasks: Task;
  taskInput: Task[];
  setTaskInput: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ tasks, taskInput, setTaskInput }) => {
  const handleDone = (id: number) => {
    setTaskInput(
      taskInput.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTaskInput(taskInput.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-2">
      <div className="flex items-center">
        {tasks.completed ? (
          <s className="text-gray-500">{tasks.tasks}</s>
        ) : (
          <span className="text-black">{tasks.tasks}</span>
        )}
      </div>

      <div className="flex items-center">
        <button
          className="text-red-500 hover:text-red-600 transition duration-200 mr-2"
          onClick={() => handleDelete(tasks.id)}
        >
          <AiFillDelete size={20} />
        </button>

        <button
          className="text-green-500 hover:text-green-700 transition duration-200"
          onClick={() => handleDone(tasks.id)}
        >
          <MdDone size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
