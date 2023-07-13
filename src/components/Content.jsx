import React, { useState } from "react";
import colorNames from "colornames";
const Content = () => {
  const [color, setColor] = useState("");
  const [hexColor, setHexColor] = useState("");
  return (
    <main>
      <div className="container">
        <div
          className="box"
          style={{
            backgroundColor: color,
            color: "black" ? "white" : "white",
          }}
        >
          <p>{color ? color : "Empty Value"}</p>
          <p>{hexColor ? hexColor : ""}</p>
        </div>
        <div className="search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Add color name"
              value={color}
              onChange={(e) => {
                setColor(e.target.value),
                  setHexColor(colorNames(e.target.value));
              }}
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Content;
