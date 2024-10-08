import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    // Manually trigger 404 in order to display not-found.js
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsSlug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
