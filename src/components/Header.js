import React from "react";
import Toggle from "./Toggle";

export default function Header(props) {
  return (
    // <!-- Header Component -->
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* <!-- Center Brand Name --> */}
      <h1 className="text-4xl font-bold mx-auto">
        Tic Tac Toe
      </h1>
      {/* <!-- Toggle Button on the Right --> */}
      <div className="flex items-center space-x-2">

      <Toggle change={props.changeDark}/>
      <span className="">Dark Mode</span>
      </div>
    </header>
  );
}
