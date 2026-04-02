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
  <div className="bg-[#0C0C0C] py-[25px] w-full border-b border-white/5">
    {/* KONTEYNER QO'SHILDI: Bu elementlarni o'rtada ushlaydi */}
    <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40" />
      </Link>

      <div className="flex items-center gap-10">
        {navbar && navbar.map((value, index) => (
          <Link key={index} className="text-white hover:text-yellow-500 transition-colors" to={value.url}>
            {value.title}
          </Link>
        ))}
      </div>

      <button className="border-2 border-white text-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all">
        Log In
      </button>
    </div>
  </div>
);
}

export default Navbar
