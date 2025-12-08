import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        
        {/* Always show navbar */}
        <Navbar />

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LatestArticles />
                <Footer />
              </>
            }
          />

          {/* Article Page */}
          <Route path="/article/:id" element={<ArticlePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
