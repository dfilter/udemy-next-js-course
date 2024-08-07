"use client";
/**
 * This error component has the "use client" directive in order to catch both
 * client side and server side errors.
 */

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
