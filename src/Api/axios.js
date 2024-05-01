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
    const result = await axios.post("http://43.202.87.84/members/login", {
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
