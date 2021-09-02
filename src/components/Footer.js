import React, { useContext } from "react";

import { DataContext } from "../global-context/DataContext";

const Footer = () => {
  const { setTotal, inputFields, totalMotos } = useContext(DataContext);

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
    const rowEfectivoNumbers = inputFields
      .filter((fields) => fields.row === "efectivo")
      .map((filteredObj) => filteredObj.valueNumber);

    const totalPropios = rowPropiosNumbers.reduce((a, b) => a + b);
    const totalTarjetas = rowTarjetasNumbers.reduce((a, b) => a + b);
    const totalTerceros = rowTercerosNumbers.reduce((a, b) => a + b);
    const totalEfectivo =
      rowEfectivoNumbers[0] + rowEfectivoNumbers[1] * rowEfectivoNumbers[2];

    const debo = inputFields.find((field) => field.id === 17);
    const mercadoLibreTotal = inputFields.find((field) => field.id === 18);

    const totalDisponible =
      totalPropios +
      totalTarjetas +
      totalTerceros +
      totalEfectivo -
      debo.valueNumber;

    const totalNeto =
      totalDisponible + mercadoLibreTotal.valueNumber + totalMotos;

    setTotal({
      totalPropios,
      totalTarjetas,
      totalTerceros,
      totalEfectivo,
      totalDisponible,
      totalNeto,
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
