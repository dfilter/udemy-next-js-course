"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

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
 * @param {FormData} formData - Data submitted from the form below.
 */
export async function shareMeal(formData) {
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
    throw new Error("Invalid input.");
  }

  await saveMeal(meal);
  redirect("/meals");
}
