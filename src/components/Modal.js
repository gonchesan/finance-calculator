import React, { useState, useContext } from "react";

import { DataContext } from "../global-context/DataContext";

const Modal = () => {
  // const [inputToAdd, setInputToAdd] = useState("");
  const [inputToAdd, setInputToAdd] = useState({
    id: undefined,
    name: "",
    valueNumber: 0,
    row: "",
    total: false,
  });
  const [selectValueRow, setSelectValueRow] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const { inputFields, setInputFields } = useContext(DataContext);

  const handleInputToAdd = (event) => {
    console.log(inputToAdd[event.target.name]);
    inputToAdd[event.target.name] = event.target.value;

    inputToAdd[event.target.name] = event.target.value;
    setInputToAdd({ ...inputToAdd });
  };

  // const handleSelectRow = (event) => {
  //   setSelectValueRow(event.target.value);
  //   console.log(selectValueRow);
  // };

  const submitAddField = () => {
    inputToAdd.id = inputFields.length + 1;
    checkbox === true
      ? (inputToAdd.total = "bruto")
      : (inputToAdd.total = "disponible");

    if (inputToAdd.row === "") {
      inputToAdd.row = "propios";
    }
    setInputFields([...inputFields, inputToAdd]);
    setInputToAdd({
      id: undefined,
      name: "",
      valueNumber: 0,
      row: "",
      total: false,
    });
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
                  name="name"
                  value={inputToAdd.name}
                  className="form-control"
                  id="entry-name"
                  onChange={handleInputToAdd}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="row-type" className="col-form-label">
                  Nombre de fila:
                </label>
                <select
                  className="form-select"
                  name="row"
                  id="row-type"
                  aria-label="Default select example"
                  value={handleInputToAdd.row}
                  onChange={handleInputToAdd}
                >
                  <option value="propios">Propios</option>
                  <option value="tarjetas">Tarjetas</option>
                  <option value="terceros">Terceros</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="total"
                  type="checkbox"
                  value={inputToAdd.total}
                  id="flexCheckChecked"
                  defaultChecked={inputToAdd.total}
                  onChange={() => setCheckbox(!checkbox)}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Total Bruto
                </label>
              </div>
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

export default Modal;
