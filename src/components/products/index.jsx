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
      <h2 className='produto' >X produtos encontrados</h2>
      <section className='sectionGrid1'>
        {props.produtosCategoria.map((p, i) => {
          return <article >
            <div >
              <Link to={`/product/${p.id}/produtos`}>
                <img
                  className="img_products1"
                  src="../images/joias2.png"
                  alt="product"
                />
              </Link>
            </div>
            <div className='infoP'>
              <p>{p.nome}</p>
              <p>{p.descricao}</p>
            </div>
            {/* <div className='linha2'>
              <Link to={"/product"}>
                <img
                  className="img_products1"
                  src="../images/joias2.png"
                  alt="product"
                />
              </Link>
            </div> */}
            {/* <div className='infoP'>
              <p>{p.nome}</p>
              <p>{p.descricao}</p>
            </div>
            <div className='linha3'>
              <Link to={"/product"}>
                <img
                  className="img_products1"
                  src="../images/joias2.png"
                  alt="product"
                />
              </Link>
            </div>
            <div className='infoP'>
              <p>{p.nome}</p>
              <p>{p.descricao}</p>
            </div> */}
          </article>
        })}
      </section>
    </div>
  )
}
export default ProductsC