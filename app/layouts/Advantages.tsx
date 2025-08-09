import { BsBox } from "react-icons/bs";
import { CiCircleList, CiCreditCard1 } from "react-icons/ci";
import { TbCirclePercentage } from "react-icons/tb";


const Advantages = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center justify-center gap-5">
        <CiCreditCard1 className="text-blue-500" />
        <p className="text-[17px] font-[#2C333D]">Быстрая доставка</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <CiCircleList className="text-blue-500" />
        <p className="text-[17px] font-[#2C333D]">Быстрая доставка</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <BsBox className="text-blue-500" />
        <p className="text-[17px] font-[#2C333D]">Быстрая доставка</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <TbCirclePercentage className="text-blue-500" />
        <p className="text-[17px] font-[#2C333D]">Быстрая доставка</p>
      </div>
    </div>
  )
}

export default Advantages