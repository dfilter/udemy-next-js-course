/**
 * Whenever a parallel route does not support the routes of one of its siblings
 * a default.js component can be used to display the content for the unsupported
 * route. Failing to do this will result in 404 error. The "@latest" route does
 * not require a page.js since the content is the same regardless of route.
 */

import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h1>Latest News Page</h1>;
      <NewsList news={latestNews} />
    </>
  );
}
