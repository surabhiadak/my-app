import React from "react";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent) => void;
}

const InputTask: React.FC<Props> = ({ tasks, setTasks, addTask }) => {
  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        addTask(e);
      }}
    >
      <input
        type="input"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        placeholder="Add a new task"
        className="w-full rounded-full py-5 px-8 text-lg border-none transition duration-200 shadow-inner focus:shadow-lg"
      ></input>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default InputTask;
