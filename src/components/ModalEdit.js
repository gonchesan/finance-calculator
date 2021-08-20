import React, { useContext } from "react";

import { DataContext } from "../global-context/DataContext";

const ModalEdit = () => {
  const { inputToEdit, setInputToEdit, inputFields, setInputFields } =
    useContext(DataContext);

  const handleInputToEdit = (event) => {
    event.preventDefault();
    setInputToEdit({ ...inputToEdit, name: event.target.value });
  };

  const submitEdit = () => {
    const values = [...inputFields];
    const newIndex = parseInt(inputToEdit.id - 1);
    values[newIndex].name = inputToEdit.name;
    setInputFields(values);
    setInputToEdit({ id: null, name: "" });
  };

  return (
    <div
      className="modal fade"
      id="ModalEdit"
      tabIndex="-1"
      aria-labelledby="ModalEdit"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalEdit">
              Editar entrada
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
                <label htmlFor="entry-name-editing" className="col-form-label">
                  Nombre de Entrada:
                </label>
                <input
                  type="text"
                  value={inputToEdit.name}
                  className="form-control"
                  id="entry-name-editing"
                  onChange={handleInputToEdit}
                />
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
              disabled={inputToEdit.length === 0}
              onClick={() => submitEdit()}
            >
              Editar entrada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
