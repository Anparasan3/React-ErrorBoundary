import { useState } from "react";
import "./index.css";

const sampleArr = ["Hello", "World!"];
function App() {
  const [dummyData, setDummyData] = useState(sampleArr);

  return (
    <div className="App">
      <div>
        <button onClick={() => setDummyData(sampleArr.concat(dummyData))}>
          Add
        </button>
      </div>
      <div>
        {dummyData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        <button style={{}} onClick={() => setDummyData()}>
          Click here to Create Error
        </button>
      </div>
    </div>
  );
}

export default App;
