import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { message } from "antd"
import { signInStart,signInSuccess,signInFailure } from "../../redux/auth/authSlice.js"
import { useDispatch, useSelector } from "react-redux"
import { OAuth } from "../../components/OAuth.jsx"



export const Login = () => {

  const [formData, setFormData] = useState({})

  const {loading, error} = useSelector((state)=> state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]:e.target.value }) 
  }

  const submitHandler = async (e) =>{
    e.preventDefault()
    // console.log(formData);


    try {
      dispatch(signInStart())

      const result  = await fetch("/api/auth/login",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      })
      const data = await result.json()
      console.log(data);


      // console.log(result);
      // console.log(data);

      if(data.success === true){
        message.success(data.message)
        navigate("/")
        dispatch(signInSuccess(data))
      }
      if(data.success === false){
        dispatch(signInFailure(data.message))
        message.error(data.message)
      }

      


    } catch (error) {
      dispatch(signInFailure(error))      
    }


    
  }
  return (
    <div className='p-3 w-96 mx-auto h-screen flex flex-col items-center justify-center gap-10'>
        <h1 className='text-3xl text-center w-full'>Login Form</h1>
        <form onSubmit={submitHandler} className='flex flex-col gap-4 w-full'>

          <input 
          type="email" 
          placeholder='Email'
          id='email' 
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange} 
          />
          <input 
          type="password" 
          placeholder='Password'
          id='password' 
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange} 
          />


          <button disabled={loading} className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-80'>
                {loading ? "Loading... " : "Login"}
          </button>
        <OAuth/>
        </form>


        <div className='w-full flex justify-between'>
          <p>do not have an account ?</p>
          <Link to="/register">
            <span className='text-blue-500'>
              Register Here
            </span>
          </Link>
        </div>


        <div>
          <Link to="/">
          <span className='text-blue-500'>
            Home Page
          </span>
          </Link>
        </div>

      </div>
  )
}
