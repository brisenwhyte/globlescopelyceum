import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              The GlobeScope
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A student-run publication exploring international studies, global
              affairs, and world culture. Join our community of aspiring
              diplomats, scholars, and global citizens as we analyze the world's
              most pressing issues.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Politics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Global Affairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Podcast
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Submit Article
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 The GlobeScope. A student publication on international
            studies.
          </p>
          <a
            href="mailto:contact@lyceumblog.com"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>contact@lyceumblog.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
