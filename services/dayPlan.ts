
import { RecipeType } from "@/features/dayPlan/types"
import { emptySplitApi } from "./emptySliceApi"



const dayPlanApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
    mineRecipes: build.query<RecipeType[], void>({
      query: () => 'recipe/findAll',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery, useMineRecipesQuery } = dayPlanApi