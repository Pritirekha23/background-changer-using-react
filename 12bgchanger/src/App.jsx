import { useState } from "react";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <div
      className="w-full  duration-500 h-screen "
      style={{ backgroundColor: color }}
    >
      <div className="flex  flex-wrap justify-center  inset-x-0  bg-black  px-14 py-2 rounded-3xl top-15 shadow-lg">
        <div className="mt-2">
          <button
            className="m-2"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            className="m-2"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            className="m-2"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            className="m-2"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            className="m-2"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            className="m-2"
            onClick={() => setColor("crimson")}
            style={{ backgroundColor: "crimson" }}
          >
           crimson
          </button>
          <button
            className="m-2"
            onClick={() => setColor(" violet")}
            style={{ backgroundColor: " violet" }}
          >
            violet
          </button>
          <button
            className="m-2"
            onClick={() => setColor("grey")}
            style={{ backgroundColor: "grey" }}
          >
           grey
          </button>
          <button
            className="m-2"
            onClick={() => setColor("yellowgreen")}
            style={{ backgroundColor: "yellowgreen" }}
          >yellowgreen
          </button>
          <button
            className="m-2"
            onClick={() => setColor("cyan")}
            style={{ backgroundColor: "cyan" }}
          >
          cyan
          </button>
           <button
            className="m-2"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
         purple
          </button>
          <button
            className="m-2"
            onClick={() => setColor("lightpink")}
            style={{ backgroundColor: "lightpink" }}
          >
          lightpink
          </button>
          <button
            className="m-2"
            onClick={() => setColor("white")}
            style={{ backgroundColor: "white" }}
          >
           white
          </button>
          <button
            className="m-2"
            onClick={() => setColor("teal")}
            style={{ backgroundColor: "teal" }}
          >
           teal
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
