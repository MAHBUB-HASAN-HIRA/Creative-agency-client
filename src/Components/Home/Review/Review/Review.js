import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Carousel from 'react-elastic-carousel';
import loadSpiner from '../../../../creative-agency-resources/images/loadSpiner.gif';

const Review = () => {
    const [reviewerInfo, setReviewerInfo] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-101.herokuapp.com/getReview')
        .then(res => res.json())
        .then(data => {
          if(data){
            setReviewerInfo(data);
          }});
    },[])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 1, itemsToScroll: 1 }
      ];

    return (
        <section>
            <div className="container">
                <h1 className='text-center'>Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
                <div className="row mt-5 mb-5">
                        
                    { reviewerInfo.length > 0 ?

                        <Carousel enableAutoPlay enableSwipe={true} 
                        autoPlaySpeed={2000} breakPoints={breakPoints}
                        > 
                            {
                                reviewerInfo.map(review => <ReviewCard key={review._id} review={review}/>)
                            }
                            
                        </Carousel>
                        :
                        <div className='text-center w-100'>
                            <img className='loading_spin' src={loadSpiner} alt="loading"/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;