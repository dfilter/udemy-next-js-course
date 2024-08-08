"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";

/**
 * Form actions must have "use server" directive set. They must also be async.
 * @param {FormData} previousState - Previous from state.
 * @param {FormData} formData - Form data passed from the form action.
 */
export async function createPost(previousState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];
  const defaultMessage = " is required.";

  if (!title || title.trim().length === 0) {
    errors.push("Title" + defaultMessage);
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content" + defaultMessage);
  }

  if (!image || image.size === 0) {
    errors.push("Image" + defaultMessage);
  }

  if (errors.length > 0) {
    return {
      errors,
    };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/feed");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  /**
   * @see https://nextjs.org/docs/app/api-reference/functions/revalidatePath
   */
  revalidatePath("/feed");
}
