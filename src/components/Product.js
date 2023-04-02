import React from "react";
import { useState } from "react";
import Item from "./Item";

const Product = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="container">
      <h3
        style={{
          textAlign: "center",
          marginTop: 50,
          textDecoration: "underline",
        }}
      >
        Products
      </h3>
      {show ? <Item show={show} setshow={setshow} /> : null}
      {show === false ? (
        <button onClick={() => setshow(!show)}>Toggle</button>
      ) : null}
    </div>
  );
};

export default Product;
