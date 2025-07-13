"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MenuCarousel = () => {
  const swiperSlideTailwindCss =
    "flex items-center justify-center bg-gray-700 text-white";
  return (
    <Swiper
      className="w-full h-64"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide className={swiperSlideTailwindCss}>Slide 1</SwiperSlide>
      <SwiperSlide className={swiperSlideTailwindCss}>Slide 2</SwiperSlide>
      <SwiperSlide className={swiperSlideTailwindCss}>Slide 3</SwiperSlide>
      <SwiperSlide className={swiperSlideTailwindCss}>Slide 4</SwiperSlide>
    </Swiper>
  );
};
