import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import services1 from '../../../../creative-agency-resources/images/icons/service1.png';
import services2 from '../../../../creative-agency-resources/images/icons/service2.png';
import services3 from '../../../../creative-agency-resources/images/icons/service3.png';
import CustomerServiceListCard from '../CustomerServiceListCard/CustomerServiceListCard'

const CustomerServiceList = () => {

    const servicesLists = [
        {
            title:'Web & Mobile Design',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services1,
            status:"Pending"
        },
        {
            title:'Graphic Design',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services2,
            status:"Done"
        },
        {
            title:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services3,
            status:"On going"
        },
        {
            title:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services3,
            status:"Done"
        },
        {
            title:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:services3,
            status:"Pending"
        }
    ]

    return (
        <section>
        <div className="row">
         <div className="col-md-2">
                 <Sidebar/>
             </div>
             <div className="col-md-10 pl-5">
                 <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                     <h3>Service List</h3>
                     <h5>Mahbub Hasan</h5>
                 </div>
                 <div  className='dashboard_right_container'>
                     <div className="row">
                        { 
                            servicesLists.map(serviceList => <CustomerServiceListCard serviceList={serviceList}/>)
                        }
                     </div>
                 </div>
             </div>
        </div>
     </section>
    );
};

export default CustomerServiceList;