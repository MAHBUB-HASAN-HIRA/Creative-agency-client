import React, { useState } from 'react';
import './AdminServiceListTable.css';

const AdminServiceListTable = ({userInfo, loggedInUser}) => {
    const [currentStatus, setCurrentStatus] = useState(userInfo.status);

    const handleChange = (e) => {
        const id = e.target.name;
        const status = e.target.value;
        setCurrentStatus(status);

        fetch(`https://creative-agency-101.herokuapp.com/updateStatus?email=${loggedInUser.email}`, {
            method: 'PATCH',
             headers:{
                'Content-Type' : 'application/json',
                "authorization" : `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({status, id}),
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Order Status Updated Successfully');
            }
        });
    }
    

    let customColor = '';
    if(currentStatus === 'Pending'){
        customColor = 'Pending'
    }
    else if(currentStatus === 'Done'){
            customColor = 'Done'
    }
    else if(currentStatus === 'On going'){
        customColor = 'ongoing';
    };

    return (
        <tbody className='table_body'>
            <tr>
                <td>{userInfo.name}</td>
                <td>{userInfo.orderEmail}</td>
                <td>{userInfo.service}</td>
                <td>{userInfo.message.slice(0, 20)}...</td>
                <td>
                    <select  className={customColor} id="select1" onChange={handleChange} name={userInfo._id}>
                        <option  value={currentStatus} selected="selected">{userInfo.status}</option>
                        <option className='Pending'  value="Pending" >Pending</option>
                        <option className='Done' value="Done">Done</option>
                        <option className='ongoing' value="On going">On Going</option>
                    </select>
                </td>
            </tr>
        </tbody>
                
    );
};

export default AdminServiceListTable;