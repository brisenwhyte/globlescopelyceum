import { useState } from 'react';
import { articles } from '../data/articles';
import ArticleCard from './ArticleCard';

const LatestArticles = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Politics', 'Culture', 'Podcast'];

  const filteredArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Latest Articles</h2>

        <div className="flex space-x-8 mb-12 border-b border-gray-200">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-4 font-medium transition-all duration-300 relative ${
                activeFilter === filter
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 animate-slideIn"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 shadow-md">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
