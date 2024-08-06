"use client";

/**
 * Note that error.js is a reserved filename and must have the "use client"
 * directive set.
 *
 * @param {Object} props
 * @param {Error} props.error Next.js will automatically provide error
 * information to the component via this prop.
 * @returns
 */
export default function MealsError({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </main>
  );
}
