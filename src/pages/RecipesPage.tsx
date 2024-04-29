import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeartOutlined,
  HeartFilled,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "swiper/css";
import "swiper/css/navigation";
import sujungbang from "../img/수정방.jpeg";
import 오늘밤하이볼 from "../img/오늘 밤 하이볼.jpeg";
import 강릉 from "../img/강릉 블루오션 하이볼.jpeg";
import 벚꽃 from "../img/벚꽃 칵테일.jpeg";
import top1 from "../img/TOP1.png";
import top2 from "../img/TOP2.png";
import top3 from "../img/TOP3.png";
import top4 from "../img/TOP4.png";
import top5 from "../img/TOP5.png";
import top6 from "../img/TOP6.png";
import top7 from "../img/TOP7.png";
import top8 from "../img/TOP8.png";
import top9 from "../img/TOP9.png";
import top10 from "../img/TOP10.png";
import 따봉 from "../img/따봉.png";
import textPicture from "../img/예시 술 이미지.webp";
import 소주 from "../img/소주이미지.webp";
import 맥주 from "../img/맥주이미지.webp";
import 와인 from "../img/와인이미지.webp";
import 사케 from "../img/사케이미지.webp";
import 보드카 from "../img/보드카이미지.webp";
import 위스키 from "../img/위스키이미지.webp";
import 막걸리 from "../img/막걸리이미지.webp";
import LikeButton from "../components/LikeButton";

export default function RecipesPage() {
  const [goodConunt, setGoodConunt] = useState(0);
  const [orderMethod, setOrderMethod] = useState(false);
  const [orderMethodName, setOrderMethodName] = useState(false);
  const [allPage, setAllPage] = useState(true);
  const [sojuPage, setSojuPage] = useState(false);
  const [beerPage, setBeerPage] = useState(false);
  const [winePage, setWinePage] = useState(false);
  const [sakePage, setSakePage] = useState(false);
  const [vodkaPage, setVodkaPage] = useState(false);
  const [whiskeyPage, setWhiskeyPage] = useState(false);
  const [makgeolliPage, setmakgeolliPage] = useState(false);
  const [onePage, setOnePage] = useState(true);
  const [twoPage, setTwoPage] = useState(false);

  const items = [
    { id: 1, title: "제목 1", image: textPicture },
    { id: 2, title: "제목 2", image: textPicture },
    { id: 3, title: "제목 3", image: textPicture },
    { id: 4, title: "제목 4", image: textPicture },
    { id: 5, title: "제목 5", image: textPicture },
    { id: 6, title: "제목 6", image: textPicture },
    { id: 7, title: "제목 7", image: textPicture },
    { id: 8, title: "제목 8", image: textPicture },
    { id: 9, title: "제목 9", image: textPicture },
    { id: 10, title: "제목 10", image: textPicture },
    { id: 11, title: "제목 11", image: textPicture },
    { id: 12, title: "제목 12", image: textPicture },
    { id: 13, title: "제목 13", image: textPicture },
    { id: 14, title: "제목 14", image: textPicture },
    { id: 15, title: "제목 15", image: textPicture },
  ];
  const sojuItems = [
    { id: 1, title: "제목 1", image: 소주 },
    { id: 2, title: "제목 2", image: 소주 },
    { id: 3, title: "제목 3", image: 소주 },
    { id: 4, title: "제목 4", image: 소주 },
    { id: 5, title: "제목 5", image: 소주 },
    { id: 6, title: "제목 6", image: 소주 },
    { id: 7, title: "제목 7", image: 소주 },
    { id: 8, title: "제목 8", image: 소주 },
    { id: 9, title: "제목 9", image: 소주 },
    { id: 10, title: "제목 10", image: 소주 },
    { id: 11, title: "제목 11", image: 소주 },
    { id: 12, title: "제목 12", image: 소주 },
    { id: 13, title: "제목 13", image: 소주 },
    { id: 14, title: "제목 14", image: 소주 },
    { id: 15, title: "제목 15", image: 소주 },
  ];
  const beerItems = [
    { id: 1, title: "제목 1", image: 맥주 },
    { id: 2, title: "제목 2", image: 맥주 },
    { id: 3, title: "제목 3", image: 맥주 },
    { id: 4, title: "제목 4", image: 맥주 },
    { id: 5, title: "제목 5", image: 맥주 },
    { id: 6, title: "제목 6", image: 맥주 },
    { id: 7, title: "제목 7", image: 맥주 },
    { id: 8, title: "제목 8", image: 맥주 },
    { id: 9, title: "제목 9", image: 맥주 },
    { id: 10, title: "제목 10", image: 맥주 },
    { id: 11, title: "제목 11", image: 맥주 },
    { id: 12, title: "제목 12", image: 맥주 },
    { id: 13, title: "제목 13", image: 맥주 },
    { id: 14, title: "제목 14", image: 맥주 },
    { id: 15, title: "제목 15", image: 맥주 },
  ];
  const wineItems = [
    { id: 1, title: "제목 1", image: 와인 },
    { id: 2, title: "제목 2", image: 와인 },
    { id: 3, title: "제목 3", image: 와인 },
    { id: 4, title: "제목 4", image: 와인 },
    { id: 5, title: "제목 5", image: 와인 },
    { id: 6, title: "제목 6", image: 와인 },
    { id: 7, title: "제목 7", image: 와인 },
    { id: 8, title: "제목 8", image: 와인 },
    { id: 9, title: "제목 9", image: 와인 },
    { id: 10, title: "제목 10", image: 와인 },
    { id: 11, title: "제목 11", image: 와인 },
    { id: 12, title: "제목 12", image: 와인 },
    { id: 13, title: "제목 13", image: 와인 },
    { id: 14, title: "제목 14", image: 와인 },
    { id: 15, title: "제목 15", image: 와인 },
  ];
  const sakeItems = [
    { id: 1, title: "제목 1", image: 사케 },
    { id: 2, title: "제목 2", image: 사케 },
    { id: 3, title: "제목 3", image: 사케 },
    { id: 4, title: "제목 4", image: 사케 },
    { id: 5, title: "제목 5", image: 사케 },
    { id: 6, title: "제목 6", image: 사케 },
    { id: 7, title: "제목 7", image: 사케 },
    { id: 8, title: "제목 8", image: 사케 },
    { id: 9, title: "제목 9", image: 사케 },
    { id: 10, title: "제목 10", image: 사케 },
    { id: 11, title: "제목 11", image: 사케 },
    { id: 12, title: "제목 12", image: 사케 },
    { id: 13, title: "제목 13", image: 사케 },
    { id: 14, title: "제목 14", image: 사케 },
    { id: 15, title: "제목 15", image: 사케 },
  ];
  const vodkaItems = [
    { id: 1, title: "제목 1", image: 보드카 },
    { id: 2, title: "제목 2", image: 보드카 },
    { id: 3, title: "제목 3", image: 보드카 },
    { id: 4, title: "제목 4", image: 보드카 },
    { id: 5, title: "제목 5", image: 보드카 },
    { id: 6, title: "제목 6", image: 보드카 },
    { id: 7, title: "제목 7", image: 보드카 },
    { id: 8, title: "제목 8", image: 보드카 },
    { id: 9, title: "제목 9", image: 보드카 },
    { id: 10, title: "제목 10", image: 보드카 },
    { id: 11, title: "제목 11", image: 보드카 },
    { id: 12, title: "제목 12", image: 보드카 },
    { id: 13, title: "제목 13", image: 보드카 },
    { id: 14, title: "제목 14", image: 보드카 },
    { id: 15, title: "제목 15", image: 보드카 },
  ];
  const whiskeyItems = [
    { id: 1, title: "제목 1", image: 위스키 },
    { id: 2, title: "제목 2", image: 위스키 },
    { id: 3, title: "제목 3", image: 위스키 },
    { id: 4, title: "제목 4", image: 위스키 },
    { id: 5, title: "제목 5", image: 위스키 },
    { id: 6, title: "제목 6", image: 위스키 },
    { id: 7, title: "제목 7", image: 위스키 },
    { id: 8, title: "제목 8", image: 위스키 },
    { id: 9, title: "제목 9", image: 위스키 },
    { id: 10, title: "제목 10", image: 위스키 },
    { id: 11, title: "제목 11", image: 위스키 },
    { id: 12, title: "제목 12", image: 위스키 },
    { id: 13, title: "제목 13", image: 위스키 },
    { id: 14, title: "제목 14", image: 위스키 },
    { id: 15, title: "제목 15", image: 위스키 },
  ];
  const makgeolliItems = [
    { id: 1, title: "제목 1", image: 막걸리 },
    { id: 2, title: "제목 2", image: 막걸리 },
    { id: 3, title: "제목 3", image: 막걸리 },
    { id: 4, title: "제목 4", image: 막걸리 },
    { id: 5, title: "제목 5", image: 막걸리 },
    { id: 6, title: "제목 6", image: 막걸리 },
    { id: 7, title: "제목 7", image: 막걸리 },
    { id: 8, title: "제목 8", image: 막걸리 },
    { id: 9, title: "제목 9", image: 막걸리 },
    { id: 10, title: "제목 10", image: 막걸리 },
    { id: 11, title: "제목 11", image: 막걸리 },
    { id: 12, title: "제목 12", image: 막걸리 },
    { id: 13, title: "제목 13", image: 막걸리 },
    { id: 14, title: "제목 14", image: 막걸리 },
    { id: 15, title: "제목 15", image: 막걸리 },
  ];

  const showAllPage = () => {
    setAllPage(true);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showSojuPage = () => {
    setAllPage(false);
    setSojuPage(true);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showBeerPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(true);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };

  const showWinePage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(true);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showSakePage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(true);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showVodkaPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(true);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showWhiskeyPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(true);
    setmakgeolliPage(false);
  };
  const showmakgeolliPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(true);
  };
  const exchageOnePage = () => {
    setOnePage(true);
    setTwoPage(false);
  };
  const exchageTwoPage = () => {
    setOnePage(false);
    setTwoPage(true);
  };

  return (
    <div>
      <div className="ml-[404px] mt-[200px] flex flex-row">
        <div className=" text-4xl text-sky-600 font-bold">TOP 10 레시피</div>
        <div className="text-[24px] text-sky-200 leading-[55px]">
          나도 Top10 도전?
        </div>
      </div>
      <form className="w-[1300px] ml-[357px]">
        <Swiper
          slidesPerView={4}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="h-[448px]"
        >
          <SwiperSlide>
            <div>
              <img src={top1} alt="rangking" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={오늘밤하이볼} alt="오늘밤하이볼" className="" />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top2} alt="top2" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={강릉} alt="강릉" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                강릉 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={sujungbang} alt="수정방" /> */}
            <div>
              <img src={top3} alt="top3" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={sujungbang} alt="수정방" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                간아~ 가즈아~ 가즈아~ 수정방 들어간다~
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={벚꽃} alt="벚꽃" /> */}
            <div>
              <img src={top4} alt="top4" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={벚꽃} alt="벚꽃" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오빠랑 벚꽃 한 잔🌸
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top5} alt="top5" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={오늘밤하이볼} alt="오늘밤하이볼" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top6} alt="top6" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={강릉} alt="강릉" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                강릉 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={sujungbang} alt="수정방" /> */}
            <div>
              <img src={top7} alt="top7" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={sujungbang} alt="수정방" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                간아~ 가즈아~ 가즈아~ 수정방 들어간다~
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={벚꽃} alt="벚꽃" /> */}
            <div>
              <img src={top8} alt="top8" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={벚꽃} alt="벚꽃" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오빠랑 벚꽃 한 잔🌸
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={top9} alt="top9" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={오늘밤하이볼} alt="오늘밤하이볼" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top10} alt="top10" className="absolute z-20" />

              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={강릉} alt="강릉" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                강릉 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={따봉} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </form>
      <form className="w-[1300px] ml-[357px]  mt-[36px] relative">
        <div className="m flex flex-row">
          <div className=" text-4xl text-sky-600 font-bold">레시피</div>
          <div className="text-[24px] text-sky-200 leading-[50px]">
            나만의 레시피를 만들어 볼까?
          </div>
        </div>
        <ul className="h-11 text-2xl flex flex-row justify-between mt-6  border-b-2 cursor-pointer">
          <li
            onClick={showAllPage}
            className={`${
              allPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            전 체
          </li>

          <li
            onClick={showSojuPage}
            className={`${
              sojuPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            소 주
          </li>
          <li
            onClick={showBeerPage}
            className={`${
              beerPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            맥 주
          </li>
          <li
            onClick={showWinePage}
            className={`${
              winePage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            와 인
          </li>
          <li
            onClick={showSakePage}
            className={`${
              sakePage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            사 케
          </li>
          <li
            onClick={showVodkaPage}
            className={`${
              vodkaPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            보드카
          </li>
          <li
            onClick={showWhiskeyPage}
            className={`${
              whiskeyPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            위스키
          </li>
          <li
            onClick={showmakgeolliPage}
            className={`${
              makgeolliPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            막걸리
          </li>
        </ul>
        <div
          className=" absolute right-0 flex text-xl justify-center items-center cursor-pointer"
          onClick={() => setOrderMethod(!orderMethod)}
        >
          <div className="mr-1">{orderMethodName ? "추천순" : "최신순"}</div>
          <DownOutlined />
          {orderMethod && (
            <div className="w-[92px] h-[84px] border-[3px] border-black rounded-xl flex flex-col justify-center items-center absolute fixed right-2 top-1 bg-white">
              <div
                className="text-xl w-[80px] h-[38px] rounded-lg text-center  flex flex-col justify-center items-center hover:bg-sky-300 cursor-pointer "
                onClick={() => setOrderMethodName(false)}
              >
                최신순
              </div>
              <div
                className="text-xl w-[80px] h-[38px] rounded-lg text-center  flex flex-col justify-center items-center hover:bg-sky-300 cursor-pointer"
                onClick={() => setOrderMethodName(true)}
              >
                추천순
              </div>
            </div>
          )}
        </div>

        <div className="w-[1300px] flex flex-wrap justify-between mt-8">
          {allPage &&
            onePage &&
            items.slice(0, 10).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {allPage &&
            twoPage &&
            items.slice(10, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {sojuPage &&
            onePage &&
            sojuItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {beerPage &&
            onePage &&
            beerItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {winePage &&
            onePage &&
            wineItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {sakePage &&
            onePage &&
            sakeItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {vodkaPage &&
            onePage &&
            vodkaItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {whiskeyPage &&
            onePage &&
            whiskeyItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {makgeolliPage &&
            onePage &&
            makgeolliItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
        </div>
      </form>
      <form className="w-full flex justify-center  my-[40px] ">
        <ul className="w-[650px] flex flex-row items-center justify-between ">
          <LeftOutlined />
          <li
            className={`${
              onePage ? "text-red-500" : "text-black"
            } cursor-pointer`}
            onClick={exchageOnePage}
          >
            1
          </li>
          <li
            onClick={exchageTwoPage}
            className={`${
              twoPage ? "text-red-500" : "text-black"
            } cursor-pointer`}
          >
            2
          </li>
          <RightOutlined />
        </ul>
      </form>
    </div>
  );
}
