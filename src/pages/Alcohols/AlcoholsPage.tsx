import React, { useEffect, useRef, useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import alcoholicTest from "../../img/alcoholicTest.webp";
import soju from "../../img/soju.webp";
import beer from "../../img/beer.webp";
import wine from "../../img/wine.webp";
import sake from "../../img/sake.webp";
import vodka from "../../img/vodka.webp";
import whiskey from "../../img/whiskey.webp";
import makgeorlli from "../../img/makgeorlli.webp";

import LikeButton from "../../components/LikeButton";
import Suntory from "../../img/Suntory.jpeg";
import { Navigate, useNavigate } from "react-router-dom";

// import { Alcoholsdata } from "../../Api/axios";

export default function AlcoholsPage() {
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
  const [contents, setContents] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await Alcoholsdata();
  //     console.log(data);
  //     if (data !== "error") {
  //       setContents(data);
  //     }
  //   };
  //   fetchData();

  //   interface AlcoholsDatas {
  //     id: number;
  //     name: string;
  //     description: string;
  //     type: string;
  //     imageUrl: string;
  //   }
  // }, []);

  interface ImageUrl {
    Suntory: string;
  }

  interface datas {
    id: number;
    name: string;
    Aroma: string[];
    description: string;
    type: string;
    volume: number;
    alcoholContent: number;
    country: string;
    imageUrl: ImageUrl;
    testingNotes: {
      aroma: string[];
      taste: string[];
      finish: string[];
    };
    information: {
      kind: string;
      volume: string;
      degree: string;
      country: string;
    };
    recommendRecipe: {
      recipe: string;
      description: string;
    };
    materials: { id: number; material: string; volume: string }[];
    steps: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
  }
  const datas = [
    {
      id: 1,
      imageUrl: { Suntory },
      name: "산토리 카쿠빈",
      testingNotes: {
        aroma: ["바닐라", "벌집", "아이스크림", "꽃"],
        taste: ["감귤", "시트러스", "계피", "자몽"],
        finish: ["꿀", "몰트", "후추", "견과류"],
      },
      information: {
        kind: "재패니스 블렌드디 위스키",
        volume: "700ml",
        degree: "40%",
        country: "일 본",
      },
      description:
        "최근 하이볼로 큰 인기를 누리고 있는 가쿠빈은 1937년에 개발된 이후 가장 큰 사랑을 받아온 산토리의 대표 위시키입니다. 평균 8년 숙성의 몰트 위스키와 엄선한 그레인 위스키를 블렌딩한 것으로 더욱 부드럽고 달콤한 맛이 특징입니다. 밝은 금색, 달콤한 곡물,바닐라,배 향. 가볍고 부드러우며 순한 과일향과 깔끔한 스파이시. 개운하고 드라이하며 과수원의 과일과 건초맛 피니쉬.",
      recommendRecipe: {
        recipe: "얼그레이 하이볼",
        description:
          "나 혼자 산다 박나래 편에서 일명 '나래바'에 초대된 지인들에게 웰컴 드링크로 선사했던 그 술. 바로 얼그레이  하이볼! 방송에 나오자마자 박나래 얼그레이 하이볼 레시피로 화제가 됐었죠. 오늘은 집에서 나 홀로 즐겨도 좋고, 지인들에게 가볍게 대접하기 좋은 얼그레이 하이볼 레시피를 준비했어요. 얼그레이의 진한 맛과 뒤이어 올라오는 단맛, 알싸한 알콜의 조합. 얼그레이 하이볼로 하루의 피로를 날려보세요.",
      },
      materials: [
        { id: 1, material: "얼그레이시럽", volume: "20ml" },
        { id: 2, material: "위스키", volume: "40ml" },
        { id: 3, material: "토니워터", volume: "150ml" },
        { id: 4, material: "레몬즙", volume: "약간" },
        { id: 5, material: "얼음", volume: "" },
      ],
      steps: {
        step1: "컵에 얼음을 충분히 담아주세요.",
        step2: "얼그레이 시럽 20ml 넣어주세요",
        step3: "위스키 40ml 넣어주세요(시럽:위스키 비율=1:2)",
        step4: "토니워터 150ml 및 레몬즙을 적당히 넣어서 잘 섞어주세요",
      },
      volume: 360,
      alcoholContent: 20.1,
      country: "South Korea",
    },
  ];
  const sojuItems = [
    { id: 1, title: "제목 1", image: soju },
    { id: 2, title: "제목 2", image: soju },
    { id: 3, title: "제목 3", image: soju },
    { id: 4, title: "제목 4", image: soju },
    { id: 5, title: "제목 5", image: soju },
    { id: 6, title: "제목 6", image: soju },
    { id: 7, title: "제목 7", image: soju },
    { id: 8, title: "제목 8", image: soju },
    { id: 9, title: "제목 9", image: soju },
    { id: 10, title: "제목 10", image: soju },
    { id: 11, title: "제목 11", image: soju },
    { id: 12, title: "제목 12", image: soju },
    { id: 13, title: "제목 13", image: soju },
    { id: 14, title: "제목 14", image: soju },
    { id: 15, title: "제목 15", image: soju },
  ];
  const beerItems = [
    { id: 1, title: "제목 1", image: beer },
    { id: 2, title: "제목 2", image: beer },
    { id: 3, title: "제목 3", image: beer },
    { id: 4, title: "제목 4", image: beer },
    { id: 5, title: "제목 5", image: beer },
    { id: 6, title: "제목 6", image: beer },
    { id: 7, title: "제목 7", image: beer },
    { id: 8, title: "제목 8", image: beer },
    { id: 9, title: "제목 9", image: beer },
    { id: 10, title: "제목 10", image: beer },
    { id: 11, title: "제목 11", image: beer },
    { id: 12, title: "제목 12", image: beer },
    { id: 13, title: "제목 13", image: beer },
    { id: 14, title: "제목 14", image: beer },
    { id: 15, title: "제목 15", image: beer },
  ];
  const wineItems = [
    { id: 1, title: "제목 1", image: wine },
    { id: 2, title: "제목 2", image: wine },
    { id: 3, title: "제목 3", image: wine },
    { id: 4, title: "제목 4", image: wine },
    { id: 5, title: "제목 5", image: wine },
    { id: 6, title: "제목 6", image: wine },
    { id: 7, title: "제목 7", image: wine },
    { id: 8, title: "제목 8", image: wine },
    { id: 9, title: "제목 9", image: wine },
    { id: 10, title: "제목 10", image: wine },
    { id: 11, title: "제목 11", image: wine },
    { id: 12, title: "제목 12", image: wine },
    { id: 13, title: "제목 13", image: wine },
    { id: 14, title: "제목 14", image: wine },
    { id: 15, title: "제목 15", image: wine },
  ];
  const sakeItems = [
    { id: 1, title: "제목 1", image: sake },
    { id: 2, title: "제목 2", image: sake },
    { id: 3, title: "제목 3", image: sake },
    { id: 4, title: "제목 4", image: sake },
    { id: 5, title: "제목 5", image: sake },
    { id: 6, title: "제목 6", image: sake },
    { id: 7, title: "제목 7", image: sake },
    { id: 8, title: "제목 8", image: sake },
    { id: 9, title: "제목 9", image: sake },
    { id: 10, title: "제목 10", image: sake },
    { id: 11, title: "제목 11", image: sake },
    { id: 12, title: "제목 12", image: sake },
    { id: 13, title: "제목 13", image: sake },
    { id: 14, title: "제목 14", image: sake },
    { id: 15, title: "제목 15", image: sake },
  ];
  const vodkaItems = [
    { id: 1, title: "제목 1", image: vodka },
    { id: 2, title: "제목 2", image: vodka },
    { id: 3, title: "제목 3", image: vodka },
    { id: 4, title: "제목 4", image: vodka },
    { id: 5, title: "제목 5", image: vodka },
    { id: 6, title: "제목 6", image: vodka },
    { id: 7, title: "제목 7", image: vodka },
    { id: 8, title: "제목 8", image: vodka },
    { id: 9, title: "제목 9", image: vodka },
    { id: 10, title: "제목 10", image: vodka },
    { id: 11, title: "제목 11", image: vodka },
    { id: 12, title: "제목 12", image: vodka },
    { id: 13, title: "제목 13", image: vodka },
    { id: 14, title: "제목 14", image: vodka },
    { id: 15, title: "제목 15", image: vodka },
  ];
  const whiskeyItems = [
    { id: 1, title: "제목 1", image: whiskey },
    { id: 2, title: "제목 2", image: whiskey },
    { id: 3, title: "제목 3", image: whiskey },
    { id: 4, title: "제목 4", image: whiskey },
    { id: 5, title: "제목 5", image: whiskey },
    { id: 6, title: "제목 6", image: whiskey },
    { id: 7, title: "제목 7", image: whiskey },
    { id: 8, title: "제목 8", image: whiskey },
    { id: 9, title: "제목 9", image: whiskey },
    { id: 10, title: "제목 10", image: whiskey },
    { id: 11, title: "제목 11", image: whiskey },
    { id: 12, title: "제목 12", image: whiskey },
    { id: 13, title: "제목 13", image: whiskey },
    { id: 14, title: "제목 14", image: whiskey },
    { id: 15, title: "제목 15", image: whiskey },
  ];
  const makgeolliItems = [
    { id: 1, title: "제목 1", image: makgeorlli },
    { id: 2, title: "제목 2", image: makgeorlli },
    { id: 3, title: "제목 3", image: makgeorlli },
    { id: 4, title: "제목 4", image: makgeorlli },
    { id: 5, title: "제목 5", image: makgeorlli },
    { id: 6, title: "제목 6", image: makgeorlli },
    { id: 7, title: "제목 7", image: makgeorlli },
    { id: 8, title: "제목 8", image: makgeorlli },
    { id: 9, title: "제목 9", image: makgeorlli },
    { id: 10, title: "제목 10", image: makgeorlli },
    { id: 11, title: "제목 11", image: makgeorlli },
    { id: 12, title: "제목 12", image: makgeorlli },
    { id: 13, title: "제목 13", image: makgeorlli },
    { id: 14, title: "제목 14", image: makgeorlli },
    { id: 15, title: "제목 15", image: makgeorlli },
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
      <form className="w-[1300px] ml-[357px] mt-44 relative">
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
            <div className="w-[92px] h-[84px] border-[3px] border-black rounded-xl flex flex-col justify-center items-center  right-2 top-1 bg-white">
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
            datas.slice(0, 10).map((data) => (
              <div key={data.id} className=" cursor-pointer">
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img
                    src={data.imageUrl.Suntory}
                    alt=""
                    onClick={() => navigate("/Alcohols/AlcoholDescript")}
                  />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {data.name}
                </div>
              </div>
            ))}
          {/* {allPage &&
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
            ))} */}
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
