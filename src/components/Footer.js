import React, { useContext } from "react";

import { DataContext } from "../global-context/DataContext";

const Footer = () => {
  const { setTotal, inputFields } = useContext(DataContext);

  const calculateTotal = () => {
    const rowPropiosNumbers = inputFields
      .filter((fields) => fields.row === "propios")
      .map((filteredObj) => filteredObj.valueNumber);
    const rowTarjetasNumbers = inputFields
      .filter((fields) => fields.row === "tarjetas")
      .map((filteredObj) => filteredObj.valueNumber);
    const rowTercerosNumbers = inputFields
      .filter((fields) => fields.row === "terceros")
      .map((filteredObj) => filteredObj.valueNumber);

    const totalPropios = rowPropiosNumbers.reduce((a, b) => a + b);
    const totalTarjetas = rowTarjetasNumbers.reduce((a, b) => a + b);

    const totalTerceros = rowTercerosNumbers.reduce((a, b) => a + b);

    setTotal({
      totalPropios,
      totalTarjetas,
      totalTerceros,
    });
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
