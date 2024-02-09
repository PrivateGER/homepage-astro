import { defineCollection } from 'astro:content';
import {z} from "astro/zod";

const recipeCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        brewingMethod: z.string(),
    }),

});

export const collections = {
    'recipes': recipeCollection
}
