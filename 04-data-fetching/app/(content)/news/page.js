import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPages() {
  const news = await getAllNews();

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={news} />
    </main>
  );
}
