export const DragBoxTypes = {
  RECIPE: 'RECIPE',
  DISH: 'DISH',
  MENU: 'MENU',
}
export type DishType = {
  code: string;
  id: string;
  title: string;
};

export type MenuType = {
  id: string;
  name: string;
  dishes: DishType[];
}

export type RecipeType = {
  id: string;
  name: string;
  type: string;
};

export type DayPlanType = {
  id: string;
  name: string;
  date: string;
  menus: MenuType[];
}