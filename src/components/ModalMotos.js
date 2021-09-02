import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../global-context/DataContext";

const ModalMotos = () => {
  const [inputToAdd, setInputToAdd] = useState({
    id: undefined,
    name: "",
    valueNumber: 0,
  });
  const { motos, setMotos, totalMotos, setTotalMotos } =
    useContext(DataContext);

  const handleInputToAdd = (event) => {
    inputToAdd[event.target.name] = event.target.value;
    setInputToAdd({ ...inputToAdd });
  };

  const submitAddField = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();
    inputToAdd.id = newId;
    setMotos([...motos, inputToAdd]);
    setInputToAdd({ id: undefined, name: "", valueNumber: 0 });
  };

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < motos.length; i++) {
      temp += parseFloat(motos[i].valueNumber);
    }

    setTotalMotos(temp);
  }, [motos]);

  return (
    <div
      className="modal fade"
      id="ModalMotos"
      tabIndex="-1"
      aria-labelledby="ModalMotosLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalMotosLabel">
              Motos -${totalMotos}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row g-4">
                <div className="col-md">
                  <input
                    name="name"
                    type="text"
                    onChange={handleInputToAdd}
                    value={inputToAdd.name}
                    className="form-control input-to-calculate"
                  />
                </div>
                <div className="col-md">
                  <input
                    name="valueNumber"
                    type="number"
                    onChange={handleInputToAdd}
                    value={inputToAdd.valueNumber}
                    className="form-control input-to-calculate"
                  />
                </div>
              </div>
            </form>
            <ul className="list-group">
              {motos.map((moto) => {
                return (
                  <li className="list-group-item" key={moto.id}>
                    {moto.name} - ${moto.valueNumber}
                    <button className="btn btn-sm btn-warning">❕</button>
                    <button className="btn btn-sm btn-outline-danger">
                      ❌
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitAddField}
            >
              Agregar entrada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMotos;
