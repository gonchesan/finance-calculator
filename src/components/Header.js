import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString();

  return (
    <div className="card-header">
      <h4 className="d-inline">{date}</h4>
      <button className="float-end btn btn-primary">Buscar fecha</button>
    </div>
  );
};

export default Header;
