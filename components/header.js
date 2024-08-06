/**
 * Since header uses no reserved names it is ignored by default and would need
 * to be imported somewhere else in order to be rendered.
 *
 * Since the components folder has no "page.js" there will be no route for
 * "/components"
 * @returns
 */
export default function Header() {
  return (
    <>
      <h1>Welcome to this NextJS Course!</h1>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
    </>
  );
}
