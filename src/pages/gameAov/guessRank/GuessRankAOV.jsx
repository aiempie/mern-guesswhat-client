import React, { useEffect, useState } from "react";

function GuessRankAOV() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    function fetchData() {}

    fetchData();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const body = "";

  return loading ? (
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
  ) : (
    body
  );
}

export default GuessRankAOV;
