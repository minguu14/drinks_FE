import uuid from "react-uuid";
import { Link } from "react-router-dom";
import communityStore from "../store/store";
import { ChangeEvent, useState } from "react";
import image1 from "../img/image1.jpg"
import image2 from "../img/image2.jpg"
import image3 from "../img/image3.jpg"

export default function CreateCommunity() {
  const { createCommunity } = communityStore();
  const [myImage, setMyImage] = useState<string>(image1);
  const [communityName, setCommunityName] = useState<string>('');
  const [communityArea, setCommunityArea] = useState<string>('');
  const [communityDescription, setCommunityDescription] = useState<string>('');
  const [checkValue, setCheckValue] = useState<string>("public");

  const communityPublic = (e: ChangeEvent<HTMLInputElement>) => {
    let checkItem = document.getElementsByName("checkType");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    setCheckValue(e.target.defaultValue);
  }

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMyImage(imageUrl);
    }
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setCommunityDescription(e.target.value);
  }

  const onChangeCommunityName = (e: ChangeEvent<HTMLInputElement>) => {
    setCommunityName(e.target.value);
  }

  const onChangeCommunityArea = (e: ChangeEvent<HTMLInputElement>) => {
    setCommunityArea(e.target.value);
  }

  const clickImage = (image: string) => {
    switch(image){
        case 'image1': setMyImage(image1);
        break;
        case 'image2': setMyImage(image2);
        break;
        case 'image3': setMyImage(image3);
        break;
        default:
        break;
    }
  }

  return (
    <div className="flex justify-center mt-[200px]">
      <div className="w-[1350px]">
        <p className="text-[32px] mb-10">모임 이름</p>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          className="border-b-2 w-[1300px] h-[50px] mb-20"
          onChange={onChangeCommunityName}
        />
        <div className="flex">
          <div className="border-2 w-[350px] h-[250px]">
            <img src={myImage ? myImage : image1} alt="myImage" className="w-full h-full" />
          </div>
          <div className="ml-[100px] mt-[20px]">
            <div className="mb-5">사진 선택</div>
            <div className="flex gap-x-3">
              <div className="w-[160px] h-[120px] border-2 flex justify-center items-center">
                <label htmlFor="fileInput" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  이미지 불러오기
                </label>
                <input
                  id="fileInput"
                  type="file"
                  onChange={onChangeImage}
                  style={{ display: "none" }}
                />
              </div>
              <div className="w-[160px] h-[120px] border-2 hover:cursor-pointer" onClick={()=>clickImage('image1')}><img src={image1} alt="image1" className="w-full h-full"/></div>
              <div className="w-[160px] h-[120px] border-2 hover:cursor-pointer" onClick={()=>clickImage('image2')}><img src={image2} alt="image2" className="w-full h-full"/></div>
              <div className="w-[160px] h-[120px] border-2 hover:cursor-pointer" onClick={()=>clickImage('image3')}><img src={image3} alt="image3" className="w-full h-full"/></div>
            </div>
          </div>
        </div>

        <p className="text-[20px] mt-20 mb-10">모임 설명</p>
        <input
          type="text"
          placeholder="모임에 대해 간단한 설명을 입력해주세요"
          className="border-b-2 w-[1300px] h-[50px] mb-10"
          onChange={onChangeDescription}
        />

        <p className="text-[20px] mt-20 mb-10">모임 지역</p>
        <input
          type="text"
          placeholder="지역을 입력해주세요"
          className="border-b-2 w-[1300px] h-[50px] mb-10"
          onChange={onChangeCommunityArea}
        />
        <p className="text-[20px] mt-20">모임 공개</p>
        <div className="flex mt-10 gap-x-[130px]">
          <div className="p-2">
            <div className="flex items-center gap-x-2">
              <label htmlFor="communityPublic">공개</label>
              <input 
              type="checkbox" 
              id="communityPublic"
              name="checkType"
              value="public"
              onChange={(e)=>communityPublic(e)}
              checked={checkValue === "public"}
              className="w-[25px] h-[25px]" />
            </div>
            <div className="text-[10px] mt-2">모두에게 공개됩니다</div>
          </div>
          <div className="p-2">
            <div className="flex items-center gap-x-2">
            <label htmlFor="communityPrivate">비공개</label>
              <input 
              type="checkbox" 
              id="communityPrivate"
              name="checkType"
              value="private"
              onChange={(e)=>communityPublic(e)}
              checked={checkValue === "private"}
              className="w-[25px] h-[25px]" />
            </div>
            <div className="text-[10px] mt-2">
              모임에 가입한 사람만 게시물을 볼 수 있습니다
            </div>
          </div>
        </div>

        <p className="mt-10 text-[20px]">태그</p>
        <div className="flex mt-10 mb-20 gap-x-4">
          <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">
            소주
          </div>
          <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">
            맥주
          </div>
          <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">
            양주
          </div>
          <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">
            샴페인
          </div>
          <div className="w-[60px] h-[25px] border-2 rounded-[10px] text-center">
            와인
          </div>
        </div>

        <div className="flex justify-center gap-x-10 mb-20">
          <Link to="/">
            <button className="w-[150px] h-[80px] rounded-[10px] bg-red-500 text-white text-[20px]">
              취소
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={() =>
                createCommunity({
                  id: uuid(),
                  img: myImage,
                  description: communityDescription,
                  tag1: "소주",
                  tag2: "맥주",
                  area: communityArea,
                  communityName: communityName,
                  member: 1,
                  recentChat: "10분 전 마지막 대화",
                  isPublic: checkValue,
                  isPopular: false,
                  isNew: true,
                })
              }
              className="w-[150px] h-[80px] rounded-[10px] bg-blue-500 text-white text-[20px]"
            >
              생성
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
