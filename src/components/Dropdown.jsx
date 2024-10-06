import React from "react";

function Dropdown({title, handleChange, options}) {
  return (
    <select
      className="bg-[#0B192C] text-[#FF6500] border border-zinc-600 rounded-md px-3 text-sm"
      onChange={(e) => handleChange(e.target.value)}
      defaultValue="0" // Set the default value for the select element
    >
      <option value="0" hidden disabled>{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;
