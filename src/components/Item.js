import React, { useState } from "react";

function Item({ name, category }) {
  const [click,change] = useState(false)
  function useClick(){
    change((click) => !click)
  }
  return (
    <li className={click ?"in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={useClick}>{click? "Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
