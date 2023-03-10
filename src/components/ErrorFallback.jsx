import React from "react";

function ErrorFallback(props) {
  return (
    <div>
      <div>Some Error is Occuring...</div>
      <div style={{ paddingTop: "30px" }}>
        <button onClick={() => window.location.reload()}>
          Click here to restart the App
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
