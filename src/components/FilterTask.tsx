import React from "react";

interface Props {
  taskFilter: string;
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTask: React.FC<Props> = ({ taskFilter, setTaskFilter }) => {
  const handleFilter = (filter: string) => {
    setTaskFilter(filter);
  };

  return (
    <div className="filter-flex justify-end mt-4">
      <button
        className={`px-4 py-2 rounded-md mr-2 ${
          taskFilter === "all"
            ? "bg-blue-400 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
        onClick={() => handleFilter("all")}
      >
        All Tasks
      </button>
      <button
        className={`px-4 py-2 rounded-md mr-2 ${
          taskFilter === "completed"
            ? "bg-blue-400 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
        onClick={() => handleFilter("completed")}
      >
        Completed Tasks
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          taskFilter === "incomplete"
            ? "bg-blue-400 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
        onClick={() => handleFilter("incomplete")}
      >
        Incomplete Tasks
      </button>
    </div>
  );
};

export default FilterTask;
