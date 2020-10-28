import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Common/Sidebar/Sidebar';
import './Order.css';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section>
           <div className="row">
            <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pl-5">
                    <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                        <h3>Order</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div  className='dashboard_right_container'>
                       <OrderForm/>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Order;