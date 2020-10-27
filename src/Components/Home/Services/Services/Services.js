import React from 'react';
import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard';
import services1 from '../../../../creative-agency-resources/images/icons/service1.png';
import services2 from '../../../../creative-agency-resources/images/icons/service2.png';
import services3 from '../../../../creative-agency-resources/images/icons/service3.png';

const Services = () => {

    const services=[
        {
            title:'Web & Mobile Design',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services1
        },
        {
            title:'Graphic Design',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services2
        },
        {
            title:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services3
        }
    ]

    return (
        <section className='mt-5 pt-5 mb-5 pb-5'>
           <div className='container'>
                <h3 className='text-center'>Provide Awesome <span style={{color:'#7AB259'}}>Services</span></h3>
                <div className="row mt-5 mb-5">
                    {
                        services.map(service => <ServicesCard service={service}/>)
                    }
                </div>
           </div>
        </section>
    );
};

export default Services;