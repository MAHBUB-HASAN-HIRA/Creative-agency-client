import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
export const AdminContext = createContext();


const CheckAdmin = (props) => {
    const [loggedInUser,] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
       if(userInfo){
    const email = userInfo.email;
        fetch(`https://creative-agency-101.herokuapp.com/isAdmin?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data){
              setIsAdmin(true);
            }
          })
        .catch(error => console.log(error));
       }
    
    }, [loggedInUser.email])
    return (
       <AdminContext.Provider value={isAdmin}>
          { props.children}
       </AdminContext.Provider>
    );
};

export default CheckAdmin;