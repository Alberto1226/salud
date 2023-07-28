
import React, { useEffect, useState } from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//img
import img from "../../assets/img/salud-OMS-e1551914081412.jpg";
//paginas
import { Cards } from "../cardsVideo/cards";
import { Container } from "react-bootstrap";

//css
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

export function SliderVideos() {
  const [slides, setSlides] = useState(5); // Número inicial de slides a mostrar

  useEffect(() => {
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);
    return () => {
      window.removeEventListener("resize", calculateSlidesPerView);
    };
  }, []);

  const calculateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    let slidesToShow = 5; // Número predeterminado de slides a mostrar

    if (screenWidth < 768) {
      slidesToShow = 2; // Si el ancho de la pantalla es menor a 768px, muestra solo 1 slide
    } else if (screenWidth < 1024) {
      slidesToShow = 3; // Si el ancho de la pantalla es menor a 1024px, muestra 2 slides
    }

    setSlides(slidesToShow);
  };
  return (
    <>
    <section className="swiperHeader"> 
      <Swiper
        spaceBetween={10}
        slidesPerView={slides}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-header">
          <Cards img={img} />
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
}
