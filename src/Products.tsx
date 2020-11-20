import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from './services/useFetch';



function Products(){
    const { data: products, loading, error } = useFetch(
        "products?category=shoes"
      );
      const { category } = useParams();

      const [size, setSize] = useState("");
    
    
      function renderProduct(p:any) {
        return (
          <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
          </div>
        );
      }
      
      const filteredProducts = size
      ? products.filter((p: { skus: any[]; }) => p.skus.find((s) => s.size === parseInt(size)))
      : products;
    
      console.log(products)
      return (
        <div className="Products">
          <main>
              <section id="filters">
                <label htmlFor="size">Filter by Size:</label>{" "}
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="">All sizes</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                {size && <h2>Found {filteredProducts.length} items</h2>}
              </section>
              <section id="products">{filteredProducts.map(renderProduct)}</section>
            </main>
        </div>
      );
}
export default Products