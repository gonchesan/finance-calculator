import Modal from "./components/Modal";
import RowFields from "./components/RowFields";

function App() {
  return (
    <div className="container justify-content-center align-content-center">
      <div className="row">
        <div className="card px-0">
          <div className="card-header">
            <h4 className="d-inline">06/08/2021</h4>
            <button className="float-end btn btn-primary">Buscar fecha</button>
          </div>

          <div className="card-body">
            <h5 className="d-inline">Propios</h5>
            <button
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              +
            </button>
            <Modal />
            <RowFields />
            <RowFields />
            <hr />
          </div>

          {/*//! Agregar/quitar campo--Editar campo. Sumar()
                //! seccion moto especial: seleccionar(agregar+monto+detalle?)  */}

          <div className="card-footer">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-primary me-md-2 mt-2">
                Guardar
              </button>
              <button className="btn btn-primary mt-2">Calcular</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
