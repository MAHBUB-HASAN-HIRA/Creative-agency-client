import React from 'react';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import AdminServiceListTable from '../AdminServiceListTable/AdminServiceListTable'

const AdminServiceList = () => {

    const users=[
        {   name:'Mahbub',
            status:'Pending',
            email:'mahbub@gmail.com',
            title:'Web & Mobile Design',
            description:'Dolor sit amet consectetur, adipisicing elit. Lorem ipsum  Provident, eos.',
            img:'',
        },
        {   name:'Hasan',
            status:'Done',
            email:'hasan@gmail.com',
            title:'Graphic Design',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eos.',
            img:''
        },
        {   name:'Hira',
            email:'hira@gmail.com',
            status:'On going',
            title:'Web Development',
            description:'Adipisicing elit. Lorem ipsum dolor sit amet consectetur, Provident, eos.',
            img:''
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
                        <h3>Services List</h3>
                        <h5>Mahbub Hasan</h5>
                    </div>
                    <div  className='dashboard_right_container pt-5'>
                    <div className='table_container'>
                        <div className="table-responsive">
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
                                    users.map( userInfo => <AdminServiceListTable userInfo={userInfo}/>)
                                }   
                                </table> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;