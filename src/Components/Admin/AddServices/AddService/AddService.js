import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Common/Sidebar/Sidebar';
import AddServiceForm from '../AddserviceForm/AddServiceForm';
import './AddService.css';

const AddService = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pl-5">
                    <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                        <h3>Add Services</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div  className='dashboard_right_container'>
                        <AddServiceForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;