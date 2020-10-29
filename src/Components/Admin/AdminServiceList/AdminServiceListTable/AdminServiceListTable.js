import React from 'react';
import './AdminServiceListTable.css';

const AdminServiceListTable = ({userInfo, handleLoadAfterUpdateStatus}) => {

    const handleChange = (e) => {
        const id = e.target.name;
        const status = e.target.value;

        fetch(`https://creative-agency-101.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status}),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Status Updated Successfully');
                    handleLoadAfterUpdateStatus();
                }
            });
    }
    

    let customColor = '';
    if(userInfo.status === 'Pending'){
        customColor = 'Pending'
    }
    else if(userInfo.status === 'Done'){
            customColor = 'Done'
    }
    else if(userInfo.status === 'On going'){
        customColor = 'ongoing';
    };
    const word = userInfo.message.split(' ');
    return (
        <tbody className='table_body'>
            <tr>
                <td>{userInfo.name}</td>
                <td>{userInfo.orderEmail}</td>
                <td>{userInfo.service}</td>
                <td>{`${word[0]} ${word[1]} ${word[2]}`}<br/>{word[5] && `${word[3]} ${word[4]} ${word[5]}`}</td>
                <td>
                    <select  className={customColor} id="select1" onChange={handleChange} name={userInfo._id}>
                        <option  value={userInfo.status} selected="selected">{userInfo.status}</option>
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