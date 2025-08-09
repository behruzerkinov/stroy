"use client"
import { useEffect, useState } from "react";
import Image from "next/image";   
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

type StoryItem = { id: number; image: string; title: string };

const StoryCards = () => {
  const [data, setData] = useState<StoryItem[]>([]);

  useEffect(() => {
    fetch("/base.json")
      .then((res) => res.json())
      .then((json) => setData(json.data.storyCards)); // ← ONLY take storyCards
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-medium mb-4 px-4">Популярные категории</h2>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide 
            key={item.id} 
            className="min-w-[250px] h-[150px] rounded-xl overflow-hidden bg-gray-100 flex flex-col py-10"

            style={{ width: "120px" }}
          >
            <div className="relative w-full h-[100px]">
              <Image
                alt={item.title}
                src={item.image}
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="p-2 text-center text-sm">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoryCards;
