import React from 'react'
import Usercontext from './Usercontext'
// eslint-disable-next-line react/prop-types
const UsercontextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return(

    <Usercontext.Provider value={{user,setUser}}>
    {children}
    </Usercontext.Provider>
 )
};

export default UsercontextProvider;
