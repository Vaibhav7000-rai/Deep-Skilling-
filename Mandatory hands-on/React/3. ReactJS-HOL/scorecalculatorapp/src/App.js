import React from "react";
import CalculateScore from "./CalculateScore";

function App() {
  const student = {
    Name: "Steeve",
    School: "DNV Public School",
    Total: 284,
    goal: 300,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <CalculateScore {...student} />
    </div>
  );
}

export default App;
