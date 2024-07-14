import {useDispatch, useSelector} from "react-redux"

import { logOut } from "../redux/auth/authSlice.js"
import { message } from "antd"

export const Profile = () => {

  const {currentUser} = useSelector((state)=> state.user)
  const dispatch = useDispatch()

  const logout = async () =>{

    try {
      const res = await fetch("/api/auth/logout",{
        method : "GET"
      })

      const data = await res.json()

      if(data.success === true){
        message.success(data.message)
        dispatch(logOut())
      }

      



    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center p-20">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={currentUser.rest.profilePicture}  alt="awd" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {currentUser.rest.name}</h5>
        </a>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Email : {currentUser.rest.email}</h5>
        </a>
        <button onClick={logout} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Logout
        </button>
      </div>
    </div>
    </div>
  )
}
