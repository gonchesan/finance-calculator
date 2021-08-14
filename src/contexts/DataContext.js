import { useState, createContext } from "react";

export const DataContext = createContext({});

const DataContextProvider = (props) => {
  const [inputFields, setInputFields] = useState([
    { name: "Campo 1", valueNumber: 123.56 },
    { name: "Campo 2", valueNumber: -72 },
  ]);
  const [total, setTotal] = useState();
  const [editStatus, setEditStatus] = useState(false);
  const [inputToEdit, setInputToEdit] = useState("");
  const [index, setIndex] = useState();

  const deleteField = (nameInput) => {
    const updatedFields = [...inputFields].filter(
      (field) => field.name !== nameInput
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
        index,
        setIndex,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
