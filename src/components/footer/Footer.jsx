import React from 'react'

import './footer.sass'

const Footer = () => {
  return (
    <footer>
        <div className='main'>
            <div className="content footer-links">
                <div className="footer-company">
                    <h4>Sobre nós</h4>

                </div>

                <div className="footer-social">
                    <h4>Redes sociais</h4>
                    <div className="social-icons">
                        <img src="images/instagram.png" alt="Instagram" />
                        <img src="images/facebook.png" alt="Facebook" />
                    </div>
                </div>
                <div className="footer-contact">
                    <h4>Contact </h4>
                    <h6>+55 11 988776655</h6>
                    <h6>wendytaylor.com.br</h6>
                    <h6>Nome da Rua, são paulo - SP</h6>
                </div>
            </div>
        </div>
        <div className="last">wendytaylor 2022 - São paulo -Brasil</div>
    </footer>
  )
}

export default Footer