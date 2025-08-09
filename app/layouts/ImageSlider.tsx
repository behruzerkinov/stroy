"use client";

import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  return (
    <Swiper
      className="rounded-2xl"
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
    >
      <SwiperSlide className="relative">
        <Image alt="slider" src="/logos/sliderImgOne.webp" fill={true} className="object-cover rounded-2xl" />
        <div className="h-100 max-w-full">
          <div className="flex flex-col min-w-1/2 gap-10 pl-15 justify-center items-start py-auto absolute inset-0 top-0 left-0">
            <p className="text-[40px] leading-[48px] font-bold max-w-1/4">Электроинструмент для любых нужд</p>
            <p className="text-[17px] font-[#2C333D] max-w-1/3">У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
            <button type="submit" className="uppercase rounded-md bg-black text-white py-3 px-6 flex items-center gap-5 hover:shadow-lg hover:shadow-gray-400 active:scale-[0.99]">перейти к товарам <FiExternalLink /></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image alt="slider" src="/logos/sliderImgTwo.webp" fill={true} className="object-cover rounded-2xl" />
        <div className="h-100 max-w-full">
          <div className="flex flex-col min-w-1/2 gap-10 pl-15 justify-center items-start py-auto absolute inset-0 top-0 left-0">
            <p className="text-[40px] leading-[48px] font-bold max-w-1/4">Хватит мечтать, пора покупать</p>
            <p className="text-[17px] font-[#2C333D] max-w-1/3">Плати частями, когда удобно. Рассрочка на покупку товаров от Тинькофф</p>
            <button type="submit" className="uppercase rounded-md bg-black text-white py-3 px-6 flex items-center gap-5 hover:shadow-lg hover:shadow-gray-400 active:scale-[0.99]">подробнее <FiExternalLink /></button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;