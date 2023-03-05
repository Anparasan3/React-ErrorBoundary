import React, { useState } from "react";

const sampleArr = ["Hello World!"];

function DisplayContent({ boundary }) {
  const [dummyData, setDummyData] = useState(sampleArr);

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "50px"
      }}
    >
      <h1>{boundary ? "Boundary added App" : "Normal App"}</h1>
      <div>
        <button style={{}} onClick={() => setDummyData()}>
          Click here to Create Error
        </button>
      </div>

      <div>
        {dummyData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      <div>
        <button onClick={() => setDummyData(sampleArr.concat(dummyData))}>
          Add
        </button>
      </div>
    </div>
  );
}

export default DisplayContent;
