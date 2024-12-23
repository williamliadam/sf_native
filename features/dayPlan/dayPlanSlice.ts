import type { RootState } from '@/store';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import type { DayPlanType, DishType, MenuType, RecipeType } from './types';


export interface DayPlanState {
  recipes: RecipeType[];
  menus: MenuType[];
  dayPlan: DayPlanType
}
const initialState: DayPlanState = {
  dayPlan: {
    id: uuid.v4(),
    name: 'Day Plan',
    date: new Date().toISOString(),
    menus: [],
  },
  recipes: [],
  menus: [],
}

export const dayPlanSlice = createSlice({
  name: "dayPlan",
  initialState,
  reducers: {
    setDayPlan: (state, action: PayloadAction<DayPlanType>) => {
      state.dayPlan = action.payload;
    },
    addRecipe: (state, action: PayloadAction<RecipeType>) => {
      state.recipes.push(action.payload);
    },
    addMenu: (state, action: PayloadAction<MenuType>) => {
      state.menus.push(action.payload);
    },
    addDishToMenu: (state, action: PayloadAction<{ dish: DishType; menuId: string }>) => {
      const { dish, menuId } = action.payload;
      const menu = state.menus.find((m) => m.id === menuId);
      if (menu) {
        menu.dishes.push(dish);
      }
    },
    moveRecipeToMenu: (state, action: PayloadAction<{ recipe: RecipeType; menuId?: string, index?: number }>) => {
      const { recipe, menuId, index } = action.payload;
      const menu = state.menus.find((m) => m.id === menuId);
      const newDish: DishType = { id: uuid.v4(), title: recipe.name, code: recipe.id };
      if (recipe && menu) {
        if (index !== undefined) {
          menu.dishes.splice(index, 0, newDish);
        }
        else {
          menu.dishes.push(newDish);
        }
      } else {
        state.menus.push({
          id: uuid.v4(),
          name: "New Menu",
          dishes: [newDish],
        });
      }
    },
    deleteMenu: (state, action: PayloadAction<string>) => {
      state.menus = state.menus.filter((m) => m.id !== action.payload);
    },
    deleteMenuFromDayPlan: (state, action: PayloadAction<string>) => {
      state.dayPlan.menus = state.dayPlan.menus.filter((m) => m.id !== action.payload);
    },
    insertRecipeToMenu: (state, action: PayloadAction<{ recipe: RecipeType; menuId: string; index: number }>) => {
      const { recipe, menuId, index } = action.payload;
      const menu = state.menus.find((m) => m.id === menuId);
      if (menu) {
        const newDish: DishType = { id: uuid.v4(), title: recipe.name, code: recipe.id };
        menu.dishes.splice(index, 0, newDish);
      }
    },
    insertDishToMenu: (state, action: PayloadAction<{ dish: DishType; menuId: string; index: number }>) => {
      const { dish, menuId, index } = action.payload;
      const menu = state.menus.find((m) => m.id === menuId);
      if (menu) {
        menu.dishes.splice(index, 0, dish);
      }
    },
    deleteDishFromMenu: (state, action: PayloadAction<{ dishId: string; menuId: string }>) => {
      const { dishId, menuId } = action.payload;
      const menu = state.menus.find((m) => m.id === menuId);
      if (menu) {
        menu.dishes = menu.dishes.filter((d) => d.id !== dishId);
      }
    },
    addMenuToDayPlan: (state, action: PayloadAction<MenuType>) => {
      const newMenu = { ...action.payload, id: uuid.v4() };
      state.dayPlan.menus.push(newMenu);
    },
    updateMenu: (state, action: PayloadAction<Partial<MenuType>>) => {
      const { id } = action.payload;
      const menu = state.menus.find((m) => m.id === id);
      if (menu) {
        Object.assign(menu, action.payload);
      }
    }
  },
});

export const { setDayPlan, addRecipe, addMenu, updateMenu, addDishToMenu, moveRecipeToMenu, addMenuToDayPlan, deleteDishFromMenu, insertDishToMenu, deleteMenu, insertRecipeToMenu, deleteMenuFromDayPlan } = dayPlanSlice.actions;
export const selectDayPlan = (state: RootState) => state.dayPlan.dayPlan;
export const selectRecipes = (state: RootState) => state.dayPlan.recipes;
export const selectMenus = (state: RootState) => state.dayPlan.menus;

export default dayPlanSlice.reducer;
