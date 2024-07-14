import { menu_list } from "../assets/assets"

export const ExploreMenu = ({category, setCategory}) => {

  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-[#343434] font-bold text-2xl"> <span>Expore Menu</span> </h1>
      <p className="max-w-[60%] text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minus dignissimos ea explicabo optio beatae? Provident vel fugit eos ex, autem.</p>

      <div className="flex gap-10 items-center justify-between overflow-x-scroll text-center  ml-5 mr-5">
        {
          menu_list.map((item, i)=>{
            return(
              <div onClick={()=> setCategory(prev=> prev===item.menu_name ? "all" : item.menu_name)} key={i}>
                <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition delay-100 ${category === item.menu_name ? "border-2 border-red-400 p-1" : ""}`} src={item.menu_image} alt="" />
                <p className="mt-[10px] text-[#747474] cursor-pointer">{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>

      <hr className="mt-[10px] h-0.5 bg-[#e2e2e2] border-none"/>
    </div>
  )
}
