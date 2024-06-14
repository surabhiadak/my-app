import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
  taskInput: Task[];
  setTaskInput: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ taskInput, setTaskInput }) => {
  return (
    <div className="mt-4">
      {taskInput.map((tasks) => (
        <SingleTask
          tasks={tasks}
          key={tasks.id}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
        />
      ))}
    </div>
  );
};

export default TaskList;
