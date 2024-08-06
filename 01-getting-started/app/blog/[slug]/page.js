/**
 *
 * @param {*} param0
 * @property {object} param0.params - Contains information about the dynamic
 * route
 * @property {string} param0.params.slug - Contains the current dynamic
 * location of the route. This property name depends one what string is between
 * the "[]" for the folder.
 * @returns
 */
export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
