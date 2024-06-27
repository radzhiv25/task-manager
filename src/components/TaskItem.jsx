import React from 'react'
import { MdDelete } from 'react-icons/md'

const TaskItem = ({task, deleteTask, toggleTask}) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md bg-white shadow-md hover:shadow-xl">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-4 size-5 rounded"
      />
      <span
        className={`${
          task.completed ? 'line-through text-gray-500' : 'text-gray-800'
        }`}
      >
        {task.text}
      </span>
    </div>
    <button
      onClick={() => deleteTask(task.id)}
    >
        <MdDelete className="size-5 text-red-500 hover:text-red-700 "/>
    </button>
  </div>
  )
}

export default TaskItem