import { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-1/2 mx-auto my-10 p-5 border rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
          <label htmlFor="task" className="text-xl font-semibold">Task</label>
          <input
            type="text"
            value={task}
            placeholder="Add task ex. Do Laundry"
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded-md outline-none"
          />
        </div>
        <button type="submit" className="bg-black text-white p-2 rounded-md w-max">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
