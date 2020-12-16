import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';


const Home = ({ myList, trends, originals }) => {

  return (
    <>
     
      <Search />
      {myList !== undefined && myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList !== undefined &&
              myList.map(item => 
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              )}
          </Carousel>
        </Categories>)
      }

      <Categories title="Tendencias">
        <Carousel>
          {trends !== undefined &&
            	trends.map(item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals !== undefined &&
            originals.map(item => 
              <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      
    </>
  )
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
