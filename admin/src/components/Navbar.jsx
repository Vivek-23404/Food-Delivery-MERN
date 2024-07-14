import {assets} from '../assets/assets.js';
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-1">

      <img className="w-32" src={assets.logo} alt="" />
      <img className="w-16" src={assets.profile_image} alt="" />
    </div>
  )
}
