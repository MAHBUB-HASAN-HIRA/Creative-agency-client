import React, { useContext, useEffect } from 'react';
import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard';
import loadSpiner from '../../../../creative-agency-resources/images/loadSpiner.gif';
import { UserContext } from '../../../../App';

const Services = () => {
    const  {services, setServices} = useContext(UserContext);

    useEffect(() => {
        fetch('https://creative-agency-101.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
          if(data){
            setServices(data);
          }});
    },[]);

    return (
        <section className='mt-5 pt-5 mb-5 pb-5'>
           <div className='container'>
                <h1 className='text-center'>Provide Awesome <span style={{color:'#7AB259'}}>Services</span></h1>
                <div className="row mt-5 mb-5">
                   {
                       services.length > 0 
                        ?
                        services.slice(0,6).map(service => <ServicesCard key={service._id} service={service}/>)
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

export default Services;