import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPages() {
  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
}
