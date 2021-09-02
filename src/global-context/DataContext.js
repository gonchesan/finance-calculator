import { useState, createContext } from "react";

import { DataField } from "../components/DataField";

export const DataContext = createContext({});

const DataContextProvider = (props) => {
  const [inputFields, setInputFields] = useState(DataField);
  const [total, setTotal] = useState({
    totalPropios: null,
    totalTarjetas: null,
    totalTerceros: null,
    totalEfectivo: null,
    totalDisponible: null,
    totalNeto: null,
  });
  const [editStatus, setEditStatus] = useState(false);
  const [inputToEdit, setInputToEdit] = useState({ id: null, name: "" });
  const [motos, setMotos] = useState([]);
  const [totalMotos, setTotalMotos] = useState([]);

  const deleteField = (index) => {
    const updatedFields = [...inputFields].filter(
      (field) => field.id !== index
    );
    setInputFields(updatedFields);
  };

  return (
    <DataContext.Provider
      value={{
        inputFields,
        setInputFields,
        total,
        setTotal,
        deleteField,
        editStatus,
        setEditStatus,
        inputToEdit,
        setInputToEdit,
        motos,
        setMotos,
        totalMotos,
        setTotalMotos,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
