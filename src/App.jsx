import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Footer from "./components/Footer";

const getLocalItems = () => {
  let taskItems = localStorage.getItem("tasks");
  return taskItems ? JSON.parse(localStorage.getItem("tasks")) : [];
};

function App() {
  const [tasks, setTasks] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // for adding task
  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: task, completed: false },
    ]);
  };

  // for deleting a particular task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // for toggling the task wherther it is complete or not
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bgGrid h-screen py-5">
      <div className="md:w-1/2 mx-auto px-5 min-h-screen flex flex-col">
        {/* Navbar Component */}
        <Navbar />

        {/* Task Form to add Task */}
        <TaskForm addTask={addTask} />

        {/* Task Items will appear here */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
