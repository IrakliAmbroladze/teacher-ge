"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

export const MenuCarousel = () => {
  const swiperSlideTailwindCss = "flex items-center justify-center text-white";
  const slidesArray = [
    {
      title: "კალენდარი",
      imageSrc: "/calendar.png",
      pageDestination: "/protected/calendar",
    },
    {
      title: "პირადი გეგმები",
      imageSrc: "/private.png",
      pageDestination: "/protected/private",
    },
    {
      title: "პროექტები",
      imageSrc: "/projects.png",
      pageDestination: "/protected/projects",
    },
    {
      title: "საჭირო ნივთები",
      imageSrc: "/needs.png",
      pageDestination: "/protected/needs",
    },
  ];
  const CustomSlide = ({
    title,
    imageSrc,
    pageDestination,
  }: {
    title: string;
    imageSrc: string;
    pageDestination: string;
  }) => {
    return (
      <Link href={pageDestination}>
        <div className="text-center"> {title} </div>
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-sm object-cover"
          />
        </div>
      </Link>
    );
  };

  return (
    <>
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
        {slidesArray.map((slide) => (
          <SwiperSlide className={swiperSlideTailwindCss} key={slide.title}>
            <CustomSlide
              title={slide.title}
              imageSrc={slide.imageSrc}
              pageDestination={slide.pageDestination}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
