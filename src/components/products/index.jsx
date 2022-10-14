import React from 'react'
import "./sytle.sass"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../../services';




const ProductsC = (props) => {

  // const [produtos, setProdutos] = useState([]);
  // function loadProdutos() {

  //   if(params.produtosCategoria.length >0 ){
  //     console.log(params.produtosCategoria)
  //     setProdutos(params.produtosCategoria.produtoCategoria)
  //   }else{
  //     api.get(`/produtos/todos`)
  //     .then(response => {
  //       setProdutos(response.data)
  //     })
      
  //   }
    
  // }

  // useEffect(() => {
  //   loadProdutos()
  // }, []);
  return (
    <div>
      <h2 className='produto' >{props.produtosCategoria.length} produtos encontrados</h2>
      <section className='sectionGrid1'>
        {props.produtosCategoria.map((p, i) => {
          return <article key={i}>
            <div >
              <Link to={`/product/${p.id}`}>
                <img
                  className="img_products1"
                  src="../images/joias2.png"
                  alt="product"
                />
              </Link>
            </div>
            <div className='infoP'>
              <p>{p.nome}</p>
              <p>R${p.preco}</p>
            </div>
          </article>
        })}
      </section>
    </div>
  )
}
export default ProductsC