
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {


  return (
    <UsercontextProvider>
     <h1>context api</h1>
     <Login/>
     <Profile/>
    </UsercontextProvider>
  )
}

export default App
