"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Bao_Mi_1,
  Banh_Mi_1,
  Banh_Mi_2,
  Banh_Mi_3,
  Bao_Mi_2,
  Cheese_Cake_1,
  Cheese_Cake_2,
  Cheese_Cake_3,
  Cheese_Cake_4,
  Cheese_Cake_5,
  Cheese_Cake_6,
  Cheese_Cake_7,
  Bao_Mi_3,
  Banh_Bao_1,
  Bot_Thuong_Hang_1,
} from "@/public/image/index";
export default function Slice() {
  const [slides, setSlices] = useState([
    {
      bao_mi: { is_open: true },
      banh_mi_1: {
        is_open: true,
        is_move: false,
      },
      banh_mi_2: {
        is_open: true,
        is_move: false,
      },
      banh_mi_3: {
        is_open: true,
        is_move: false,
      },
      introduce: {
        is_close: false,
        header: { is_open: true },
        content: { is_open: true },
      },
    },
    {
      bao_mi: { is_open: false },
      banh_ngot_1: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_2: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_3: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_4: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_5: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_6: {
        is_open: false,
        is_move: false,
      },
      banh_ngot_7: {
        is_open: false,
        is_move: false,
      },
      introduce: {
        is_close: true,
        header: { is_open: false },
        content: { is_open: false },
      },
    },
    {
      bao_mi: {
        is_open: true,
      },
      banh_bao: {
        is_open: true,
        is_move: false,
      },
      bot_thuong_hang: {
        is_open: true,
        is_move: false,
      },
      introduce: {
        is_close: false,
        header: { is_open: true },
        content: { is_open: true },
      },
    },
  ]);
  const [indexSlide, setIndexSlice] = useState(0);
  const [tempIndexSlide, setTempIndexSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handleIndexSlide = (index) => {
    if (isTransitioning || index === indexSlide || index === tempIndexSlide)
      return;
    setIsTransitioning(true);
    setTempIndexSlide(index);
    if (index === 0) {
      clearSlide();
      setTimeout(() => {
        setIndexSlice(index);
        setSlices((prevSlices) => ({
          ...prevSlices,
          [0]: {
            ...prevSlices[0],
            bao_mi: { is_open: true },
            banh_mi_1: { is_open: true, is_move: false },
            banh_mi_2: { is_open: true, is_move: false },
            banh_mi_3: { is_open: true, is_move: false },
            introduce: {
              is_close: false,
              header: { is_open: true },
              content: { is_open: true },
            },
          },
        }));

        setTimeout(() => {
          setSlices((prevSlices) => ({
            ...prevSlices,
            [0]: {
              ...prevSlices[0],
              banh_mi_1: { is_open: false, is_move: true },
              banh_mi_2: { is_open: false, is_move: true },
              banh_mi_3: { is_open: false, is_move: true },
            },
          }));
          setIsTransitioning(false);
        }, 1000);
      }, 1000);
    } else if (index === 1) {
      clearSlide();
      setTimeout(() => {
        setIndexSlice(index);
        setSlices((prevSlices) => ({
          ...prevSlices,
          [1]: {
            ...prevSlices[1],
            bao_mi: { is_open: true },
            banh_ngot_1: { is_open: true, is_move: false },
            banh_ngot_2: { is_open: true, is_move: false },
            banh_ngot_3: { is_open: true, is_move: false },
            banh_ngot_4: { is_open: true, is_move: false },
            banh_ngot_5: { is_open: true, is_move: false },
            banh_ngot_6: { is_open: true, is_move: false },
            banh_ngot_7: { is_open: true, is_move: false },
            introduce: {
              is_close: false,
              header: { is_open: true },
              content: { is_open: true },
            },
          },
        }));
        setTimeout(() => {
          setSlices((prevSlices) => ({
            ...prevSlices,
            [1]: {
              ...prevSlices[1],
              banh_ngot_1: { is_open: false, is_move: true },
              banh_ngot_2: { is_open: false, is_move: true },
              banh_ngot_3: { is_open: false, is_move: true },
              banh_ngot_4: { is_open: false, is_move: true },
              banh_ngot_5: { is_open: false, is_move: true },
              banh_ngot_6: { is_open: false, is_move: true },
              banh_ngot_7: { is_open: false, is_move: true },
            },
          }));
          setIsTransitioning(false);
        }, 1000);
      }, 1000);
    } else if (index == 2) {
      clearSlide();

      setTimeout(() => {
        setIndexSlice(index);
        setSlices((prevSlices) => ({
          ...prevSlices,
          [2]: {
            ...prevSlices[2],
            bao_mi: { is_open: true },
            introduce: {
              is_close: false,
              header: { is_open: true },
              content: { is_open: true },
            },
            banh_bao: { is_open: true, is_move: false },
            bot_thuong_hang: { is_open: true, is_move: false },
          },
        }));
        setTimeout(() => {
          setSlices((prevSlices) => ({
            ...prevSlices,
            [2]: {
              ...prevSlices[2],
              banh_bao: { is_open: false, is_move: true },
              bot_thuong_hang: { is_open: false, is_move: true },
            },
          }));
          setIsTransitioning(false);
        }, 1000);
      }, 1000);
    }
  };
  const clearSlide = () => {
    setSlices((prevSlices) => ({
      ...prevSlices,
      [0]: {
        ...prevSlices[0],
        bao_mi: { is_open: false },
        banh_mi_1: {
          is_open: false,
          is_move: false,
        },
        banh_mi_2: {
          is_open: false,
          is_move: false,
        },
        banh_mi_3: {
          is_open: false,
          is_move: false,
        },
        introduce: {
          is_close: true,
          header: { is_open: false },
          content: { is_open: false },
        },
      },
      [1]: {
        ...prevSlices[1],
        bao_mi: { is_open: false },
        banh_ngot_1: { is_open: false, is_move: false },
        banh_ngot_2: { is_open: false, is_move: false },
        banh_ngot_3: { is_open: false, is_move: false },
        banh_ngot_4: { is_open: false, is_move: false },
        banh_ngot_5: { is_open: false, is_move: false },
        banh_ngot_6: { is_open: false, is_move: false },
        banh_ngot_7: { is_open: false, is_move: false },
        introduce: {
          is_close: true,
          header: { is_open: false },
          content: { is_open: false },
        },
      },
      [2]: {
        ...prevSlices[2],
        bao_mi: { is_open: false },
        banh_bao: { is_open: false, is_move: false },
        bot_thuong_hang: { is_open: false, is_move: false },
        introduce: {
          is_close: true,
          header: { is_open: false },
          content: { is_open: false },
        },
      },
    }));
  };
  const [isHoverBg, setIsHoverBg] = useState(false);
  const handleMouseEnter = () => {
    setIsHoverBg(true);
  };

  const handleMouseLeave = () => {
    setIsHoverBg(false);
  };
  const [progress, setProgress] = useState(0);

  useEffect(() => {}, [indexSlide]);
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [indexSlide]);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative  h-screen select-none overflow-hidden bg-[url('/image/bg_botbanhmi.webp')] bg-cover bg-no-repeat "
    >
      <div className="absolute left-0  right-[10%] top-0 z-[1] h-1 bg-[#a3ad8a]"></div>
      <div
        className={`select-none ${isHoverBg ? "fade-in-button " : "fade-out-button"} absolute right-3 z-[999] flex h-full w-5 flex-col items-center justify-center gap-2`}
      >
        <div
          onClick={() => {
            handleIndexSlide(0);
          }}
          className={`bullet select-none  ${tempIndexSlide === 0 && "selected"}`}
        ></div>
        <div
          onClick={() => {
            handleIndexSlide(1);
          }}
          className={`bullet select-none  ${tempIndexSlide === 1 && "selected"}`}
        ></div>
        <div
          onClick={() => {
            handleIndexSlide(2);
          }}
          className={`bullet select-none  ${tempIndexSlide === 2 && "selected"}`}
        ></div>
      </div>
      {indexSlide === 0 && (
        <>
          <div
            className={` ${indexSlide !== 0 ? "hidden" : "absolute"}  left-[7.8%] top-[29.3%] flex select-none flex-row items-center justify-center gap-1 overflow-hidden`}
          >
            <Image
              src={Bao_Mi_1}
              alt="bột mỳ thượng hạng"
              objectFit="contain"
              className={`select-none ${slides[0].bao_mi.is_open ? "open-bao-mi" : "close-bao-mi"} h-[41.5vh] w-[43.8vw]  `}
            />

            <div
              className={`select-none ${slides[0].introduce.is_close ? "hidden" : "relative"} mb-6  ml-2 flex max-w-[500px] flex-col items-start justify-start gap-3 overflow-hidden`}
            >
              <h1
                className={`select-none  ${slides[0].introduce.header.is_open ? "open-header-slide-1" : "close-header-slide-1"} relative text-[48px] font-bold tracking-wide text-[#025030]`}
              >
                Bột làm bánh mì
              </h1>
              <p
                className={`select-none  ${slides[0].introduce.content.is_open ? "open-content-slide-1" : "close-content-slide-1"} text-[18px] font-normal  leading-[26px] text-[#363636]`}
              >
                Bột bánh mì được sản xuất từ nguồn lúa mì cứng. Loại bột này có
                protein cao từ 12% -13,5%, cùng với đặc tính gluten chắc khỏe,
                kết hợp với men nở trong qui trình làm bánh giúp tạo cấu trúc và
                tăng thể tích sản phẩm
              </p>
            </div>
          </div>
          <Image
            src={Banh_Mi_1}
            alt="bột mỳ thượng hạng 1"
            objectFit="contain"
            className={`select-none ${slides[0].banh_mi_1.is_open ? "open-banh-mi-1-slide-1" : slides[0].banh_mi_1.is_move ? "slice1-1" : "close-banh-mi-1-slide-1"}   absolute bottom-[-21%] left-0 h-[56.5vh] w-[22.1256vw]`}
          />
          <Image
            src={Banh_Mi_2}
            alt="bột mỳ thượng hạng 2"
            objectFit="contain"
            className={`select-none ${slides[0].banh_mi_2.is_open ? "open-banh-mi-2-slide-1" : slides[0].banh_mi_2.is_move ? "slice1-2" : "close-banh-mi-2-slide-1"} absolute bottom-[-17%] left-[35%]  h-[32.35vh] w-[14.6vw]`}
          />
          <Image
            src={Banh_Mi_3}
            alt="bột mỳ thượng hạng 3 "
            objectFit="contain"
            className={`select-none ${slides[0].banh_mi_3.is_open ? "open-banh-mi-3-slide-1" : slides[0].banh_mi_3.is_move ? "slice1-3" : "close-banh-mi-3-slide-1"} absolute bottom-[-22%] right-[-2%] h-[36.8vw] w-[36.9vw]`}
          />
        </>
      )}

      {indexSlide === 1 && (
        <>
          <div
            className={`${indexSlide !== 1 ? "hidden" : "absolute"} absolute left-0 right-0 top-[24%]  flex w-full select-none  flex-col items-center justify-center gap-20`}
          >
            <div
              className={`select-none ${slides[1].introduce.is_close ? "hidden" : "relative"}  flex max-w-[618px]  flex-col items-center justify-center gap-3 overflow-hidden`}
            >
              <h1
                className={`select-none ${slides[1].introduce.header.is_open ? "open-header-slide-2" : "close-header-slide-2"} relative text-center text-[48px] font-bold tracking-wide text-[#025030]`}
              >
                Bột làm bánh ngọt
              </h1>
              <p
                className={`select-none ${slides[1].introduce.content.is_open ? "open-content-slide-2" : "close-content-slide-2"}  text-center  text-[18px] font-normal leading-[26px] text-[#363636]`}
              >
                Có protein dưới 9%, thích hợp làm các loại bánh bông xốp, mềm
                mịn như bánh bông lan, bánh quy,...
              </p>
            </div>
            <Image
              src={Bao_Mi_2}
              alt="bột mỳ thượng hạng"
              objectFit="contain"
              className={`select-none ${slides[1].bao_mi.is_open ? "open-bao-mi-2" : "close-bao-mi-2"} h-[40.55vh] w-[34.95vw]  `}
            />
          </div>
          <Image
            src={Cheese_Cake_1}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none  ${slides[1].banh_ngot_1.is_open ? "open-banh-ngot-1-slide-2" : slides[1].banh_ngot_1.is_move ? "" : "close-banh-ngot-1-slide-2"} absolute bottom-[-5.25%] left-[-0.5%] z-[5] h-[51vh] w-[16.25vw]`}
          />
          <Image
            src={Cheese_Cake_2}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_2.is_open ? "open-banh-ngot-2-slide-2" : slides[1].banh_ngot_2.is_move ? "slide2-2" : "close-banh-ngot-2-slide-2"} absolute bottom-[25%] left-[9%] z-[6] h-[15vh] w-[8vw]`}
          />
          <Image
            src={Cheese_Cake_3}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_3.is_open ? "open-banh-ngot-3-slide-2" : slides[1].banh_ngot_3.is_move ? "slide2-3" : "close-banh-ngot-3-slide-2"} absolute bottom-[17%] left-[12%] z-[6] h-[39px] w-[41px]`}
          />
          <Image
            src={Cheese_Cake_4}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_4.is_open ? "open-banh-ngot-4-slide-2" : slides[1].banh_ngot_4.is_move ? "slide2-4" : "close-banh-ngot-4-slide-2"} absolute bottom-[5%] left-[12%] z-[6] h-[73px] w-[84px]`}
          />
          <Image
            src={Cheese_Cake_5}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_5.is_open ? "open-banh-ngot-5-slide-2" : slides[1].banh_ngot_5.is_move ? "slide2-5" : "close-banh-ngot-5-slide-2"}  absolute bottom-[12%] right-[9%] z-[6] h-[171px] w-[206px]`}
          />
          <Image
            src={Cheese_Cake_6}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_6.is_open ? "open-banh-ngot-6-slide-2" : slides[1].banh_ngot_6.is_move ? "slide2-6" : "close-banh-ngot-6-slide-2"} absolute bottom-[44%] right-[14%] z-[6] h-[68px] w-[71px]`}
          />
          <Image
            src={Cheese_Cake_7}
            alt="bánh ngọt"
            objectFit="contain"
            className={`select-none ${slides[1].banh_ngot_7.is_open ? "open-banh-ngot-7-slide-2" : slides[1].banh_ngot_7.is_move ? "slide2-7" : "close-banh-ngot-7-slide-2"} absolute bottom-[-23%] right-0 z-[5] h-[80vh] w-[16.5vw]`}
          />
        </>
      )}
      {indexSlide === 2 && (
        <>
          <div
            className={`select-none ${indexSlide !== 2 ? "hidden" : "absolute"} absolute left-0 right-0  top-[22%] flex w-full  flex-col items-center justify-center gap-8`}
          >
            <div
              className={`flex    max-w-[530px] select-none  flex-col items-center justify-center gap-3 overflow-hidden`}
            >
              <h1
                className={`select-none  ${slides[2].introduce.header.is_open ? "open-header-slide-3" : "close-header-slide-3"} t relative text-center text-[48px] font-bold text-[#025030]`}
              >
                Bột làm mì sợi
                <br />
                và bột làm bánh bao
              </h1>
              <p
                className={`select-none ${slides[2].introduce.content.is_open ? "open-content-slide-3" : "close-content-slide-3"}  text-center  text-[18px] font-normal leading-[26px] text-[#363636]`}
              >
                Bột có protein khoảng từ 9% đến 11% và độ tro thấp, thích hợp
                làm các loại bánh bao , mì tươi, mì trứng, …
              </p>
            </div>
            <Image
              src={Bao_Mi_3}
              alt="bột mỳ thượng hạng"
              objectFit="contain"
              className={`${slides[2].bao_mi.is_open ? "open-bao-mi-3" : "close-bao-mi-3"} h-[52.55vh]  w-[48.45vw] select-none  `}
            />
          </div>
          <Image
            src={Banh_Bao_1}
            alt="bánh bao"
            objectFit="contain"
            className={`select-none ${slides[2].banh_bao.is_open ? "open-banh-bao-slide-3" : slides[2].banh_bao.is_move ? "slice1-1" : "close-banh-bao-slide-3"} absolute bottom-[-25%] left-0 h-[70vh] w-[18vw] `}
          />
          <Image
            src={Bot_Thuong_Hang_1}
            alt="bột thượng hạng"
            objectFit="contain"
            className={`select-none ${slides[2].bot_thuong_hang.is_open ? "open-bot-my-slide-3" : slides[2].bot_thuong_hang.is_move ? "slice1-3" : "close-bot-my-slide-3"} absolute bottom-[-25%] right-0 h-[67.6vh] w-[23.1vw] `}
          />
        </>
      )}
    </div>
  );
}
