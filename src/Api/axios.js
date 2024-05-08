import axios from "axios";

//createRecipe
export const createRecipe = async (
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
) => {
  try {
    const result = await axios.post("/api/api/recipes/create", {
      mainImageUrl: imageUrl,
      name: createRecipeName,
      description: createRecipeIntroduce,
      types: {
        sojuType: sojuType,
        beerType: beerType,
        wineType: wineType,
        sakeType: sakeType,
        vodkaType: vodkaType,
        whiskeyType: whiskeyType,
        makgeolliType: makgeolliType,
      },
      ingredients: foodIngredient,
      steps: foodStep,
    });

    return result.data;
  } catch {
    return "failed to login";
  }
};

console.log(createRecipe);

// user recipe list
export const UserRecipeList = async (refreshToken) => {
  try {
    const response = await axios.get("", {
      params: { refreshToken },
    });
    return response.data;
  } catch {
    return "error";
  }
};

// 회원가입
export const SignUpApi = async (name, userId, password, email) => {
  try {
    const response = await axios.post("/api/signup", {
      userId: userId,
      password: password,
      email: email,
      name: name,
    });
    return response.data;
  } catch {
    return "error";
  }
};

// 아이디 중복 확인
export const CheckUserId = async (userId) => {
  try {
    const response = await axios.post("/api/signup/check-userid", { userId });
    return {
      available: true,
      message: "사용 가능한 아이디입니다.",
    };
  } catch (error) {
    if (error.response && error.response.status === 409) {
      return {
        available: false,
        message: "이미 사용 중인 아이디입니다.",
      };
    }
    return {
      available: false,
      message: "오류가 발생했습니다.",
    };
  }
};

// 로그인
export const LoginApi = async (userId, password) => {
  try {
    const response = await axios.post("/api/login", { userId, password });
    return response.data;
  } catch {
    return "failed to login";
  }
};

// export const LoginApi = async (userId, password) => {
//   try {
//     const response = await axios.post("/login", { userId, password });
//     const { accessToken, refreshToken } = response.data;

//     // Access Token과 Refresh Token을 각각 저장
//     localStorage.setItem("access", accessToken);
//     localStorage.setItem("refresh", refreshToken);

//     return { accessToken, refreshToken };
//   } catch (error) {
//     console.error("Login failed:", error);
//     return "failed to login";
//   }
// };
// 아이디 찾기
export const FindIdApi = async (name, email) => {
  try {
    const response = await axios.post("/api/find-userId", { name, email });
    return response.data;
  } catch {
    return "failed to login";
  }
};
