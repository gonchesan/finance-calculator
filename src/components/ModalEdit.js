import React, { useContext } from "react";

import { DataContext } from "../contexts/DataContext";

const ModalEdit = () => {
  const {
    inputToEdit,
    setInputToEdit,
    index,
    setIndex,
    inputFields,
    setInputFields,
  } = useContext(DataContext);

  const handleInputToEdit = (event) => {
    event.preventDefault();
    setInputToEdit(event.target.value);
  };

  const submitEdit = () => {
    //Todo todos los campos, el id que fue clickeado, el nombre y setear el nuevo nombre.
    const values = [...inputFields];
    values[index].name = inputToEdit;
    setInputFields(values);
    setIndex();
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
            <form onChange={(event) => event.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="entry-name-editing" className="col-form-label">
                  Nombre de Entrada:
                </label>
                <input
                  type="text"
                  value={inputToEdit}
                  className="form-control"
                  id="entry-name-editing"
                  onChange={handleInputToEdit}
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
              disabled={inputToEdit.length === 0}
              onClick={() => submitEdit(inputToEdit)}
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
