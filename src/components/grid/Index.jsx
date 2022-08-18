import React from 'react'
import "./gridHome.sass"

const Index = () => {
  return (
    <section className='sectionGrid'>
        <article className='articleGrid'>
          <div className="img_cards">
            <img
              className="img_products"
              src="../images/joias2.png"
              alt="product"
            />
          </div>
          <div className="price_cards">
            <p>Joia X</p>
            <p>10 x de xxx,xx</p>
          </div>
        </article>
      </section>
  )
}

export default Index