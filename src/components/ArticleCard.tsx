import { Article } from '../data/articles';
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Global Affairs': 'bg-teal-100 text-teal-700',
      'Culture': 'bg-pink-100 text-pink-700',
      'Environment': 'bg-green-100 text-green-700',
      'Politics': 'bg-red-100 text-red-700',
      'Economics': 'bg-blue-100 text-blue-700',
      'Podcast': 'bg-purple-100 text-purple-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group slide-up">
      <div className="relative overflow-hidden">
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium z-10 ${getCategoryColor(
            article.category
          )}`}
        >
          {article.category}
        </span>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <Link to={`/article/${article.id}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {article.title}
        </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {article.author.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{article.author}</p>
            <p className="text-xs text-gray-500">
              {article.date} · {article.readTime}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
