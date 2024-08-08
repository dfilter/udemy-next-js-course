"use client";

import { useFormState } from "react-dom";

import FormSubmit from "@/components/form-submit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  /**
   * Form actions must have "use server" directive set. They must also be async.
   * @param {FormData} formData - Form data passed from the form action.
   */
  async function createPost(formData) {
    "use server";
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

    if (!image) {
      errors.push("Image" + defaultMessage);
    }

    if (errors.length > 0) {
      return {
        errors,
      };
    }

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/feed");
  }

  const [state, formAction] = useFormState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
