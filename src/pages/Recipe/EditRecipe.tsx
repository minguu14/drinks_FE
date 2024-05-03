import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CameraOutlined } from "@ant-design/icons";
import { createRecipe } from "../../Api/axios";
import alcoholicTest from "../../img/alcoholicTest.webp";
import { UserRecipeList } from "../../Api/axios";

type foodIngredientField = {
  id: number;
  value: string;
  value2: string;
};

type Step = {
  id: number;
  value: string;
  imageUrl: string;
};

const items = {
  id: 1,
  imageUrl: "alcoholicTest",
  createRecipeName: "alcoholicTest",
  createRecipeIntroduce: "alcoholicTest",
  sojuType: true,
  beerType: false,
  wineType: true,
  sakeType: false,
  vodkaType: false,
  whiskeyType: false,
  makgeolliType: false,
  foodIngredient: [
    { id: 1, value: "안녕", value2: "하세요" },
    { id: 2, value: "안녕2", value2: "하세요2" },
  ],
  foodStep: [{ id: 1, value: "test", imageUrl: "alcoholicTesdt" }],
};

console.log(items);
export default function EditRecipe() {
  const [imageUrl, setImageUrl] = useState<string>(items.imageUrl);
  const [createRecipeName, setCreateRecipeName] = useState<string>(
    items.createRecipeName
  );
  const [createRecipeIntroduce, setCreateRecipeIntroduce] = useState<string>(
    items.createRecipeIntroduce
  );
  const [sojuType, setSojuType] = useState<boolean>(items.sojuType);
  const [beerType, setBeerType] = useState<boolean>(items.beerType);
  const [wineType, setWineType] = useState<boolean>(items.wineType);
  const [sakeType, setSakeType] = useState<boolean>(items.sakeType);
  const [vodkaType, setVodkaType] = useState<boolean>(items.vodkaType);
  const [whiskeyType, setWhiskeyType] = useState<boolean>(items.whiskeyType);
  const [makgeolliType, setMakgeolliType] = useState<boolean>(
    items.makgeolliType
  );
  const [foodIngredient, setFoodIngredient] = useState<foodIngredientField[]>(
    items.foodIngredient
  );

  const [foodStep, setFoodStep] = useState<Step[]>(items.foodStep);

  //   const [imageUrl, setImageUrl] = useState<string>("");
  //   const [createRecipeName, setCreateRecipeName] = useState("");
  //   const [createRecipeIntroduce, setCreateRecipeIntroduce] = useState("");
  //   const [sojuType, setSojuType] = useState(false);
  //   const [beerType, setBeerType] = useState(false);
  //   const [wineType, setWineType] = useState(false);
  //   const [sakeType, setSakeType] = useState(false);
  //   const [vodkaType, setVodkaType] = useState(false);
  //   const [whiskeyType, setWhiskeyType] = useState(false);
  //   const [makgeolliType, setMakgeolliType] = useState(false);
  //   const [foodIngredient, setFoodIngredient] = useState([
  //     { id: 1, value: "", value2: "" },
  //   ]);
  //   const [foodStep, setFoodStep] = useState<Step[]>([
  //     { id: 1, value: "", imageUrl: "" },
  //   ]);
  // RECIPEDATA
  useEffect(() => {
    const UserRecipeData = async () => {
      const data = await UserRecipeList(); // 레시피 데이터 가져오기
      if (data) {
        setImageUrl(items.imageUrl);
        setCreateRecipeName(items.createRecipeName);
        setCreateRecipeIntroduce(items.createRecipeIntroduce);
        setSojuType(items.sojuType);
        setBeerType(items.beerType);
        setWineType(items.wineType);
        setSakeType(items.sakeType);
        setVodkaType(items.vodkaType);
        setWhiskeyType(items.whiskeyType);
        setMakgeolliType(items.makgeolliType);
        setFoodIngredient(items.foodIngredient);
        setFoodStep(items.foodStep);
      }
    };

    UserRecipeData();
  }, []);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  // 사진추가
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
    }
  };
  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const onChangeCreateRecipeName = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateRecipeName(e.target.value);
  };
  const onChangeCreateRecipeIntroduce = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateRecipeIntroduce(e.target.value);
  };
  // 재료정보 추가, 삭제
  const addFoodIngredient = () => {
    const newData = { id: foodIngredient.length + 1, value: "", value2: "" };
    setFoodIngredient([...foodIngredient, newData]);
  };

  const removeFoodIngredient = () => {
    if (foodIngredient.length > 1) {
      setFoodIngredient(foodIngredient.slice(0, foodIngredient.length - 1));
    }
  };
  // 재료 정보 input value
  const onChangeFoodIngredientValue = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedFoodIngredient = foodIngredient.map((data, idx) => {
      if (idx === index) {
        return { ...data, value: e.target.value };
      }
      return data;
    });
    setFoodIngredient(updatedFoodIngredient);
  };
  // 재료 정보 input value2
  const onChangeFoodIngredientValue2 = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedFoodIngredient = foodIngredient.map((data, idx) => {
      if (idx === index) {
        return { ...data, value2: e.target.value };
      }
      return data;
    });
    setFoodIngredient(updatedFoodIngredient);
  };

  // 제조순서 추가, 삭제
  const addFoodStep = () => {
    const newData = { id: foodStep.length + 1, value: "", imageUrl: "" };
    setFoodStep([...foodStep, newData]);
  };

  const removeFoodStep = () => {
    if (foodStep.length > 1) {
      setFoodStep(foodStep.slice(0, foodStep.length - 1));
    }
  };

  // 제조순서 사진 추가

  const handleImageChange = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      const newSteps = foodStep.map((step) => {
        if (step.id === id) {
          return { ...step, imageUrl: fileUrl };
        }
        return step;
      });
      setFoodStep(newSteps);
    }
  };

  const handleDivClickStep = (index: number) => {
    fileInputRefs.current[index]?.click();
  };
  // step 별로 textvalue 주기
  const onChangeStepValue = (
    index: number,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedSteps = foodStep.map((step, idx) => {
      if (idx === index) {
        return { ...step, value: e.target.value };
      }
      return step;
    });
    setFoodStep(updatedSteps);
  };
  // 데이터를 서버에 전송하는 함수
  const handleSubmit = async () => {
    const response = await createRecipe(
      imageUrl,
      createRecipeName,
      createRecipeIntroduce,
      sojuType,
      beerType,
      wineType,
      sakeType,
      vodkaType,
      whiskeyType,
      makgeolliType,
      foodIngredient,
      foodStep
    );

    if (response) {
      console.log("Recipe created successfully:", response);
      // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
    } else {
      console.error("Failed to create recipe");
      // 실패 처리, 예를 들어 에러 메시지 표시 등
    }
  };

  return (
    <div>
      <section className="ml-[404px] mt-[200px]">
        <div className="text-4xl mb-16">레시피 등록</div>
        <form className="flex">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onChangeImage}
            style={{ display: "none" }} // input을 숨김
            accept="image/*"
          />
          {imageUrl ? (
            <div
              className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-lg flex flex-col justify-center items-center ml-[97px] mr-[34px] overflow-hidden"
              onClick={handleDivClick}
            >
              <img src={imageUrl} alt="Uploaded Image" className="size-full" />
            </div>
          ) : (
            <div
              className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-lg flex flex-col justify-center items-center ml-[97px] mr-[34px]"
              onClick={handleDivClick}
            >
              <CameraOutlined className="text-[206px] text-white" />
              <div className="text-2xl text-white">사진을 등록 해주세요</div>
            </div>
          )}

          <form>
            <div className="flex flex-row justify-center items-center">
              <div className="text-2xl mr-3">레시피 제목</div>
              <div className="w-[546px] h-[66px] border-2 border-sky-500 bg-sky-200 rounded-lg flex">
                <input
                  type="text"
                  placeholder="예)소곡주"
                  className="w-full text-2xl  border-sky-500 bg-sky-200 rounded-lg placeholder-white m-3"
                  value={createRecipeName}
                  onChange={onChangeCreateRecipeName}
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="mr-14">
                <div className="text-2xl">
                  종 류 <p className="text-sm">(중복 선택이</p>
                  <p className="text-sm">가능합니다.)</p>
                </div>
              </div>
              <ul className="flex flex-row w-[546px] flex-wrap">
                <li
                  className={`${
                    sojuType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 cursor-pointer`}
                  onClick={() => setSojuType(!sojuType)}
                >
                  소 주
                </li>
                <li
                  className={`${
                    beerType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 ml-6 cursor-pointer`}
                  onClick={() => setBeerType(!beerType)}
                >
                  맥 주
                </li>
                <li
                  className={`${
                    wineType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 ml-6 cursor-pointer`}
                  onClick={() => setWineType(!wineType)}
                >
                  와 인
                </li>
                <li
                  className={`${
                    sakeType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 ml-6 cursor-pointer`}
                  onClick={() => setSakeType(!sakeType)}
                >
                  사 케
                </li>
                <li
                  className={`${
                    vodkaType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 ml-6 cursor-pointer`}
                  onClick={() => setVodkaType(!vodkaType)}
                >
                  보드카
                </li>
                <li
                  className={`${
                    whiskeyType ? "text-black" : "text-white"
                  } w-[71px] h-[47px] border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 ml-6 cursor-pointer`}
                  onClick={() => setWhiskeyType(!whiskeyType)}
                >
                  위스키
                </li>
                <li
                  className={`${
                    makgeolliType ? "text-black" : "text-white"
                  } w-[71px] h-[47px]  border-2 text-2xl flex justify-center items-center rounded-lg  border-sky-500 bg-sky-200 mt-4 cursor-pointer`}
                  onClick={() => setMakgeolliType(!makgeolliType)}
                >
                  막걸리
                </li>
              </ul>
            </div>
            <div className="flex flex-row mt-6">
              <div className="text-2xl mr-10">요리소개</div>
              <div className="w-[546px] h-[110px] border-2 border-sky-500 bg-sky-200 rounded-lg flex items-start">
                <textarea
                  placeholder="이 레시피 탄생 배경을 적어주세요"
                  className="w-full h-full text-2xl border-sky-500 bg-sky-200 rounded-lg placeholder-white resize-none"
                  value={createRecipeIntroduce}
                  onChange={onChangeCreateRecipeIntroduce}
                />
              </div>
            </div>
          </form>
        </form>
      </section>
      <section className="ml-[404px] mt-16">
        <form className="w-[1115px] flex justify-between mb-4">
          <div className="text-2xl">재료 정보</div>
          <div className="flex">
            <div
              className="w-[71px] h-[47px]  border-2 border-sky-500 bg-sky-200 rounded-lg text-2xl flex justify-center items-center mr-4 cursor-pointer"
              onClick={removeFoodIngredient}
            >
              삭제
            </div>
            <div
              className="w-[71px] h-[47px]  border-2 border-sky-500 bg-sky-200 rounded-lg text-2xl flex justify-center items-center cursor-pointer"
              onClick={addFoodIngredient}
            >
              추가
            </div>
          </div>
        </form>
        <form className="w-[1115px] flex flex-row flex-wrap">
          {foodIngredient.map((data, index) => (
            <form className={`${data.id % 2 !== 0 ? "mr-5" : ""} mb-3`}>
              <div className="flex -row">
                <div className="w-[384px] h-[72px] flex justify-center items-center border-2 border-sky-500 bg-sky-200 rounded-lg mr-5">
                  <input
                    type="text"
                    placeholder="예) 얼그레이 시럽"
                    className="m-3 w-[360px] h-[48px] bg-sky-200 placeholder-white text-2xl"
                    value={foodIngredient[index].value}
                    onChange={(e) => onChangeFoodIngredientValue(index, e)}
                  />
                </div>
                <div className="w-[143px] h-[72px] flex justify-center items-center border-2 border-sky-500 bg-sky-200 rounded-lg">
                  <input
                    type="text"
                    placeholder="예) ml"
                    className="m-3 w-[120px] h-[48px] bg-sky-200 placeholder-white text-2xl"
                    value={foodIngredient[index].value2}
                    onChange={(e) => onChangeFoodIngredientValue2(index, e)}
                  />
                </div>
              </div>
            </form>
          ))}
        </form>
      </section>
      <section className="ml-[404px] mt-16">
        <form className="w-[1115px] flex justify-between mb-4">
          <div className="text-2xl">제조 순서</div>
          <div className="flex">
            <div
              className="w-[71px] h-[47px]  border-2 border-sky-500 bg-sky-200 rounded-lg text-2xl flex justify-center items-center mr-4"
              onClick={removeFoodStep}
            >
              삭제
            </div>
            <div
              className="w-[71px] h-[47px]  border-2 border-sky-500 bg-sky-200 rounded-lg text-2xl flex justify-center items-center"
              onClick={addFoodStep}
            >
              추가
            </div>
          </div>
        </form>
        {foodStep.map((data, index) => (
          <form key={data.id} className={`${data.id > 1 ? "mt-8" : ""} flex`}>
            <input
              type="file"
              ref={(el) => (fileInputRefs.current[index] = el)}
              onChange={(e) => handleImageChange(data.id, e)}
              style={{ display: "none" }}
              accept="image/*"
            />
            <div
              className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-lg flex flex-col justify-center items-center ml-[97px] mr-[34px] overflow-hidden"
              onClick={() => handleDivClickStep(index)}
            >
              {data.imageUrl ? (
                <img
                  src={data.imageUrl}
                  alt={`Uploaded for step ${data.id}`}
                  className="size-full"
                />
              ) : (
                <>
                  <CameraOutlined className="text-[206px] text-white" />
                  <div className="text-2xl text-white">
                    사진을 등록 해주세요
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="text-2xl mb-3">STEP{data.id}</div>

              <textarea
                placeholder="이 레시피 탄생 배경을 적어주세요"
                className="w-[488px] h-[190px] text-2xl border-2 border-sky-500 bg-sky-200 rounded-lg placeholder-white flex items-start resize-none"
                value={foodStep[index].value}
                onChange={(e) => onChangeStepValue(index, e)}
              />
            </div>
          </form>
        ))}
      </section>
      <div className="ml-[404px] w-[1115px] flex justify-center my-20 ">
        <button
          className="w-[166px] h-[66px] border-2 rounded-lg border-sky-500 bg-sky-200 text-2xl flex justify-center items-center mr-6"
          onClick={handleSubmit}
        >
          변 경
        </button>
        <Link to="/">
          <button className="w-[166px] h-[66px] border-2 rounded-lg border-sky-500 bg-sky-200 text-2xl flex justify-center items-center">
            취 소
          </button>
        </Link>
      </div>
    </div>
  );
}
