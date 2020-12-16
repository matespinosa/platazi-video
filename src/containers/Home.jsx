import React, { Fragment } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API)

  return initialState.length === 0 ? <h1>loading...</h1> : (
    <>
     
      <Search />
      {initialState.mylist !== undefined && initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist !== undefined &&
              initialState.mylist.map(item => 
                <CarouselItem key={item.id} {...item}/>
              )}
          </Carousel>
        </Categories>)
      }

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends !== undefined &&
            	initialState.trends.map(item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals !== undefined &&
            initialState.originals.map(item => 
              <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      
    </>
  )
};

export default Home;
