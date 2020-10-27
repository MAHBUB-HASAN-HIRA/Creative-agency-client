import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import customer1 from '../../../../creative-agency-resources/images/customer-1.png';
import customer2 from '../../../../creative-agency-resources/images/customer-2.png';
import customer3 from '../../../../creative-agency-resources/images/customer-3.png';
import Carousel from 'react-elastic-carousel';

const Review = () => {

    const reviewerInfo = [
        {
            name:'Nash Patik',
            title:'CEO Manpol',
            img:customer1,
            review_text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae ipsum doloribus delectus voluptas. Reiciendis voluptatibus ipsam dolore quaerat officia.'
        },
        {
            name:'Nash Patik',
            title:'CEO Manpol',
            img:customer2,
            review_text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae ipsum doloribus delectus voluptas. Reiciendis voluptatibus ipsam dolore quaerat officia.'
        },
        {
            name:'Nash Patik',
            title:'CEO Manpol',
            img:customer3,
            review_text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae ipsum doloribus delectus voluptas. Reiciendis voluptatibus ipsam dolore quaerat officia.'
        }

    ]
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
                <Carousel enableAutoPlay enableSwipe={true} 
                autoPlaySpeed={2000} breakPoints={breakPoints}
            >
                
                    { 
                        reviewerInfo.map(review => <ReviewCard review={review}/>)
                    }
                
                </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Review;