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
export default function AlcoholDescript() {
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
        aroma: ["바닐라", ",", "벌집", ",", "아이스크림", ",", "꽃"],
        taste: ["감귤", ",", "시트러스", ",", "계피", ",", "자몽"],
        finish: ["꿀", ",", "몰트", ",", "후추", ",", "견과류"],
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
      steps: [
        { id: 1, step: "컵에 얼음을 충분히 담아주세요." },
        { id: 2, step: "얼그레이 시럽 20ml 넣어주세요" },
        { id: 3, step: "위스키 40ml 넣어주세요(시럽:위스키 비율=1:2)" },
        {
          id: 4,
          step: "토니워터 150ml 및 레몬즙을 적당히 넣어서 잘 섞어주세요",
        },
      ],
      volume: 360,
      alcoholContent: 20.1,
      country: "South Korea",
    },
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
        <div className="w-[1114px] mt-16">
          <div className="flex justify-between mb-10">
            <img
              src={datas[0].imageUrl.Suntory}
              alt=""
              className="w-[423px] h-[423px] mt-[69.5px] "
            />
            <div className="w-[558px] h-[562px] bg-[#003A66] rounded-lg">
              <div className=" w-[265px] h-[498px] ml-8 my-5">
                <div className=" text-4xl text-[#FFB739] mb-10">
                  산토리 가쿠빈
                </div>
                <div className="text-[#FFB739] text-xl mb-[32px]">
                  Testing Notes
                </div>
                <div className="w-[265px] h-[114px] mb-10">
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">Aroma</div>
                    <div className="text-white">
                      {datas[0].testingNotes.aroma}
                    </div>
                  </div>
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">Taste</div>
                    <div className="text-white">
                      {datas[0].testingNotes.taste}
                    </div>
                  </div>
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">Finish</div>
                    <div className="text-white">
                      {datas[0].testingNotes.finish}
                    </div>
                  </div>
                </div>
                <div className="text-[#FFB739] text-xl mb-[32px]">
                  Information
                </div>
                <div className="w-[265px] h-[114px] mb-10">
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">종 류</div>
                    <div className="text-white">
                      {datas[0].information.kind}
                    </div>
                  </div>
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">용 량</div>
                    <div className="text-white">
                      {datas[0].information.volume}
                    </div>
                  </div>
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">도 수</div>
                    <div className="text-white">
                      {datas[0].information.degree}
                    </div>
                  </div>
                  <div className="w-full flex mb-[27px]">
                    <div className="text-[#FFB739] mr-8">국 가</div>
                    <div className="text-white">
                      {datas[0].information.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[222px] bg-[#003A66] rounded-lg flex flex-col justify-center mb-10">
            <div className="m-8">
              <div className="text-[#FFB739] text-3xl mb-6">술에 대한 설명</div>
              <div className="text-white text-xl">{datas[0].description}</div>
            </div>
          </div>
          <div className="w-full h-[287px] bg-[#003A66] rounded-lg flex flex-col justify-center mb-10">
            <div className="m-8">
              <div className="text-[#FFB739] text-3xl mb-6">추천 레시피</div>
              <div className="text-[#FFB739] text-2xl mb-6">
                {datas[0].recommendRecipe.recipe}
              </div>
              <div className="text-white text-xl">
                {datas[0].recommendRecipe.description}
              </div>
            </div>
          </div>
          <div className="w-full h-[252px] bg-[#003A66] rounded-lg flex flex-col justify-center mb-10">
            <div className="m-8">
              <div className="text-[#FFB739] text-3xl mb-6">재 료</div>
              <div className="text-white text-xl flex flex-row flex-wrap w-[1050px]">
                {datas[0].materials.map((material, index) => (
                  <div
                    key={material.id}
                    className="text-xl w-[509px] flex justify-between"
                  >
                    <div className={`${index % 2 === 0 ? "" : "ml-8"} mb-6`}>
                      {material.material}
                    </div>
                    <div> {material.volume}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[252px] bg-[#003A66] rounded-lg flex flex-col justify-center mb-10">
            <div className="m-8">
              <div className="text-[#FFB739] text-3xl mb-6">제조 순서</div>
              <div className="text-white text-xl flex flex-col flex-wrap w-[1050px] ">
                {datas[0].steps.map((step, index) => (
                  <div className="text-[#FFB739] text-3xl">
                    {index + 1}.{step.step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
