import React, { useState } from "react";

export default function AlcoholicCategory() {
  const [allPage, setAllPage] = useState(false);
  const [sojuPage, setSojuPage] = useState(false);
  const [beerPage, setBeerPage] = useState(false);
  const [winePage, setWinePage] = useState(false);
  const [sakePage, setSakePage] = useState(false);
  const [vodkaPage, setVodkaPage] = useState(false);
  const [whiskeyPage, setWhiskeyPage] = useState(false);
  const [makgeolliPage, setmakgeolliPage] = useState(false);

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
  return (
    <div className="w-[1300px] ml-[357px]">
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
    </div>
  );
}
