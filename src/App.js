import React, { useState, useEffect } from "react";

import Advice from "./components/Advice";

const App = () => {
  const url = "https://api.adviceslip.com/advice";

  const [data, setData] = useState([]);

  const getAdvice = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData([data]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  // console.log(typeof data);
  // console.log(Array.isArray(data));

  return (
    <>
      <div className="main-card">
        <Advice data={data} />

        <div className="divider-img">
          <img
            src="https://res.cloudinary.com/doqmdeqem/image/upload/v1677317500/pattern-divider-desktop_u6vny9.svg"
            alt="./images/pattern-divider-desktop.svg"
          />
        </div>
      </div>

      <button className="dice-img" id="dice" onClick={getAdvice}>
        <img
          src="https://res.cloudinary.com/doqmdeqem/image/upload/v1677317308/icon-dice_xjrhtv.svg"
          alt="dice"
          className="dice"
        />
      </button>
    </>
  );
};

export default App;
