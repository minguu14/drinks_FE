import React, { useState } from "react";
import soju from "../../img/soju.webp";
import beer from "../../img/beer.webp";
import wine from "../../img/wine.webp";
import sake from "../../img/sake.webp";
import vodka from "../../img/vodka.webp";
import whiskey from "../../img/whiskey.webp";
import makgeorlli from "../../img/makgeorlli.webp";

export default function AlcoholsExplantion() {
  const [sojuPage, setSojuPage] = useState(true);
  const [beerPage, setBeerPage] = useState(false);
  const [winePage, setWinePage] = useState(false);
  const [sakePage, setSakePage] = useState(false);
  const [vodkaPage, setVodkaPage] = useState(false);
  const [whiskeyPage, setWhiskeyPage] = useState(false);
  const [makgeolliPage, setmakgeolliPage] = useState(false);
  const showSojuPage = () => {
    setSojuPage(true);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showBeerPage = () => {
    setSojuPage(false);
    setBeerPage(true);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };

  const showWinePage = () => {
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(true);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showSakePage = () => {
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(true);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showVodkaPage = () => {
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(true);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showWhiskeyPage = () => {
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(true);
    setmakgeolliPage(false);
  };
  const showmakgeolliPage = () => {
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(true);
  };
  return (
    <div className="flex justify-center">
      <div className="mt-44 w-[1114px] flex">
        <ul className="text-2xl  cursor-pointer">
          <li
            onClick={showSojuPage}
            className={`${
              sojuPage ? "text-blue-600" : ""
            } hover:text-sky-300 mb-8  w-[100px]`}
          >
            소 주
          </li>
          <li
            onClick={showBeerPage}
            className={`${
              beerPage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            맥 주
          </li>
          <li
            onClick={showWinePage}
            className={`${
              winePage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            와 인
          </li>
          <li
            onClick={showSakePage}
            className={`${
              sakePage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            사 케
          </li>
          <li
            onClick={showVodkaPage}
            className={`${
              vodkaPage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            보드카
          </li>
          <li
            onClick={showWhiskeyPage}
            className={`${
              whiskeyPage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            위스키
          </li>
          <li
            onClick={showmakgeolliPage}
            className={`${
              makgeolliPage ? "text-blue-600" : ""
            }  hover:text-sky-300 mb-8`}
          >
            막걸리
          </li>
        </ul>
        {sojuPage && (
          <div>
            <img src={soju} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] h-[800px] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  소주는 한국의 술이자 증류주의 한 종류이다
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">2. 특징</div>
                <div className="text-xl text-white mb-6">
                  과거에는 소주라고 하면 당연히 '진짜 소주'인 증류식 소주를
                  의미했지만 현대에 들어서는 증류식 소주를 흉내내서 만든 술인
                  녹색병으로 대표되는 희석식 소주가 대중적으로 자리
                  잡아버렸고 오히려 오리지널 소주를 전통 소주, 증류식 소주
                  등으로 부른다. 방언으로는 쇠주, 쐬주, 쏘주 등등으로 부르기도
                  한다. 희석식 소주의 경우 알코올 용량 대비 한국에서 가장 저렴한
                  술 중 하나다.한국 대중문화에 심심찮게 등장하다 보니
                  대표적인 한류 음식 중 하나로 꼽힌다. 그러나 희석식 소주는 품질
                  때문에 좋은 평가는 받지 못한다. 대략 싸게 취할 수 있는
                  술이라는 이미지. 술은 즐기지만 한국 특유의 희석식 소주는
                  싫어하는 사람들이 많으며 심지어는 '화학약품' 등으로 부르며
                  극혐하는 경우도 심심치 않게 볼 수 있다.중국 백주와 일본 쇼츄와
                  형제격인 술이며 중국 백주는 당나라 시절에는 소주라고 불렸고
                  현대에도 소주라는 이명을 가지고 있다.그렇잖아도 비싼 청주를
                  증류하여 만들기에 다른 증류주와 마찬가지로 소주 역시
                  전근대에는 귀한 고급 술이었다. 현대에도 전통주 중 소주 및
                  약소주류가 가장 비싼 편이다. 그럼에도 높은 명성으로 한국을
                  대표하는 술로 간주된다. 다른 고급 증류주들과 마찬가지로
                  전통적으로 소주는 양반이나 부자들이나 마실 수 있던
                  호화주류였으며 희석식 소주의 위상과는 정반대였다. 가양주
                  형태로도 많은 소주가 전해져 내려오고 있다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 종류</div>
                <div className="text-xl text-white mb-6">
                  증류식 소주 - 오리지널 소주 약소주 희석식
                  소주 - 참이슬, 처음처럼 등 편의점이나 식당에서 일반적으로
                  접하는 초록색 병 소주 리큐르 소주 담금소주 - 용도에 따른
                  분류로, 증류식과 희석식 모두 존재함 담금주 이 외에 증류식
                  소주와 희석식 소주를 섞어서 만드는 혼합방식의 소주도 존재
                  곡물을 발효해 만든 청주를 밑술로 삼아 소줏고리라고 부르는
                  단식증류기로 증류해 만들어진 소주인 증류식 소주, 증류탑을
                  이용해 대량의 95도 가량의 주정을 생산하여 이를 물로 희석하고
                  기타 첨가물을 추가해서 만드는 희석식 소주 두 가지로 나뉜다.
                </div>
              </div>
            </div>
          </div>
        )}
        {beerPage && (
          <div>
            <img src={beer} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  맥주는 곡물의 전분을 맥아에 포함되는 효소로 당화시킨 뒤,
                  여기에 향신료인 홉을 첨가하여 단행복발효한 술이다. 포도주와
                  함께 세계에서 가장 대중화된 주류 가운데 하나이자, 대표적인
                  발효주다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">a.라거(Lager)</li>
                    <li className="ml-5">
                      특징: 라거는 낮은 온도에서 발효되는 맥주로, 일반적으로
                      깨끗하고 깔끔한 맛을 가집니다.
                    </li>
                    <li className="ml-5">
                      맛: 시원하고 상쾌하며, 쓴맛이 적습니다.
                    </li>
                    <li className="ml-5">예시: 필스너, 헬레스, 보크</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">b.에일(Ale)</li>
                    <li className="ml-5">
                      특징: 에일은 높은 온도에서 발효되는 맥주로, 풍부한 맛과
                      향을 가집니다.
                    </li>
                    <li className="ml-5">
                      맛: 과일 향과 함께 다양한 맛을 느낄 수 있으며, 쓴맛이 더
                      강한 편입니다.
                    </li>
                    <li className="ml-5">
                      예시: 페일 에일, IPA(인디아 페일 에일), 스타우트, 포터
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">c.IPA(India Pale Ale)</li>
                    <li className="ml-5">
                      특징: 높은 알코올 도수와 강한 홉 향이 특징입니다.
                    </li>
                    <li className="ml-5">
                      맛: 쓴맛이 강하고, 시트러스와 같은 과일 향이 느껴집니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">d.스타우트(Stout)</li>
                    <li className="ml-5">
                      특징: 검은 색을 띠며, 강한 몰트 맛과 진한 바디감을
                      가집니다.
                    </li>
                    <li className="ml-5">
                      맛: 커피, 초콜릿, 카라멜 등의 진한 맛이 느껴집니다.
                    </li>
                    <li className="ml-5">예시: 기네스</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">e.포터(Porter)</li>
                    <li className="ml-5">
                      특징: 스타우트와 비슷하지만 더 부드러운 맛을 가집니다.
                    </li>
                    <li className="ml-5">
                      맛: 초콜릿과 같은 달콤한 맛이 특징입니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">f.밀맥주(Wheat Beer)</li>
                    <li className="ml-5">
                      특징: 밀을 주원료로 사용하며, 부드럽고 상쾌한 맛이
                      특징입니다.
                    </li>
                    <li className="ml-5">
                      맛: 바나나, 클로브 등의 과일 향과 향신료 맛이 느껴집니다.
                    </li>
                    <li className="ml-5">예시: 바이젠, 벨지안 화이트</li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  3. 맛있게 먹는법
                </div>
                <div className="text-xl text-white mb-6 pb-8">
                  다른 술에 비해 알콜 도수가 낮고 탄수화물 맛이 나며 구하기도
                  쉬워서 호불호가 적은 술이다. 와인이나 보드카는 유리병에 담아서
                  유리잔에 따라 마시는게 불문율이고, 소주는 전용 잔에 따라
                  마시는게 필수이다, 반면 맥주는 맥주잔, 캔, 병나발 상관없이
                  마실 수 있다.
                </div>
              </div>
            </div>
          </div>
        )}
        {winePage && (
          <div>
            <img src={wine} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  와인은 포도를 주재료로 발효시켜 만든 알코올 음료로, 인류
                  역사에서 오랜 전통을 가지고 있습니다. 와인의 종류는 사용된
                  포도의 품종, 재배 방법, 그리고 발효 및 숙성 과정에 따라 매우
                  다양하며, 각기 다른 맛과 향을 지닙니다
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">a.레드 와인 (Red Wine)</li>
                    <li className="ml-5">
                      특징: 짙은 색상, 높은 탄닌, 강한 구조감
                    </li>
                    <li className="ml-5">
                      맛: 블랙커런트, 블랙체리, 담배, 오크, 피망
                    </li>
                    <li className="ml-5">
                      숙성: 오래 숙성 가능, 시간이 지남에 따라 부드러워짐
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      b.화이트 와인 (White Wine)
                    </li>
                    <li className="ml-5">
                      특징: 다양한 스타일 가능, 오크 숙성 여부에 따라 다름
                    </li>
                    <li className="ml-5">
                      맛: 사과, 배, 바닐라, 버터, 열대 과일
                    </li>
                    <li className="ml-5">
                      숙성: 젊은 와인으로 마시기도 하고, 장기 숙성도 가능
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">c.로제 와인 (Rosé Wine)</li>
                    <li className="ml-5">특징: 가벼운 색상, 상쾌한 맛</li>
                    <li className="ml-5">맛: 딸기, 라즈베리, 로즈힙, 허브</li>
                    <li className="ml-5">숙성: 주로 젊은 와인으로 마심</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      d.스파클링 와인 (Sparkling Wine)
                    </li>
                    <li className="ml-5">
                      특징: 프랑스 샹파뉴 지역에서 생산, 높은 산도와 복합적인 맛
                    </li>
                    <li className="ml-5">
                      맛: 시트러스, 사과, 토스트, 브리오슈, 미네랄
                    </li>
                    <li className="ml-5">
                      숙성: 병 내 2차 발효, 장기 숙성 가능
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      e.디저트 와인 (Dessert Wine)
                    </li>
                    <li className="ml-5">
                      특징: 프랑스 보르도 지역에서 생산, 귀부병 곰팡이로 인해
                      단맛 증가
                    </li>
                    <li className="ml-5">
                      맛: 꿀, 살구, 복숭아, 견과류, 미네랄
                    </li>
                    <li className="ml-5">숙성: 장기 숙성 가능</li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 즐기는 법</div>
                <div className="text-xl text-white mb-6 pb-8">
                  와인은 음식과 함께 즐길 때 그 맛이 더욱 빛을 발합니다. 레드
                  와인은 보통 육류와 잘 어울리며, 화이트 와인은 생선이나 가벼운
                  요리와 조화를 이룹니다. 와인의 적정 음용 온도는 와인의 종류에
                  따라 다르며, 레드 와인은 약간 따뜻하게, 화이트 와인은 차갑게
                  서빙하는 것이 일반적입니다. 와인은 그 다양한 종류와 복합적인
                  맛과 향으로 인해 많은 사람들에게 사랑받고 있으며, 전
                  세계적으로 중요한 문화적, 경제적 가치를 지니고 있습니다.
                </div>
              </div>
            </div>
          </div>
        )}
        {sakePage && (
          <div>
            <img src={sake} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  사케는 일본의 전통주로, 쌀, 물, 누룩, 효모를 발효시켜 만드는
                  알코올 음료입니다. 사케는 일본 문화와 역사에서 중요한 역할을
                  해왔으며, 다양한 종류와 맛으로 세계적으로 사랑받고 있습니다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">a.준마이슈 (Junmai-shu)</li>
                    <li className="ml-5">
                      특징: 정미 비율이 70% 이하인 쌀로 만들어지며, 쌀과 물,
                      누룩, 효모만을 사용하여 양조합니다.
                    </li>
                    <li className="ml-5">
                      맛: 풍부하고 깊은 맛, 쌀의 풍미가 잘 드러남.
                    </li>
                    <li className="ml-5">알코올 도수: 보통 15-17%.</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      b. 혼조조슈 (Honjozo-shu)
                    </li>
                    <li className="ml-5">
                      특징: 정미 비율이 70% 이하인 쌀로 만들어지며, 발효를 돕기
                      위해 소량의 알코올을 추가로 첨가합니다.
                    </li>
                    <li className="ml-5">
                      맛: 깔끔하고 가벼운 맛, 부드러운 향.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">c. 긴조슈 (Ginjo-shu)</li>
                    <li className="ml-5">
                      특징: 정미 비율이 60% 이하인 쌀로 만들어지며, 저온 발효
                      과정을 거칩니다. 준마이 긴조슈는 쌀, 물, 누룩, 효모만을
                      사용합니다.
                    </li>
                    <li className="ml-5">
                      맛: 과일 향과 꽃 향이 강하며, 부드럽고 복잡한 맛.
                    </li>
                    <li className="ml-5">알코올 도수: 보통 15-17%.</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      d.다이긴조슈 (Daiginjo-shu)
                    </li>
                    <li className="ml-5">
                      특징: 정미 비율이 50% 이하인 쌀로 만들어지며, 가장 고급
                      사케 중 하나입니다. 준마이 다이긴조슈는 쌀, 물, 누룩,
                      효모만을 사용합니다.
                    </li>
                    <li className="ml-5">
                      맛: 매우 섬세하고 우아한 맛, 복잡한 향과 뛰어난 균형감.
                    </li>
                    <li className="ml-5">알코올 도수: 보통 15-17%.</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">e.나마자케 (Namazake)</li>
                    <li className="ml-5">
                      특징: 열처리(살균) 과정을 거치지 않은 사케로, 신선하고
                      생동감 있는 맛이 특징입니다.
                    </li>
                    <li className="ml-5">
                      맛: 신선하고 과일 향이 강하며, 상쾌한 맛.
                    </li>
                    <li className="ml-5">알코올 도수: 보통 15-17%.</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">f.아마자케 (Amazake)</li>
                    <li className="ml-5">
                      특징: 발효를 짧게 하여 알코올 도수가 거의 없는 달콤한
                      음료입니다.
                    </li>
                    <li className="ml-5">
                      맛: 달콤하고 크리미한 맛, 디저트로 즐기기 좋음.
                    </li>
                    <li className="ml-5">알코올 도수: 보통 1% 이하.</li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 즐기는 법</div>
                <div className="text-xl text-white mb-6 pb-8">
                  사케는 다양한 온도에서 즐길 수 있으며, 각 온도는 사케의 맛과
                  향을 다르게 표현합니다.
                  <li>
                    냉사케 (히야사케 / 冷酒): 차갑게 (5-10°C) 서빙하여 깔끔하고
                    상쾌한 맛을 즐길 수 있습니다. 주로 프리미엄 사케, 긴조,
                    다이긴조 등이 잘 어울립니다.
                  </li>
                  <li>
                    상온사케 (죠온 / 常温): 실온 (15-20°C)에서 서빙하여 사케의
                    복합적인 향과 맛을 느낄 수 있습니다. 준마이슈, 혼조조슈 등이
                    적합합니다.
                  </li>
                  <li>
                    온사케 (아츠캉 / 熱燗): 따뜻하게 (40-55°C) 서빙하여 부드럽고
                    깊은 맛을 즐길 수 있습니다. 주로 준마이, 혼조조 등의 사케가
                    잘 어울립니다.
                  </li>
                </div>
              </div>
            </div>
          </div>
        )}

        {vodkaPage && (
          <div>
            <img src={vodka} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  보드카는 주로 동유럽과 러시아에서 기원한 강력한 증류주로,
                  무색, 무취, 무미가 특징인 알코올 음료입니다. 보드카는 다양한
                  곡물 또는 감자를 원료로 하여 여러 차례 증류 과정을 거쳐
                  만들어집니다. 전 세계적으로 인기를 끌며, 다양한 칵테일의 기본
                  재료로 사용됩니다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">
                      a.플레인 보드카 (Plain Vodka)
                    </li>
                    <li className="ml-5">
                      특징: 무색, 무취, 무미에 가까운 순수한 보드카입니다.
                    </li>
                    <li className="ml-5">
                      사용 원료: 주로 곡물(밀, 호밀, 옥수수)이나 감자.
                    </li>
                    <li className="ml-5">
                      예시: 스미노프(Smirnoff), 앱솔루트(Absolut), 그레이
                      구스(Grey Goose)
                    </li>
                    <li className="ml-5">
                      용도: 칵테일 베이스로 많이 사용되며, 스트레이트로
                      마시기에도 적합합니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      b. 플레이버드 보드카 (Flavored Vodka)
                    </li>
                    <li className="ml-5">
                      특징: 천연 과일, 허브, 향신료 등을 첨가하여 다양한 맛을
                      냅니다.
                    </li>
                    <li className="ml-5">
                      사용 원료: 기본적으로 플레인 보드카에 향료를 첨가.
                    </li>
                    <li className="ml-5">
                      예시: 앱솔루트 시트론(Absolut Citron), 스미노프
                      바닐라(Smirnoff Vanilla), 시로스(Chirro’s)
                    </li>
                    <li>
                      용도: 다양한 칵테일에 사용되며, 직접 마셔도 좋습니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      c. 프리미엄 보드카 (Premium Vodka)
                    </li>
                    <li className="ml-5">
                      특징: 고급 원료와 정교한 제조 과정을 통해 높은 품질을
                      자랑하는 보드카입니다. 매우 부드러운 맛과 깨끗한 식감을
                      지닙니다.
                    </li>
                    <li className="ml-5">
                      사용 원료: 엄선된 고품질 곡물이나 감자.
                    </li>
                    <li className="ml-5">
                      예시: 벨베데르(Belvedere), 그레이 구스(Grey Goose),
                      체이스(Chase)
                    </li>
                    <li>
                      용도: 고급 칵테일이나 스트레이트로 마시기에 적합합니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      d.슈퍼 프리미엄 보드카 (Super Premium Vodka)
                    </li>
                    <li className="ml-5">
                      특징: 최고급 원료와 첨단 증류 및 여과 기술을 사용하여 만든
                      보드카로, 고유의 맛과 부드러움을 자랑합니다.
                    </li>
                    <li className="ml-5">사용 원료: 최상급 곡물이나 감자.</li>
                    <li className="ml-5">
                      예시: 크리스탈 헤드(Crystal Head), 엘리트
                      보드카(Stolichnaya Elit), 스피릿 오브 타타르(Spirit of
                      Tatar)
                    </li>
                    <li>
                      용도: 고급스럽게 제공되며, 특별한 자리에서 즐기기
                      좋습니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      e.유기농 보드카 (Organic Vodka)
                    </li>
                    <li className="ml-5">
                      특징: 유기농 원료를 사용하여 제조된 보드카로, 환경
                      친화적이고 건강에 더 나은 선택으로 여겨집니다.
                    </li>
                    <li className="ml-5">사용 원료: 유기농 곡물이나 감자.</li>
                    <li className="ml-5">예시: 카스(Kas), 크로스(Cross)</li>
                    <li>
                      용도: 건강과 환경을 고려하는 소비자들에게 적합합니다.
                    </li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 즐기는 법</div>
                <div className="text-xl text-white mb-6 pb-8">
                  보드카는 그 특유의 무색, 무취, 무미 덕분에 다양한 방식으로
                  즐길 수 있는 증류주입니다. 스트레이트로 마시거나 칵테일로
                  만들어 마시는 등 여러 가지 방법으로 보드카를 즐길 수 있습니다.
                  아래는 보드카를 즐기는 몇 가지 방법입니다.
                  <li>a. 스트레이트로 즐기기</li>
                  <li>b. 칵테일로 즐기기</li>
                  <li>c. 음식과 함께 즐기기</li>
                </div>
              </div>
            </div>
          </div>
        )}
        {whiskeyPage && (
          <div>
            <img src={whiskey} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  위스키는 주로 보리, 옥수수, 호밀, 밀 등의 곡물을 발효시켜
                  증류한 후, 오크통에서 숙성하여 만드는 알코올 음료입니다.
                  위스키는 그 기원과 제조 방식에 따라 다양한 종류와 맛을 가지며,
                  전 세계적으로 사랑받는 증류주입니다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">
                      a.스카치 위스키 (Scotch Whisky)
                    </li>
                    <li className="ml-5">
                      특징: 스코틀랜드에서 생산되며, 최소 3년 이상 오크통에서
                      숙성해야 합니다. 보리로 만든 몰트 위스키와 곡물을 혼합한
                      그레인 위스키가 있습니다.
                    </li>

                    <li className="ml-5">
                      맛: 지역에 따라 다양하지만, 일반적으로 스모키하고 피트
                      향이 강한 편입니다.
                    </li>
                    <li className="ml-5">
                      종류: 싱글 몰트, 블렌디드 몰트, 싱글 그레인, 블렌디드
                      그레인, 블렌디드 스카치.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      b. 아이리시 위스키 (Irish Whiskey)
                    </li>
                    <li className="ml-5">
                      특징: 아일랜드에서 생산되며, 최소 3년 이상 오크통에서
                      숙성됩니다. 세 번 증류하는 것이 일반적이어서 부드러운 맛이
                      특징입니다.
                    </li>
                    <li className="ml-5">
                      맛: 부드럽고 가벼우며, 과일 향과 꽃 향이 납니다.
                    </li>
                    <li className="ml-5">
                      종류: 싱글 몰트, 싱글 그레인, 블렌디드, 싱글 포트 스틸.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      c. 버번 위스키 (Bourbon Whiskey)
                    </li>
                    <li className="ml-5">
                      특징: 미국에서 생산되며, 주로 켄터키 주에서 만듭니다.
                      옥수수가 51% 이상 사용되어야 하며, 새로운 탄 오크통에서
                      숙성합니다.
                    </li>
                    <li className="ml-5">
                      맛: 달콤하고 풍부하며, 바닐라, 캐러멜, 나무 향이 강합니다.
                    </li>
                    <li className="ml-5">
                      종류: 스트레이트 버번, 블렌디드 버번.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      d.테네시 위스키 (Tennessee Whiskey)
                    </li>
                    <li className="ml-5">
                      특징: 테네시 주에서 생산되며, 버번과 유사하지만 링컨
                      카운티 공정을 통해 여과하여 부드러운 맛을 냅니다.
                    </li>
                    <li className="ml-5">
                      맛: 부드럽고 달콤하며, 캐러멜과 바닐라 향이 납니다.
                    </li>
                    <li className="ml-5">
                      종류: 주요 브랜드로 잭 다니엘스가 있습니다.
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">
                      e.라이 위스키 (Rye Whiskey)
                    </li>
                    <li className="ml-5">
                      특징: 스카치 위스키의 영향을 받아 일본에서 생산됩니다.
                      주로 스카치와 비슷한 제조 과정을 거칩니다.
                    </li>
                    <li className="ml-5">
                      맛: 정교하고 섬세하며, 과일 향과 꽃 향이 특징입니다.
                    </li>
                    <li className="ml-5">종류: 싱글 몰트, 블렌디드.</li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 즐기는 법</div>
                <div className="text-xl text-white mb-6 pb-8">
                  위스키는 그 복잡한 맛과 향 덕분에 다양한 방식으로 즐길 수 있는
                  술입니다. 올바른 음용 방법과 함께 위스키를 즐기면 그 풍미를
                  더욱 깊게 느낄 수 있습니다. 아래는 위스키를 즐기는 몇 가지
                  방법입니다.
                  <li>a. 스트레이트로 즐기기</li>
                  <li>b. 칵테일로 즐기기</li>
                  <li>c. 물을 첨가하여 즐기기</li>
                </div>
              </div>
            </div>
          </div>
        )}
        {makgeolliPage && (
          <div>
            <img src={makgeorlli} alt="" className="w-[536px] h-[438px] " />
            <div className="bg-[#003A66] rounded-lg">
              <div className="mx-8">
                <div className="text-3xl text-[#FFB739] mb-6 pt-8">1. 개요</div>
                <div className="text-xl text-white mb-6">
                  막걸리는 한국의 전통 발효주로, 쌀이나 밀을 주원료로 하여
                  누룩과 물을 섞어 발효시킨 알코올 음료입니다. 막걸리는 알코올
                  도수가 비교적 낮고, 부드러운 맛과 약간의 단맛이 특징입니다.
                  전통적으로 한국 농민들이 즐겨 마셨던 술로, 최근에는 다양한
                  맛과 현대적인 스타일로 재해석되어 널리 사랑받고 있습니다.
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">
                  2. 특징 및 종류
                </div>
                <div className="text-xl text-white mb-6">
                  <ul>
                    <li className="text-[#FFB739]">a.전통 막걸리</li>
                    <li className="ml-5">
                      특징: 가장 기본적인 형태의 막걸리로, 쌀과 누룩, 물을
                      주원료로 하여 발효시킵니다.
                    </li>

                    <li className="ml-5">
                      맛: 부드럽고 약간 단맛이 있으며, 쌀의 풍미가 잘
                      살아있습니다.
                    </li>
                    <li className="ml-5">
                      알코올 도수: 6-8% 정도로 낮은 편입니다.
                    </li>
                    <li>예시: 서울 장수 막걸리, 부산 생탁</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">b. 생막걸리</li>
                    <li className="ml-5">
                      특징: 열처리하지 않은 막걸리로, 발효가 계속 진행되어 맛이
                      더욱 신선합니다.
                    </li>
                    <li className="ml-5">
                      맛: 발효가 지속되면서 약간의 탄산이 생기며, 신선한 풍미를
                      느낄 수 있습니다.
                    </li>
                    <li className="ml-5">알코올 도수: 6-8%.</li>
                    <li>예시: 장수 생막걸리</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">c. 과일 막걸리</li>
                    <li className="ml-5">
                      특징: 과일즙이나 과일향을 첨가하여 만든 막걸리로, 다양한
                      맛을 즐길 수 있습니다.
                    </li>
                    <li className="ml-5">
                      맛: 과일의 향과 맛이 더해져 달콤하고 상쾌한 맛을 냅니다.
                    </li>
                    <li className="ml-5">알코올 도수: 4-6%.</li>
                    <li>예시: 복숭아 막걸리, 딸기 막걸리, 블루베리 막걸리</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">d.흑미 막걸리</li>
                    <li className="ml-5">
                      특징: 흑미를 사용하여 만든 막걸리로, 고유의 색깔과 맛을
                      가지고 있습니다.
                    </li>
                    <li className="ml-5">
                      맛: 흑미의 구수하고 깊은 맛이 특징입니다.
                    </li>
                    <li className="ml-5">알코올 도수: 6-8%.</li>
                    <li>예시: 백운산 흑미 막걸리</li>
                  </ul>
                  <ul>
                    <li className="text-[#FFB739]">e.약주/청주</li>
                    <li className="ml-5">
                      특징: 막걸리를 더 정제하여 맑게 만든 술로, 발효 후에 여과
                      과정을 거쳐 맑은 액체만을 남깁니다.
                    </li>
                    <li className="ml-5">
                      맛: 깨끗하고 깔끔한 맛, 약간의 단맛과 풍미가 있습니다.
                    </li>
                    <li className="ml-5">
                      알코올 도수: 12-16%로 막걸리보다 높습니다.
                    </li>
                    <li>예시: 이화주, 법주</li>
                  </ul>
                </div>
                <div className="text-3xl text-[#FFB739] mb-6">3. 즐기는 법</div>
                <div className="text-xl text-white mb-6 pb-8">
                  <li>a. 가볍게 흔들어 즐기기</li>
                  <li>b. 전통적인 막걸리 잔 사용해서 즐기기</li>
                  <li>c. 음슥과 즐기기</li>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
