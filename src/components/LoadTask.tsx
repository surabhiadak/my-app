import React, { useState } from "react";
import { Task, PreviousLoadedTask } from "../model";

interface Props {
  handleFetchedTasks: (tasks: Task[]) => void;
}

const LoadTask: React.FC<Props> = ({ handleFetchedTasks }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const fetchTasks = async () => {
    if (loaded) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      if (!response.ok) {
        throw new Error("Tasks could not be loaded");
      }
      const data: PreviousLoadedTask[] = await response.json();
      const fetchedTasks: Task[] = data.map((task: PreviousLoadedTask) => ({
        id: task.id,
        tasks: task.title,
        completed: false,
      }));
      handleFetchedTasks(fetchedTasks);
      setLoaded(true);
    } catch (error) {
      setError("Tasks could not be loaded");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={fetchTasks}
        disabled={loading || loaded}
        className={`w-full bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200 ${
          loading || loaded ? "bg-gray-300 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Loading tasks..." : "Load previous tasks ..."}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LoadTask;
