import * as React from 'react';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import avatar from './img/produto.png'


import "./styled.sass"

const CarouselHome = () => (
  <Carousel>
    {/* Change above line to <> and it work, maybe some issues in carousel */}
    <Paper>
        <img src={avatar} alt="sa" ></img>
      
      
    </Paper>
    <Paper>
        <img src={avatar} alt="sa" ></img>
      
      
    </Paper>
    <Paper>
        <img src={avatar} alt="sa" ></img>
      
      
    </Paper>
  </Carousel>
);

export default CarouselHome;