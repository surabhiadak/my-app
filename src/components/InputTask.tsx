import React from "react";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
}

const InputTask: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <input
      type="text"
      value={tasks}
      onChange={(e) => setTasks(e.target.value)}
      placeholder="What's on your plan?"
      className="flex-1 p-2 border rounded-l-md"
    />
  );
};

export default InputTask;
