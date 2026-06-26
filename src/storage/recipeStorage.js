import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@recipe_collection:recipes';

export async function getRecipes() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function getRecipeById(id) {
  const recipes = await getRecipes();
  return recipes.find((recipe) => recipe.id === id) || null;
}

export async function saveRecipe(recipeData) {
  const recipes = await getRecipes();
  const now = new Date().toISOString();

  const newRecipe = {
    id: String(Date.now()),
    ...recipeData,
    createdAt: now,
    updatedAt: now
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([newRecipe, ...recipes]));
  return newRecipe;
}

export async function updateRecipe(id, recipeData) {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.map((recipe) => {
    if (recipe.id !== id) return recipe;

    return {
      ...recipe,
      ...recipeData,
      updatedAt: new Date().toISOString()
    };
  });

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
}

export async function deleteRecipe(id) {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
}
