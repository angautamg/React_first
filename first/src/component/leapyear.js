import React, { useState } from "react";
import "./leapyear.css";

export default function LeapYear() {
  const [year, setyear] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const checkLeapYaer = () => {
    const trimmedYaer = year.trim();
    if (!trimmedYaer) {
      setError("Please enter a year");
      setResult("");
      return;
    }
    setError("");
    const y = parseInt(trimmedYaer, 10);
    const isLeapYear = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    setResult(isLeapYear ? `${y} is a Leap Year` : `${y} is not a Leap Year`);
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={year}
        onChange={(e) => setyear(e.target.value)}
        
      />

      <button onClick={checkLeapYaer} data-testid="check-btn">
        Check
      </button>
      {error && (
        <div className="error" data-testid="error-msg">
          {error}
        </div>
      )}

      {result && (
        <div className="result" data-testid="result">
          {result}
        </div>
      )}
    </div>
  );
}
