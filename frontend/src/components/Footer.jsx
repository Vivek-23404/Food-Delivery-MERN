import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





export const Footer = () => {
  return (
    <div id="footer" className="text-[#9d9d9d] bg-[#323232] flex flex-col items-center gap-7 p-7 sm:px-[10vh] mt-24">

      <div className="w-full flex flex-wrap justify-between gap-7">

        <div className="flex flex-col md:w-6/12 w-full items-start gap-5">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum fuga nobis sit nostrum adipisci sequi fugit minus animi numquam sint, corporis voluptates dolorem sunt.</p>
          <div className="flex gap-4">
            <Link to="https://www.linkedin.com/in/vivek-prajapati-744250221/" target="_blank">
            <FaLinkedin size={25}/>

            </Link>
            <Link to="https://github.com/Vivek-23404" target="_blank">
              <FaGithub size={25} />

            </Link>
            <Link to='https://x.com/Vivek_23404' target="_blank">
              <FaTwitter size={25} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:w-auto w-full items-start gap-5">
          <h2 className="text-white/80 font-bold">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col md:w-auto w-full items-start gap-5">
          <h2 className="text-white/80 font-bold">Get In Touch</h2>
          <ul>
            <li>+91 9979255225</li>
            <li>vivekprajapati23404@gmail.com</li> 
          </ul>
        </div>

      </div>
      <hr className="w-full h-0.5 bg-gray-500 border-none"/>
      <p className="text-center">Copy Right 2024 Vivek.com - All rights Reserved</p>
    </div>
  )
}
