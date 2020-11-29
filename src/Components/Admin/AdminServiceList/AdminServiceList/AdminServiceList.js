import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import AdminServiceListTable from '../AdminServiceListTable/AdminServiceListTable';
import loadSpiner from '../../../../creative-agency-resources/images/loadSpiner.gif';
import { UserContext } from '../../../../App';

const AdminServiceList = () => {
    const {loggedInUser, isAdmin} = useContext(UserContext);
    const [serviceLists, setServiceLists] = useState([]);
   
const handleLoadAfterUpdateStatus = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if(userInfo.email){
        fetch(`https://creative-agency-101.herokuapp.com/serviceList?email=${userInfo.email}`,{
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json'
            ,"authorization" : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setServiceLists(data))
        .catch(error => console.log(error));
    }
}
    useEffect(() => {
        handleLoadAfterUpdateStatus();
    },[]);
    
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pl-5">
                    <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                        <h3>Services List</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div  className='dashboard_right_container pt-5'>
                    <div className='table_container'>
                        <div className="table-responsive">
                        {
                            serviceLists.length > 0 ?
                                <table className="table table-borderless">
                                    <thead className=' table_header'>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                        
                                        {
                                            serviceLists.map( userInfo => <AdminServiceListTable handleLoadAfterUpdateStatus={handleLoadAfterUpdateStatus} userInfo={userInfo}/>)
                                        }
                                    
                                </table> 
                                :
                                <div className='text-center mt-5 w-100'>
                                    <img className='mt-5 loading_spin' src={loadSpiner} alt="loading"/>
                                </div>
                        }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;