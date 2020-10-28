import React from 'react';
import './AdminServiceListTable.css';

const AdminServiceListTable = ({userInfo}) => {
   
    const handleChange = (e) => {
        console.log('ID:', e.target.name);
        console.log('Status:',e.target.value);
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
    const word = userInfo.description.split(' ');
    return (
            <tbody className='table_body'>
                <tr>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.email}</td>
                    <td>{userInfo.title}</td>
                    <td>{`${word[0]} ${word[1]} ${word[2]}`}<br/>{word[5] && `${word[3]} ${word[4]} ${word[5]}`}</td>
                    <td>
                        <select  className={customColor} id="select1" onChange={handleChange} name={userInfo.status}>
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