import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalEdit from "./components/ModalEdit";
import ModalMotos from "./components/ModalMotos";
import RowFields from "./components/RowFields";
import RowSpecial from "./components/RowSpecial";
import InputField from "./components/InputField";

import { DataContext } from "./global-context/DataContext";

function App() {
  const { inputFields, setEditStatus, setInputFields, setInputToEdit, total } =
    useContext(DataContext);

  const propiosFields = inputFields.filter(
    (inputs) => inputs.row === "propios"
  );
  const tarjetasFields = inputFields.filter(
    (inputs) => inputs.row === "tarjetas"
  );
  const tercerosFields = inputFields.filter(
    (inputs) => inputs.row === "terceros"
  );
  const efectivoFields = inputFields.filter(
    (inputs) => inputs.row === "efectivo"
  );
  const otrosFields = inputFields.filter((inputs) => inputs.row === "otros");
  const llaneroFields = inputFields.filter(
    (inputs) => inputs.row === "llanero"
  );

  const handleChangeInput = (event) => {
    const values = [...inputFields];
    const newIndex = event.target.id - 1;
    values[newIndex][event.target.name] = parseFloat(event.target.value);
    setInputFields(values);
  };

  const getIndex = (id) => {
    const values = [...inputFields];
    const newIndex = parseInt(id - 1);
    setInputToEdit({ id, name: values[newIndex].name });
  };

  return (
    <div className="container justify-content-center align-content-center">
      <div className="row">
        <div className="card px-0">
          <Header />
          <div className="card-body">
            <h5 className="d-inline">Propios</h5>
            <button
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setEditStatus(false)}
            >
              +
            </button>
            <Modal />
            <ModalEdit />
            <ModalMotos />
            <RowFields
              getIndex={getIndex}
              handleChangeInput={handleChangeInput}
              inputFields={propiosFields}
              total={total.totalPropios}
            />
            <hr />
            <h5 className="d-inline">Tarjetas</h5>
            <RowFields
              getIndex={getIndex}
              handleChangeInput={handleChangeInput}
              inputFields={tarjetasFields}
              total={total.totalTarjetas}
            />
            <hr />
            <h5 className="d-inline">Terceros</h5>
            <RowFields
              getIndex={getIndex}
              handleChangeInput={handleChangeInput}
              inputFields={tercerosFields}
              total={total.totalTerceros}
            />
            <hr />
            <h5 className="d-inline">Otros</h5>
            <RowFields
              getIndex={getIndex}
              handleChangeInput={handleChangeInput}
              inputFields={efectivoFields}
              total={total.totalEfectivo}
            />
            <div className="row g-4">
              {otrosFields.map((field) => (
                <InputField
                  id={field.id}
                  key={field.id}
                  inputValue={field.valueNumber}
                  inputName={field.name}
                  handleInput={(event) => handleChangeInput(event)}
                  getIndex={() => getIndex(field.id)}
                />
              ))}
              <div className="col-md">
                <div className="form-floating">
                  <input
                    value={total.totalDisponible || 0}
                    className="form-control"
                    disabled
                  />
                  <label>Total disponible</label>
                </div>
              </div>
            </div>

            <RowSpecial
              getIndex={getIndex}
              handleChangeInput={handleChangeInput}
              inputFields={llaneroFields}
              total={total.totalNeto}
            />

            <hr />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
