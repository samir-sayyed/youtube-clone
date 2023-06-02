import React from "react";

const ButtonItem = ({ name }) => {
  return (
    <div className="px-2 py-1 bg-gray-100 m-2 rounded-md">
      <h1>{name}</h1>
    </div>
  );
};

export default ButtonItem;
