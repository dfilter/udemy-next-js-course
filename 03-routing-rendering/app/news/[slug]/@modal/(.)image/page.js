import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import ModalBackground from "@/components/modal-background";

/**
 * All children of a dynamic route also receive the parent's url params.
 *
 * @param {*} props
 * @property {object} props.params - Url params.
 * @property {string} props.params.slug - Url slug.
 * @returns
 */
export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackground />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
