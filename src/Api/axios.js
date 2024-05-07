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

export const SignUpApi = async (name, userId, password, email) => {
  try {
    const response = await axios.post("/api/sighup", {
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

export const CheckUserId = async (userId) => {
  try {
    const response = await axios.post("/api/users/signup", {
      userId: userId,
    });
    return response.data;
  } catch {
    return "error";
  }
};
