import React, { useState } from "react";
function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <button onClick={() => removeChip(index)} className="chip-close">X</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a chip and press enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: "8px", width: "200px" }}
      />
    </div>
  );
}

export default ChipsInput;