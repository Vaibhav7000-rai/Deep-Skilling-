import React from "react";

function CalculateScore({ Name, School, Total, goal }) {
  const averageScore = goal > 0 ? (Total / goal) * 100 : 0;
  const formattedScore = averageScore.toFixed(2);

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ color: "#8b0000", fontSize: "2.4rem", marginBottom: "1rem" }}>Student Details:</h1>
      <p style={{ fontSize: "1.2rem" }}>
        <strong style={{ color: "blue" }}>Name:</strong> {Name}
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        <strong style={{ color: "crimson" }}>School:</strong> {School}
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        <strong>Total:</strong> {Total} Marks
      </p>
      <p style={{ fontSize: "1.3rem", color: "green", marginTop: "1rem" }}>
        <strong>Score:</strong> {formattedScore}%
      </p>
    </div>
  );
}

export default CalculateScore;
