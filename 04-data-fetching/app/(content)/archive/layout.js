/**
 * Typically layout pages will receive only children as a prop however archive
 * layout components receive props for each of the named parallel routes.
 * In this case "archive" and "latest".
 * @param {*} props
 * @property {object} props.archive - Contents for the "@archive" route.
 * @property {object} props.latest - Contents for the "@latest" route.
 * @returns
 */
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
