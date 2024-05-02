import uuid from "react-uuid";
import { Link, useNavigate } from "react-router-dom";
import communityStore from "../../store/store";
import { ChangeEvent, useState } from "react";
import image1 from "../../img/image1.jpg"
import image2 from "../../img/image2.jpg"
import image3 from "../../img/image3.jpg"
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue } from "../../models/type";
import Tag from "./Tag/Tag";

export default function CreateCommunity() {
  const { createCommunity } = communityStore();
  const [myImage, setMyImage] = useState<string>(image1);
  const [checkValue, setCheckValue] = useState<string>("public");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [tagError, setTagError] = useState<string>("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = data => {
    if (!selectedTag) {
      setTagError("태그를 선택해주세요!");
      return;
    }
    createCommunity({
      id: uuid(),
      thumbnail_url: myImage,
      description: data.description,
      tag1: selectedTag,
      tag2: "술 취향 타입",
      area: data.area,
      communityName: data.title,
      member: 1,
      last_chat_time: "10분 전 마지막 대화",
      isPublic: checkValue,
      isPopular: true,
      isNew: false,
    })
    navigate('/');
  }

  const tags = [
    "소주",
    "맥주",
    "전통주",
    "양주",
    "샴페인",
    "와인",
    "막걸리",
    "사케",
    "위스키",
    "복분자",
  ]

  const communityPublic = (e: ChangeEvent<HTMLInputElement>) => {
    const checkItem = document.getElementsByName("checkType");
    Array.prototype.forEach.call(checkItem, (el) => {
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
    <form className="flex justify-center mt-[200px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[1350px]">
        <label htmlFor="title"><p className="text-[32px] mb-10">모임 이름</p></label>
        <input
          type="text"
          id="title"
          placeholder="모임 이름을 입력해주세요"
          className="border-b-2 w-[1300px] h-[50px] mb-2 p-2"
          {...register('title', {required: true, maxLength: 10})}
        />
        {errors.title && errors.title.type === 'required' && (
          <p className="text-red-500">모임 이름을 입력해주세요!</p>
        )}
        {errors.title && errors.title.type === 'maxLength' && (
          <p className="text-red-500">모임 이름을 10자 이내로 입력해주세요!</p>
        )}
        <div className="flex mt-20">
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

        <label htmlFor="description"><p className="text-[20px] mt-20 mb-10">모임 설명</p></label>
        <input
          type="text"
          id="description"
          placeholder="모임에 대해 간단한 설명을 입력해주세요"
          className="border-b-2 w-[1300px] h-[50px] mb-10 p-2"
          {...register('description', {required: true, maxLength: 100})}
        />
        {errors.description && errors.description.type === 'required' && (
          <p className="text-red-500">모임에 대한 설명을 입력해주세요!</p>
        )}
        {errors.description && errors.description.type === 'maxLength' && (
          <p className="text-red-500">모임에 대한 설명을 100자 이내로 입력해주세요!</p>
        )}

        <label htmlFor="area"><p className="text-[20px] mt-20 mb-10">모임 지역</p></label>
        <input
          type="text"
          id="area"
          placeholder="모임 지역을 입력해주세요 ex) 인천 or 부평구"
          className="border-b-2 w-[1300px] h-[50px] mb-10 p-2"
          {...register('area', {required: true, maxLength: 3})}
        />
        {errors.area && errors.area.type === 'required' && (
          <p className="text-red-500">모임 지역을 입력해주세요!</p>
        )}
        {errors.area && errors.area.type === 'maxLength' && (
          <p className="text-red-500">모임 지역을 3자 이내로 입력해주세요!</p>
        )}

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
              className="w-[25px] h-[25px]"/>
            </div>
            <div className="text-[10px] mt-2">
              모임에 가입한 사람만 게시물을 볼 수 있습니다
            </div>
          </div>
        </div>

        <p className="mt-10 text-[20px]">태그</p>
        <div className="flex mt-10 mb-10 gap-x-4">
        { tags.map((tag, index) => (
          <Tag
          key={index}
          tag={tag}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          />
        ))
        }
        </div>
        {tagError && <p className="text-red-500">{tagError}</p>}
        <div className="flex justify-center gap-x-10 mb-20">
          <Link to="/">
            <button className="w-[150px] h-[80px] rounded-[10px] bg-red-500 text-white text-[20px]">
              취소
            </button>
          </Link>
            <button
              className="w-[150px] h-[80px] rounded-[10px] bg-blue-500 text-white text-[20px]"
              type="submit"
            >
              생성
            </button>
        </div>
      </div>
    </form>
  );
}
