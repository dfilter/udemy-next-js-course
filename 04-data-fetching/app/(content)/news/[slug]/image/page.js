import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

/**
 * All children of a dynamic route also receive the parent's url params.
 *
 * @param {*} props
 * @property {object} props.params - Url params.
 * @property {string} props.params.slug - Url slug.
 * @returns
 */
export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
