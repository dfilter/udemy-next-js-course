import { notFound } from "next/navigation";

import { getAllNews } from "@/lib/news";

/**
 * All children of a dynamic route also receive the parent's url params.
 *
 * @param {*} props
 * @property {object} props.params - Url params.
 * @property {string} props.params.slug - Url slug.
 * @returns
 */
export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = getAllNews().find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
