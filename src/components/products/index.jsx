import React from 'react'
import "./sytle.sass"
import { useState, useEffect } from 'react';

const url = "https://mocki.io/v1/c12e210f-6d15-46ab-b5ae-9db8b138ea2b"

const ProductsC = () => {

    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setRepositories(data))
    
    }, []);
    
    
      return (
    
        <div>
        <h2 className='produto' >X produtos encontrados</h2>
    
        <section className='sectionGrid1'>
            
            
    
    {repositories.map((p, i) => {
    
    return <article >
      <div >
        <img
          className="img_products1"
          src="../images/joias2.png"
          alt="product"
        />
      </div>
      <div>
        <p>{p.nome}</p>
        <p>{p.descricao}</p>
      </div>


      <div  className='linha2'>
        <img
          className="img_products1"
          src="../images/joias2.png"
          alt="product"
        />
      </div>
      <div>
        <p>{p.nome}</p>
        <p>{p.descricao}</p>
      </div>

      <div  className='linha3'>
        <img
          className="img_products1"
          src="../images/joias2.png"
          alt="product"
        />
      </div>
      <div>
        <p>{p.nome}</p>
        <p>{p.descricao}</p>
      </div>

      

    </article>
    
    
    })}
    
    
    
    
          </section>
    
          </div>
      )}
    
    export default ProductsC









