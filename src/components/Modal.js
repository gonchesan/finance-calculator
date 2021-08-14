import React, { useState, useContext } from "react";

import { DataContext } from "../contexts/DataContext";

const Modal = () => {
  const [inputToAdd, setInputToAdd] = useState("");
  const { inputFields, setInputFields } = useContext(DataContext);

  const handleInputToAdd = (event) => {
    event.preventDefault();
    setInputToAdd(event.target.value);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { name: inputToAdd, valueNumber: 0 }]);
    setInputToAdd("");
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Nueva entrada
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="entry-name" className="col-form-label">
                  Nombre de Entrada:
                </label>
                <input
                  type="text"
                  value={inputToAdd}
                  className="form-control"
                  id="entry-name"
                  onChange={handleInputToAdd}
                />
              </div>
              {/* <div className="mb-3">
                <label for="row-type" className="col-form-label">
                  Nombre de fila:
                </label>
                <select
                  className="form-select"
                  id="row-type"
                  aria-label="Default select example"
                >
                  <option value="1">Propios (Gaston)</option>
                  <option value="2">Propios (Sam)</option>
                  <option value="3">Tarjetas</option>
                </select>
              </div> */}
            </form>
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
              type="button"
              className="btn btn-primary"
              disabled={inputToAdd.length === 0}
              onClick={handleAddField}
            >
              Agregar entrada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
