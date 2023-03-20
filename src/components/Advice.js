import React from "react";

const Advice = ({ data }) => {
  return (
    <>
      {data.map((advice, index) => {
        return (
          <div key={index}>
            <h4 className="id">
              <span>ADVICE</span>
              {`#${advice.slip.id}`}
            </h4>
            <p className="quotes">{`"${advice.slip.advice}"`}</p>
          </div>
        );
      })}
    </>
  );
};

export default Advice;
