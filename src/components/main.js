import React from "react";
import Product from "./products";
import "../assets/Styles/main.css";

const Main = () => {
  const products = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 12",
      description: "High-end smartphone with A14 Bionic chip",
      price: 2500000,
      image:
        "https://www.clevercel.co/cdn/shop/products/apple-iphone-12-r1_1_477x_d80e22cc-69ec-4ec0-88a2-f629df2d9271_477x.jpg?v=1665798795",
    },
    {
      id: 2,
      brand: "Apple",
      model: "iPhone SE",
      description: "Compact iPhone with powerful features",
      price: 3500000,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoYINc3WyQ56BKjebzYif-cvIZVurBBNdMSpthpbbFVZhiYd6oVA2zEYRmOBVbpezLszTlOCky-uOUtfIJtxHz8y55Z3Itdg",
    },
    {
      id: 3,
      brand: "Apple",
      model: "iPhone 13 Pro",
      description: "Pro-level iPhone with impressive camera capabilities",
      price: 4500000,
      image:
        "https://www.clevercel.co/cdn/shop/products/apple-iphone-13-pro-01_486x.jpg?v=1667224355",
    },
    {
      id: 4,
      brand: "Apple",
      model: "iPhone 13 Pro Max",
      description: "Pro-level iPhone with impressive camera capabilities",
      price: 5500000,
      image:
        "https://www.clevercel.co/cdn/shop/products/apple-iphone-13-pro-max-01_478x.jpg?v=1663771117",
    },
  ];
  return (
    <section className="container">
      <article className="section-1">
        <h1>Celulares Movistar</h1>
        <p>
          Compra tu celular libre para disfrutar lo mejor de la tecnología con
          Movistar y el Smartphone de tus sueños.
        </p>
      </article>
      <article className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            brand={product.brand}
            model={product.model}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </article>
    </section>
  );
};

export default Main;
