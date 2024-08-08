import PostForm from "@/components/post-form";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  /**
   * Form actions must have "use server" directive set. They must also be async.
   * @param {FormData} previousState - Previous from state.
   * @param {FormData} formData - Form data passed from the form action.
   */
  async function createPost(previousState, formData) {
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

    if (!image || image.size === 0) {
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

  return (
    <>
      <h1>Create a new post</h1>
      <PostForm createPost={createPost} />
    </>
  );
}
