import React from "react";

const CheckboxWithLabel = ({ id, checked, onChange, label }) => {
  // some color
  const textColorClass = checked ? "text-green-500" : "text-red-500";
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2 "
      />
      <label htmlFor={id} className={textColorClass}>
        {checked ? `Include ${label} ` : `Exclude ${label}`}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
