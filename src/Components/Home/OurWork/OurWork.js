import React from 'react';
import './OurWork.css';
import Carousel from 'react-elastic-carousel';
import carousel1 from '../../../creative-agency-resources/images/carousel-1.png';
import carousel2 from '../../../creative-agency-resources/images/carousel-2.png';
import carousel3 from '../../../creative-agency-resources/images/carousel-3.png';
import carousel4 from '../../../creative-agency-resources/images/carousel-4.png';
import carousel5 from '../../../creative-agency-resources/images/carousel-5.png';


const OurWork = () => {
    const carousels = [carousel1, carousel2, carousel3, carousel4, carousel5]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 1 }
      ];

    return (
        <section className='work_container mb-5'>
            <h1 className='text-center text-white'>Here are some of <span style={{color:'#7AB259'}}>our works</span></h1>
            <div className=' row pt-5 mt-5'>
            <Carousel enableAutoPlay enableSwipe={true} 
            autoPlaySpeed={2000} breakPoints={breakPoints}
            >

                {
                    carousels.map(carousel =>
                       <div className="col-md-12">
                            <div className="card">
                                <img className="carousel_img" src={carousel} alt=""/>
                            </div>
                       </div>
                    )
                }

                </Carousel>
            </div>
        </section>
    );
};

export default OurWork;