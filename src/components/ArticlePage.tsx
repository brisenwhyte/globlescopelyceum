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

      <article className="prose prose-lg max-w-none">
        {article.content.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4">
            {para}
            </p>
        ))}
      </article>
    </div>
  );
};

export default ArticlePage;
