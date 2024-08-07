import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPages() {
  return (
    <main>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li>
            <Link href={`/news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
