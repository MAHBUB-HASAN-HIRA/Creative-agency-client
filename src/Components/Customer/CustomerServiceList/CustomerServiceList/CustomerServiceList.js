import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import CustomerServiceListCard from '../CustomerServiceListCard/CustomerServiceListCard'
import { UserContext } from '../../../../App';
import loadSpiner from '../../../../creative-agency-resources/images/loadSpiner.gif';

const CustomerServiceList = () => {
    const {loggedInUser} = useContext(UserContext);
    const [serviceLists, setServiceLists] = useState([]);

const handleLoadServiceLists = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const token =  sessionStorage.getItem('token');
    if(userInfo){
        if(userInfo.email && token){
            fetch(`https://creative-agency-101.herokuapp.com/serviceList?email=${userInfo.email}`,{
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json',
                    "authorization" : `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => setServiceLists(data))
            .catch(error => console.log(error));
        }
    }
}



  useEffect(() => {
    const token =  sessionStorage.getItem('token');
    if(!token){
        setTimeout(() => {
            handleLoadServiceLists();
        }, 3000);
    }
    if(token){
        handleLoadServiceLists();
    }
  },[]);


    return (
        <section>
        <div className="row">
         <div className="col-md-2">
                 <Sidebar/>
             </div>
             <div className="col-md-10 pl-5">
                 <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                    <h3>Service List</h3>
                    <div className=' d-flex align-items-center justify-content-between'>
                        <h5>{loggedInUser.name}</h5>
                        <img className='user_photo for_large_div' src={loggedInUser.photo} alt=""/>
                    </div>
                 </div>
                 <div  className='dashboard_right_container'>
                    {
                        serviceLists.length > 0 ?
                        <div className="row">
                            { 
                                serviceLists.map(serviceList => <CustomerServiceListCard serviceList={serviceList}/>)
                            }
                        </div>
                        :
                        <div className='text-center w-100'>
                            <img className='loading_spin' src={loadSpiner} alt="loading"/>
                        </div>
                    }
                 </div>
             </div>
        </div>
     </section>
    );
};

export default CustomerServiceList;