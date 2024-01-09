import React from "react";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <div className="spinner"></div>
    </div>
  );
}

export default Loading;
