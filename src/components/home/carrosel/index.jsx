import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



import "./styled.sass"

const CarouselHome = () => (
  <div className="fotosC">
    <div className="carroselAlingn">
      <Carousel >
        <div >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5Dzt5Z0sIKuqjoy5hc0hLKoPwToXl3QediBL-k9dNk4pATiFHVnz8GZfBJ_wvkzkNZg&usqp=CAU" alt='logo' />

        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/alguns-aneis-de-casamento-em-plano-de-fundo-texturizado_185193-70313.jpg?w=2000" alt='logo' />

        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/alguns-aneis-de-casamento-em-plano-de-fundo-texturizado_185193-70314.jpg?w=2000" alt='logo' />

        </div>
      </Carousel>
    </div>
  </div>
);

export default CarouselHome;