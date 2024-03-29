import {useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'
function Login() {

    const [username , setusername] = useState('')
    const [password , setpassword] = useState('')


    /* This line utilizes the useContext hook to access the UserContext. It extracts the setUser function from the context object. This implies that UserContext probably contains a state variable or function called setUser, which is used to update user-related data within the application. */

    const {setUser} = useContext(Usercontext)
 
    /* This function handleSubmit is triggered when the form is submitted. It prevents the default form submission behavior using e.preventDefault(). Then, it calls the setUser function obtained from the context, passing an object containing username and password as its argument. This is a common pattern to handle form submissions in React. */

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'/>
      { "  "}
      <input type='text'  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
