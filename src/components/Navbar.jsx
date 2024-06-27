import React from "react";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="py-2 px-3 border rounded-full flex justify-between items-center bg-white">
      <div className="flex items-center gap-2">
        <span className="size-8 bg-gradient-to-br from-blue-500 to-green-400 animate-gradient bg-300% rounded-full"></span>
        <span className="flex flex-col leading-tight">
          <h1 className="md:text-2xl text-lg text-gray-500 font-semibold bg-gradient-to-tr from-blue-500 to-green-500 bg-clip-text text-transparent">
            Task Manager
          </h1>
          <p className="text-xs">manage your tasks in few clicks</p>
        </span>
      </div>
      <BsGithub className="size-8 hover:text-gray-500" />
    </div>
  );
};

export default Navbar;
