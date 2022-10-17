import React from "react";
import Resume2 from "./resumo2";
import "./style.sass";

const CartC = () => {
  const items = [
    {
      id: 1,
      img: "./images/Anel.jpg",
      name: "Anel",
      value: "200",
      description: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.",
    },
    {
      id: 2,
      img: "./images/Brinco.jpg",
      name: "Brinco",
      value: "200",
      description: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.",
    },
    {
      id: 3,
      img: "./images/Bracelete.jpg",
      name: "Bracelete",
      value: "200",
      description: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.",
    },
  ];
  return (
    <section className="checkoutBoX">
      <div className="carrinhoBox">
        <h1>Carrinho</h1>
        <div className="container-items">
          {items.map(({ id, img, name, value, description, size }) => {
            return (
              <div key={id} className="product-box">
                <figure className="figure-product">
                  <img
                    className="img-product"
                    src={img}
                    alt=""
                  />
                </figure>
                <div className="description-product">
                  <p className="product-name">{name}</p>
                  <p className="product-price">R$ {value}</p>
                  <p className="product-description">Descrição: {description}</p>
                </div>
                <div className="buttons-product">
                  <button className="remove-button">Remover item</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="checkBox2">
        <Resume2 />
      </div>
    </section>
  );
};

export default CartC;
