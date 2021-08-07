import React from "react";
import InputField from "./InputField";

const RowFields = () => {
  return (
    <div className="row g-4">
      <InputField label="G. Banorte" />
      <InputField label="G. Scotia" />
      <InputField label="G. Bancomer" />
      <InputField label="Total" />
    </div>
  );
};

export default RowFields;
