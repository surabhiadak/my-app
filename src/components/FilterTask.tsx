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
    <div className="flex space-x-2">
      <span
        className={`cursor-pointer ${taskFilter === "all" ? "font-bold" : ""}`}
        onClick={() => handleFilter("all")}
      >
        ALL
      </span>
      <span
        className={`cursor-pointer ${
          taskFilter === "completed" ? "font-bold" : ""
        }`}
        onClick={() => handleFilter("completed")}
      >
        DONE
      </span>
      <span
        className={`cursor-pointer ${
          taskFilter === "incomplete" ? "font-bold" : ""
        }`}
        onClick={() => handleFilter("incomplete")}
      >
        OPEN
      </span>
    </div>
  );
};

export default FilterTask;
