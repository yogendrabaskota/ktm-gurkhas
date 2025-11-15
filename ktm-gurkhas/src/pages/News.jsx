import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaShare,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";

const News = () => {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: "Gurkhas Secure Historic Victory Against Pokhara Rhinos",
      excerpt:
        "In a thrilling encounter at TU Ground, Kathmandu Gurkhas clinched a remarkable 28-run victory against arch-rivals Pokhara Rhinos, marking their third consecutive win this season.",
      content:
        "The Kathmandu Gurkhas displayed exceptional cricketing prowess in their latest encounter against the Pokhara Rhinos. Captain Rajesh Hamal led from the front with a brilliant 78 runs, while young spinner Bikram Thapa took 4 crucial wickets to secure the victory. The team's fielding was particularly impressive, with three stunning catches that turned the game in Gurkhas' favor.",
      image: "/match-victory.jpg",
      category: "Match Report",
      date: "2023-10-16",
      author: "Sports Desk",
      readTime: "3 min read",
      featured: true,
      likes: 142,
      comments: 23,
      shares: 45,
    },
    {
      id: 2,
      title: "New Sponsorship Deal with Himalayan Bank",
      excerpt:
        "Kathmandu Gurkhas announce groundbreaking sponsorship agreement with Himalayan Bank, set to boost team development and community programs.",
      content:
        "In a major boost for Nepali cricket, Himalayan Bank has signed a three-year sponsorship deal with the Kathmandu Gurkhas. The partnership will focus on developing grassroots cricket, improving training facilities, and supporting youth development programs across the country.",
      image: "/sponsorship.jpg",
      category: "Club News",
      date: "2023-10-14",
      author: "Admin",
      readTime: "2 min read",
      featured: false,
      likes: 89,
      comments: 15,
      shares: 32,
    },
    {
      id: 3,
      title: "Player Spotlight: Meet Our Rising Star Bikram Thapa",
      excerpt:
        "Get to know the young spin sensation who's taking the league by storm with his exceptional bowling performances.",
      content:
        "At just 19 years old, Bikram Thapa has become one of the most talked-about players in the league. His unique bowling action and ability to read batsmen have made him a key asset for the Gurkhas. In this exclusive interview, he shares his journey from rural Nepal to professional cricket.",
      image: "/player-spotlight.jpg",
      category: "Player Feature",
      date: "2023-10-12",
      author: "Feature Team",
      readTime: "4 min read",
      featured: true,
      likes: 167,
      comments: 28,
      shares: 51,
    },
    {
      id: 4,
      title: "Community Coaching Clinic Announced",
      excerpt:
        "Gurkhas to host free coaching clinics for young cricketers across Kathmandu valley next month.",
      content:
        "The Kathmandu Gurkhas are giving back to the community with a series of free coaching clinics scheduled for next month. Professional coaches and players will conduct sessions for children aged 8-16, focusing on fundamental skills and sportsmanship.",
      image: "/coaching-clinic.jpg",
      category: "Community",
      date: "2023-10-10",
      author: "Community Team",
      readTime: "2 min read",
      featured: false,
      likes: 76,
      comments: 12,
      shares: 29,
    },
    {
      id: 5,
      title: "Stadium Upgrade Plans Revealed",
      excerpt:
        "Major renovations planned for TU Ground to enhance spectator experience and player facilities.",
      content:
        "The home ground of Kathmandu Gurkhas is set for a major upgrade with new seating, improved lighting, and world-class training facilities. The renovations are expected to be completed before the next season begins.",
      image: "/stadium-upgrade.jpg",
      category: "Facilities",
      date: "2023-10-08",
      author: "Admin",
      readTime: "3 min read",
      featured: false,
      likes: 103,
      comments: 19,
      shares: 41,
    },
    {
      id: 6,
      title: "Gurkhas Dominate League Awards",
      excerpt:
        "Three Gurkhas players receive end-of-season awards for outstanding performances.",
      content:
        "The league's annual awards ceremony saw Kathmandu Gurkhas players dominating multiple categories. Captain Rajesh Hamal won Player of the Season, while Bikram Thapa and Suresh Gurung received Best Bowler and Emerging Player awards respectively.",
      image: "/awards.jpg",
      category: "Achievements",
      date: "2023-10-05",
      author: "Sports Desk",
      readTime: "2 min read",
      featured: false,
      likes: 124,
      comments: 21,
      shares: 38,
    },
  ];

  const categories = [
    { id: "all", name: "All News" },
    { id: "Match Report", name: "Match Reports" },
    { id: "Club News", name: "Club News" },
    { id: "Player Feature", name: "Player Features" },
    { id: "Community", name: "Community" },
    { id: "Facilities", name: "Facilities" },
    { id: "Achievements", name: "Achievements" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [likedArticles, setLikedArticles] = useState(new Set());

  const filteredArticles =
    activeCategory === "all"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  const toggleLike = (articleId) => {
    const newLikedArticles = new Set(likedArticles);
    if (newLikedArticles.has(articleId)) {
      newLikedArticles.delete(articleId);
    } else {
      newLikedArticles.add(articleId);
    }
    setLikedArticles(newLikedArticles);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="news">
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden min-h-screen">
        {/* Background pattern matching other sections */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">GURKHAS</span>
              <span className="block text-gold-500 mt-2">NEWS & UPDATES</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
              Stay updated with the latest from Kathmandu Gurkhas Cricket Club
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 border rounded-full text-sm font-medium transition duration-300 ${
                  activeCategory === category.id
                    ? "border-yellow-300 bg-yellow-300 text-black font-bold"
                    : "border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && activeCategory === "all" && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 flex items-center">
                <FaStar className="mr-3 text-yellow-400" />
                FEATURED STORIES
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          onClick={() => toggleLike(article.id)}
                          className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-yellow-300 hover:text-black transition duration-300"
                        >
                          {likedArticles.has(article.id) ? (
                            <FaHeart className="w-4 h-4 text-red-500" />
                          ) : (
                            <FaRegHeart className="w-4 h-4" />
                          )}
                        </button>
                        <button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-yellow-300 hover:text-black transition duration-300">
                          <FaShare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-yellow-100 mb-3">
                        <FaCalendarAlt className="mr-2" />
                        {formatDate(article.date)}
                        <span className="mx-2">•</span>
                        <FaUser className="mr-2" />
                        {article.author}
                        <span className="mx-2">•</span>
                        {article.readTime}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition duration-300">
                        {article.title}
                      </h3>
                      <p className="text-yellow-100 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/news/${article.id}`}
                          className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold transition duration-300"
                        >
                          Read Full Story
                          <FaArrowRight className="ml-2" />
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-yellow-100">
                          <span className="flex items-center gap-1">
                            <FaHeart className="w-3 h-3" />
                            {article.likes +
                              (likedArticles.has(article.id) ? 1 : 0)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment className="w-3 h-3" />
                            {article.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaShare className="w-3 h-3" />
                            {article.shares}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-300 text-black px-2 py-1 rounded text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-yellow-100 mb-2">
                    <FaCalendarAlt className="mr-1" />
                    {formatDate(article.date)}
                    <span className="mx-2">•</span>
                    {article.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-yellow-100 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-yellow-300 hover:text-yellow-200 text-sm font-semibold transition duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-1" />
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-yellow-100">
                      <button
                        onClick={() => toggleLike(article.id)}
                        className="flex items-center gap-1 hover:text-yellow-300 transition duration-300"
                      >
                        {likedArticles.has(article.id) ? (
                          <FaHeart className="w-3 h-3 text-red-500" />
                        ) : (
                          <FaRegHeart className="w-3 h-3" />
                        )}
                        {article.likes +
                          (likedArticles.has(article.id) ? 1 : 0)}
                      </button>
                      <span className="flex items-center gap-1">
                        <FaComment className="w-3 h-3" />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-12 text-center">
              <p className="text-2xl text-yellow-300 mb-4">No articles found</p>
              <p className="text-yellow-100 mb-6">
                There are no news articles in this category at the moment.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-gold-500 text-black font-bold rounded-lg hover:from-yellow-200 hover:to-gold-400 transition duration-300"
              >
                VIEW ALL NEWS
              </button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              STAY UPDATED WITH GURKHAS
            </h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about match
              updates, player news, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg text-white placeholder-yellow-100 focus:outline-none focus:border-yellow-400"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-gold-500 text-black font-bold rounded-lg hover:from-yellow-200 hover:to-gold-400 transition duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements matching other sections */}
        <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-yellow-200 animate-pulse opacity-70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default News;
