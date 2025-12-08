import { featuredArticle } from '../data/articles';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="fade-left">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              {featuredArticle.category}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {featuredArticle.title}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {featuredArticle.description}
            </p>

            {/* AUTHOR INFO */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {featuredArticle.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{featuredArticle.author}</p>
                <p className="text-sm text-gray-500">{featuredArticle.date}</p>
              </div>
            </div>

            {/* READ ARTICLE BUTTON WITH DYNAMIC LINK */}
            <Link to={`/article/${featuredArticle.id}`}>
              <button className="px-8 py-3.5 bg-gray-900 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                Read Article
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="fade-right">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
