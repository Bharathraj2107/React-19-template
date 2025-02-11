import React ,{ createContext,useEffect,useState }from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// context 
export const UserContext = createContext()
//context provider component 
function UserProvider(props) {
    const [users,setUsers]=useState([])
    const URL="https://mern-crud-rest-api.onrender.com"

    const readData=async ()=>{
        await axios.get(`${URL}/api/user/all`)
        .then(res=>{
            setUsers(res.data.users)
        }).catch(err=>toast.error(err.response.data.msg))
    }
    useEffect(()=>{
        readData()
    },[])
  return (
    <UserContext.Provider value={{users,setUsers}}>
        {
            props.children
        }
    </UserContext.Provider>
  )
}

export default UserProvider
