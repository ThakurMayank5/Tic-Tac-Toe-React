import "./App.css";
import Header from "./components/Header";
// import Playground from "./components/Playground";
import Footer from "./components/Footer";
import "./input.css";
import { useState } from "react";

function App() {
  //state variable that stores true if dark mode is applied
  let [darkmode, setdarkmode] = useState(false);

  //function that can change darkmode
  let changeDarkmode = () => {
    setdarkmode(!darkmode);
  };

  return (
    <>
      <Header isDarkMode={darkmode} changeDark={changeDarkmode}></Header>
      <main>
        <div class="flex flex-col md:flex-row bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-200 ">
          {/* <!-- Left Div (2/3 of the width) --> */}
          <div class="w-full md:w-2/3 p-4 flex-row justify-items-center">
            <div id="board" class="grid grid-cols-3 aspect-square h-96 gap-2">
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(1)"
                id="block1"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(2)"
                id="block2"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(3)"
                id="block3"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(4)"
                id="block4"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(5)"
                id="block5"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(6)"
                id="block6"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(7)"
                id="block7"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(8)"
                id="block8"
              ></div>
              <div
                class="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl"
                onclick="tap(9)"
                id="block9"
              ></div>
            </div>
            <div
              id="status container"
              class="flex justify-center items-center h-20"
            >
              <span id="status" class="text-xl font-bold">
                It's X's Turn
              </span>
            </div>
          </div>

          {/* <!-- Right Div (1/3 of the width) --> */}
          <div class=" w-full md:w-1/3 bg-gradient-to-r from-gray-500 via-gray-300 to-white p-4 flex-row justify-items-center space-y-12 pt-8
          
          sm:bg-gradient-to-r sm:from-teal-500 sm:to-teal-800

          lg:rounded-l-full
          md:rounded
          hover:rounded-l-3xl
          transition-all
          duration-1000
          hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700

          ">
            <button class="bg-gradient-to-r from-custom-teal to-custom-dark text-white py-2 px-6 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-900">
              Reset
            </button>
            <h2 className="text-6xl font-bold">Score:</h2>
            {/* <!-- Scoreboard --> */}
            <div class="flex justify-between mb-4 space-x-10">
              <div class="flex flex-col items-center w-1/2 space-y-2">
                <h3 class="font-bold text-4xl">0</h3>
                <p class="">0/0</p>
              </div>
              <div class="flex flex-col items-center w-1/2 space-y-2">
                <h3 class="font-bold text-4xl">X</h3>
                <p class="">0/0</p>
              </div>
            </div>
            {/* <!-- Current Status --> */}
            <div class="text-center mt-4 font-medium text-lg">
              <span class="text-gray-600">Player X's is winning</span>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
