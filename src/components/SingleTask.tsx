import React from "react";
import { Task } from "../model";
import { AiFillDelete } from "react-icons/ai";

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
    <div className="flex items-center justify-between p-2  mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={tasks.completed}
          onChange={() => handleDone(tasks.id)}
          className="mr-2"
        />
        {tasks.completed ? (
          <s className="text-gray-500">{tasks.tasks}</s>
        ) : (
          <span className="text-black">{tasks.tasks}</span>
        )}
      </div>

      <button
        className="text-red-500 hover:text-red-600 transition duration-200"
        onClick={() => handleDelete(tasks.id)}
      >
        <AiFillDelete size={20} />
      </button>
    </div>
  );
};

export default SingleTask;
