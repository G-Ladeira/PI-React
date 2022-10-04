import React from 'react';


import Header from "../../components/header"
import Footer from '../../components/footer'
import CarouselHome from '../../components/home/carrosel';
import GridHome from '../../components/home/grid';
import SearchHome from '../../components/home/Search/styled';
import ListHome from '../../components/home/Items/index';


import "./style.sass"






export const Home = () => {
    return (
        <>
        <aside>
            <Header/>
            <div className='CarouselH'>
            <CarouselHome />
            </div>
            <ListHome />
            <SearchHome />
            <GridHome />

            <div className='FooterH'>
            <Footer/>
            </div>
            
           

        
        </aside>
        </>
    )

}