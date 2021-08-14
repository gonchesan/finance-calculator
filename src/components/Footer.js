import React, { useContext } from "react";

import { DataContext } from "../contexts/DataContext";

const Footer = () => {
  const { setTotal, inputFields } = useContext(DataContext);

  const calculateTotal = () => {
    let allNumbers = inputFields.map((field) => field.valueNumber);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setTotal(allNumbers.reduce(reducer));
  };

  return (
    <div className="card-footer">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2 mt-2">
          Guardar
        </button>
        <button className="btn btn-primary mt-2" onClick={calculateTotal}>
          Calcular
        </button>
      </div>
    </div>
  );
};

export default Footer;
