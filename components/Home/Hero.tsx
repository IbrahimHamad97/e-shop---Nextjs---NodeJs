"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectCards } from "swiper/modules";
import { motion } from "framer-motion";

const SwiperComp = () => {
  const images = [
    "/images/dawn_bg.png",
    "/images/day_bg.png",
    "/images/logo-color.png",
    "/images/dawn_bg.png",
    "/images/day_bg.png",
    "/images/logo-color.png",
  ];
  const [_, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="flex justify-between items-center gap-12 h-[360px]">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Shop at your Leasure</h1>
        <p className="text-xl max-w-[50ch]">
          looking for high quality products with the best possible prices? you
          came to the right place!
        </p>
        {/* <div className="flex flex-wrap justify-between max-w-full mt-auto gap-y-4">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt=""
                className="w-[32%] h-[90px] rounded-md"
              />
            );
          })}
        </div> */}
      </motion.div>
      <motion.div
        className="rotating-card"
        initial={{ opacity: 0, y: "120px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-[320px] h-[360px] rounded-md"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default SwiperComp;
