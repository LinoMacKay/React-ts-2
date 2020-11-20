import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import AnotherUseFetch from "./services/AnotherUseFetch";

 function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = AnotherUseFetch(`products/${id}`);

  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <p>
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
export default Detail