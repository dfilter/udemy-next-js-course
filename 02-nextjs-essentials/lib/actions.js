"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

/**
 * For server side function handling the "use server" directive must be set.
 * This allows this function to be set as a prop of the action for the form.
 * Note that this will only work if the component is not a client
 * component. It is possible to import a server action such as this in a client
 * form.
 *
 * @param {object} previousState - previous state from useActionState hook.
 * @param {FormData} formData - Data submitted from the form below.
 */
export async function shareMeal(previousState, formData) {
  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    /**
     * Action responses must return serializable data meaning data that does
     * not include methods ie: strings, numbers, arrays, objects without
     * methods.
     */
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  /**
   * The function below tells Next.js to revalidate the cache so the user will
   * be able to see the meal they just added.
   */
  revalidatePath("/meals");
  redirect("/meals");
}
