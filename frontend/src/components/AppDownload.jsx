import { assets } from "../assets/assets"

export const AppDownload = () => {
  return (
    <div id="app-download" className="m-auto mt-24 text-3xl font-semibold text-center">
      <p>For better Experience Download <br />Food-Del App</p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <img className="max-w-[180px] delay-150  cursor-pointer transition-transform transform hover:scale-105" src={assets.play_store} alt="" />
        <img className="max-w-[180px] delay-150 cursor-pointer transition-transform transform hover:scale-105" src={assets.app_store} alt="" />
      </div>
    </div>
  )
}