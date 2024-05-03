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
    const result = await axios.post("/api/recipes", {
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
      foodStep,
    });

    return result.data;
  } catch {
    return "failed to login";
  }
};

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

