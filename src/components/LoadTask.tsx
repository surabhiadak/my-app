import React, { useState } from "react";
import axios from "axios";
import { Task } from "../model";

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
      const response = await axios.get(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      const fetchedTasks: Task[] = response.data.map((task: any) => ({
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
        className={`px-4 py-2 rounded-md ${
          loading || loaded
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-400 text-white hover:bg-blue-600 transition duration-200"
        }`}
      >
        {loading ? "Loading tasks..." : "Load previous tasks"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LoadTask;
