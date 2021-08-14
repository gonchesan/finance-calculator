import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString(); // 8/19/2020

  return (
    <div className="card-header">
      <h4 className="d-inline">{date}</h4>
      <button className="float-end btn btn-primary">Buscar fecha</button>
    </div>
  );
};

export default Header;
