import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  // to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // if task is not empty
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };
  return (
    <div className="my-5">
      <p className="mb-5 w-max mx-auto bg-white text-gray-500 text-sm rounded-full px-2 font-semibold py-1 border border-dashed border-gray-600 cursor-pointer hover:text-gray-800">
        <Link to="https://github.com/radzhiv25/task-manager" className="flex items-center ">
          want to contribute{" "}
          <span>
            <MdKeyboardArrowRight className="size-4" />
          </span>
        </Link>
      </p>
      <form
        onSubmit={handleSubmit}
        className=" p-5 flex flex-col space-y-3 bg-white border rounded-md"
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="task" className="text-xl font-semibold">
            Task
          </label>
          <input
            type="text"
            value={task}
            placeholder="Add task ex. Do Laundry"
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md w-max"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
