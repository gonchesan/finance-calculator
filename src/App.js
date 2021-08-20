import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalEdit from "./components/ModalEdit";
import RowFields from "./components/RowFields";

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
          </div>

          {/*//! Agregar/quitar campo--Editar campo. Sumar()
                //! seccion moto especial: seleccionar(agregar+monto+detalle?)  */}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
