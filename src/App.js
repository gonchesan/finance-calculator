import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalEdit from "./components/ModalEdit";
import RowFields from "./components/RowFields";

import { DataContext } from "./contexts/DataContext";

function App() {
  const { fields, setEditStatus } = useContext(DataContext);

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
            <RowFields fields={fields} />
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
