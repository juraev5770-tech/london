import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import axios from "axios"
import { Link } from 'react-router-dom'



const Navbar = () => {

  const [manzil, setManzil] = useState("http://london.loc/backend/navbar")
  const [navbar, setNavbar] = useState([])

  useEffect(() => {
    axios.get(manzil)
      .then(info => setNavbar(info.data))
  }, [])

  console.log(navbar);
  

  return (
    <div className='bg-[#0C0C0C] py-[25px] flex justify-around items-center'>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className='flex justify-center items-center gap-10 flex-wrap'>
        {
          navbar && navbar.map((value, index) => {
            return (
              <Link className='text-white' to={value.url}>{value.title}</Link>
            )
          })
        }

        <button className='border-2 border-white text-white font medium py-2 px-8 rounded-full bg-transparent hover:bg-white hover:text-red-600 transition-colors duration-300'>Log In</button>
      </div>

    </div>
  )
}

export default Navbar
