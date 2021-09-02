import React, { useContext } from "react";

import { DataContext } from "../global-context/DataContext";

const InputMotos = () => {
  const { totalMotos } = useContext(DataContext);
  return (
    <div className="col-md">
      <div className="form-floating">
        <input
          name="valueNumber"
          type="number"
          value={totalMotos}
          className="form-control input-to-calculate"
        />
        <label>Motos</label>
        <button
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#ModalMotos"
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default InputMotos;
