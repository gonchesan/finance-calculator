import React from "react";

const InputTotal = ({ total }) => {
  return (
    <div className="col-md">
      <div className="form-floating">
        <input value={total} className="form-control" disabled />
        <label>Total</label>
      </div>
    </div>
  );
};

export default InputTotal;
