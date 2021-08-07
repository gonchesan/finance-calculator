import React from "react";

function InputField({ label }) {
  return (
    <div className="col-md">
      <div className="form-floating">
        <input type="number" className="form-control" />
        <label>{label}</label>
      </div>
    </div>
  );
}

export default InputField;
