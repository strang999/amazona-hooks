import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function HomeScreen(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product__image"
                src={product.image}
                alt="product"
              />
            </Link>

            <div className="product__name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product__brand">{product.brand}</div>
            <div className="product__price">{product.price}</div>
            <div className="product__rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
