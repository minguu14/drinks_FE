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

// 로그인 API 요청
export const LoginApi = async (userId, password) => {
  try {
    const response = await axios.post("/api/login", { userId, password });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return "failed to login";
  }
};

// 아이디 찾기
export const FindIdApi = async (name, email) => {
  try {
    const response = await axios.post("/api/find-userId", {
      name: name,
      email: email,
    });
    return response.data;
  } catch {
    return "failed to login";
  }
};

// 비밀번호 찾기
export const FindPasswordApi = async (name, userId, email) => {
  try {
    const response = await axios.post("/api/find-password", {
      name: name,
      userId: userId,
      email: email,
    });
    return response.data;
  } catch {
    return "failed to login";
  }
};

// 비밀번호 변경
export const ChangePasswordApi = async (name, password) => {
  try {
    const response = await axios.post("/api/reset-password", {
      userId: name,
      newPassword: password,
      newPasswordCheck: password,
    });
    return response.data;
  } catch {
    return "failed to login";
  }
};

// 주류 모아보기 데이터 가져오기
export const Alcoholsdata = async () => {
  try {
    const response = await axios.get("/api/api/alcohols", {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
      params: {
        type: "soju",
        page: 0,
        size: 10,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
    return "error";
  }
};
