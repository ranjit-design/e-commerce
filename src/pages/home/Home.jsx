import React from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { categoy } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../../components/Product/Product";
import { useState } from "react";

function Home() {
  let [cate, setcate] = useState(dummydata);
  function filterProducts(category) {
    let updatedata = dummydata.filter((item) => item.category === category);
    setcate(updatedata);
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {categoy.slice(0, 5).map((item) => (
          <div
            className="category-card"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 6).filter((item) => item).map((item) => (             // filter out undefined
        
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
