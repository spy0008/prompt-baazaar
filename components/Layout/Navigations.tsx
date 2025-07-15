import { navItem } from "@/constant/navItem"


type ActiveItemProp = {
    activeItem: number
}




const Navigations = ({ activeItem }: ActiveItemProp) => {
    return (
        <div className="bloack md:flex">
            {
                navItem.map((item, index) => (
                    <div key={item.title}>
                        <h5 className={`inline-block cursor-pointer md:px-4 xl:px-5 py-5 md:py-0 text-[16px] font-[700] font-Inter ${activeItem === index && 'text-[#0062f5]'}`}>
                            {item.title}
                        </h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Navigations