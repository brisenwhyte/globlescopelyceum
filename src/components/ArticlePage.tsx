import { useParams, Link } from "react-router-dom";
import { articles, featuredArticle } from "../data/articles";

const ArticlePage = () => {
  const { id } = useParams();

  const allArticles = [featuredArticle, ...articles];
  const article = allArticles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">

      <Link to="/" className="text-blue-600 hover:underline text-sm">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
        {article.title}
      </h1>

      <p className="text-gray-600 mb-4">
        {article.date} · {article.readTime} · By {article.author}
      </p>

      <img
        src={article.image}
        className="w-full rounded-xl mb-10 shadow-lg"
        alt={article.title}
      />

      {article.sections?.length ? (
        <div className="space-y-14">
          <article className="prose prose-lg max-w-none text-gray-700">
            {article.content
              .split('\n\n')
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p key={i} className="mb-4">
                  {para}
                </p>
              ))}
          </article>

          {article.sections.map((section) => (
            <section key={section.heading} className="pt-2">
              <div className="mb-8 border-t border-gray-200 pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                  {section.heading}
                </p>
              </div>

              <div className="space-y-10">
                {section.stories.map((story) => (
                  <article
                    key={story.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {story.title}
                    </h2>

                    <figure className="my-6 overflow-hidden rounded-2xl bg-gray-50">
                      <img
                        src={story.image}
                        alt={story.alt}
                        className="max-h-[520px] w-full object-cover"
                      />
                      <figcaption className="border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-500 sm:px-6">
                        <span className="block font-medium text-gray-700">{story.caption}</span>
                        <span className="block mt-1">Pic Credit: {story.credit}</span>
                      </figcaption>
                    </figure>

                    <div className="prose prose-lg max-w-none text-gray-700">
                      {story.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <article className="prose prose-lg max-w-none">
          {article.content
            .split('\n\n')
            .map((para) => para.trim())
            .filter(Boolean)
            .map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
        </article>
      )}
    </div>
  );
};

export default ArticlePage;
