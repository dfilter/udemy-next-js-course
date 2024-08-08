import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: 'All our X posts',
//   description: 'Brows all our posts'
// }

/**
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 * @param {object} data
 * @returns object
 */
export async function generateMetadata(data) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse ${numberOfPosts} Posts`,
    description: "Brows all our posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
