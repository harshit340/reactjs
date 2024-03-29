import React from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {

    const {user} = React.useContext(Usercontext)
    
    if(!user) return <div>please login</div>

    return <div> Welcome {user.username} </div>
}

export default Profile
