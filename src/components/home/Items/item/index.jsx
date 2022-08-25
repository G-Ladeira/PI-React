import React from 'react'



import './styled.sass'






const ItemsHome = (props) => {
    
    return (
        
        
        <section className='secHome'>  
           
            
            <article className='artHome'>

                <img className='img-article' src={props.repository.avatar_url} alt="eu" />
                



                <p>{props.repository.login}</p>

            </article>

        </section>


    )
}

export default ItemsHome