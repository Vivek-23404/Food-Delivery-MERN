export const Header = () => {
  return (
    <div className="relative h-80 md:h-96 rounded-lg w-full mt-8 mb-8 mx-auto bg-[url('./assets/header_img.png')] bg-no-repeat bg-center bg-cover flex items-center justify-start">

      <div className="flex flex-col items-center sm:items-start gap-[1.5vw] md:max-w-[50%] sm:max-w-[70%] text-center sm:text-left p-4">

        <h2 className="font-semibold text-white text-xl md:text-2xl">
          Order Your Favorite<br />
          <span className="text-2xl md:text-3xl">Food Here</span>
        </h2>
        <p className="w-full sm:text-sm text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus adipisci nam animi illo earum numquam, laboriosam cupiditate, quos ea laborum dolore fuga? Quos quod eligendi ipsum accusamus praesentium alias.
        </p>

        <button className="border-none text-[#747474] font-semibold py-2 px-4 bg-white rounded-full text-sm sm:text-base">
          View Menu
        </button>

      </div>

    </div>
  )
}