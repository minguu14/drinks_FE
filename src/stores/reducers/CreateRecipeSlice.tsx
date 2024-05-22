import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ingredient {
  id: number;
  material: string;
  quantity: string;
}

export interface Step {
  id: number;
  description: string;
  imageUrl: string;
}

export interface Recipe {
  id: number;
  imageUrl: string;
  name: string;
  introduce: string;
  types: {
    soju: boolean;
    beer: boolean;
    wine: boolean;
    sake: boolean;
    vodka: boolean;
    whiskey: boolean;
    makgeolli: boolean;
  };
  ingredients: Ingredient[];
  steps: Step[];
}

const initialState: Recipe[] = [];

export const CreateRecipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.push({
        id: state.length + 1,
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        introduce: action.payload.introduce,
        types: action.payload.types,
        ingredients: action.payload.ingredients,
        steps: action.payload.steps,
      });
    },
    updateRecipe(state, action: PayloadAction<Recipe>) {
      const index = state.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteRecipe(state, action: PayloadAction<number>) {
      return state.filter((recipe) => recipe.id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } =
  CreateRecipeSlice.actions;

export default CreateRecipeSlice.reducer;
