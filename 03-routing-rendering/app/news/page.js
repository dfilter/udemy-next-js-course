import Link from "next/link";

export default function NewsPages() {
  return (
    <>
      <main>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="/news/page-1">News 1</Link>
          </li>
          <li>
            <Link href="/news/page-2">News 2</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
