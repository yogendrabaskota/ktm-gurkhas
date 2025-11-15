import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaHeart,
  FaFilter,
} from "react-icons/fa";
import { useState } from "react";

const Shop = () => {
  // Sample merchandise data
  const merchandise = [
    {
      id: 1,
      name: "Official Team Jersey",
      price: 45.99,
      originalPrice: 59.99,
      image: "/jersey.png",
      category: "jerseys",
      isNew: true,
      isBestSeller: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#1a1a1a", "#b91c1c", "#1e40af"],
      rating: 4.5,
      reviews: 24,
    },
    {
      id: 2,
      name: "Training T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      image: "/training-tshirt.png",
      category: "apparel",
      isNew: false,
      isBestSeller: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#1a1a1a", "#374151"],
      rating: 4.2,
      reviews: 18,
    },
    {
      id: 3,
      name: "Team Cap",
      price: 19.99,
      originalPrice: 24.99,
      image: "/cap.png",
      category: "accessories",
      isNew: true,
      isBestSeller: false,
      sizes: ["One Size"],
      colors: ["#000000", "#1a1a1a"],
      rating: 4.7,
      reviews: 31,
    },
    {
      id: 4,
      name: "Supporters Scarf",
      price: 22.99,
      originalPrice: 29.99,
      image: "/scarf.png",
      category: "accessories",
      isNew: false,
      isBestSeller: true,
      sizes: ["One Size"],
      colors: ["#b91c1c", "#1e40af", "#000000"],
      rating: 4.8,
      reviews: 42,
    },
    {
      id: 5,
      name: "Team Hoodie",
      price: 49.99,
      originalPrice: 64.99,
      image: "/hoodie.png",
      category: "apparel",
      isNew: false,
      isBestSeller: false,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#000000", "#1a1a1a", "#374151"],
      rating: 4.4,
      reviews: 15,
    },
    {
      id: 6,
      name: "Player Bat",
      price: 89.99,
      originalPrice: 119.99,
      image: "/bat.png",
      category: "equipment",
      isNew: true,
      isBestSeller: false,
      sizes: ["Short Handle", "Long Handle"],
      colors: ["#92400e"],
      rating: 4.9,
      reviews: 8,
    },
    {
      id: 7,
      name: "Wicket Keeping Gloves",
      price: 34.99,
      originalPrice: 44.99,
      image: "/gloves.png",
      category: "equipment",
      isNew: false,
      isBestSeller: true,
      sizes: ["S", "M", "L"],
      colors: ["#000000", "#1a1a1a"],
      rating: 4.6,
      reviews: 12,
    },
    {
      id: 8,
      name: "Team Backpack",
      price: 39.99,
      originalPrice: 49.99,
      image: "/backpack.png",
      category: "accessories",
      isNew: true,
      isBestSeller: false,
      sizes: ["One Size"],
      colors: ["#000000", "#1a1a1a", "#b91c1c"],
      rating: 4.3,
      reviews: 21,
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Products" },
    { id: "jerseys", name: "Jerseys" },
    { id: "apparel", name: "Apparel" },
    { id: "accessories", name: "Accessories" },
    { id: "equipment", name: "Equipment" },
  ];

  // State for active filter and mobile filter menu
  const [activeFilter, setActiveFilter] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  // Filter products based on active filter
  const filteredProducts = merchandise.filter(
    (product) => activeFilter === "all" || product.category === activeFilter
  );

  // Sort products based on sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "new":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  // Function to render star ratings
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={`w-3 h-3 ${
          star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section id="shop">
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden min-h-screen">
        {/* Background pattern matching Hero section */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">OFFICIAL</span>
              <span className="block text-gold-500 mt-2">TEAM STORE</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
              Wear the colors. Show your pride. Support the Gurkhas.
            </p>
          </div>

          {/* Featured Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-gold-500 rounded-lg p-6 mb-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-black">
                  PRE-SEASON SALE
                </h3>
                <p className="text-black font-semibold">
                  Up to 30% off on all merchandise
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg px-4 py-2">
                <p className="text-white font-bold text-lg">
                  Limited Time Offer
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-yellow-300 rounded-lg text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              <FaFilter className="w-4 h-4" />
              Filters
            </button>

            {/* Sort Dropdown for Mobile */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg px-3 py-2 text-yellow-100 focus:outline-none focus:border-yellow-400"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="new">New Arrivals</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Hidden on mobile, shown when toggled */}
            <div
              className={`
              lg:w-1/4
              ${showMobileFilters ? "block" : "hidden lg:block"}
              bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 h-fit
            `}
            >
              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-yellow-300 mb-4">
                  CATEGORIES
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveFilter(category.id);
                        setShowMobileFilters(false); // Close mobile filters after selection
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition duration-300 ${
                        activeFilter === category.id
                          ? "bg-yellow-300 text-black font-bold"
                          : "text-yellow-100 hover:bg-yellow-300 hover:text-black hover:bg-opacity-20"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options for Desktop */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-bold text-yellow-300 mb-4">
                  SORT BY
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg px-3 py-2 text-yellow-100 focus:outline-none focus:border-yellow-400"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="new">New Arrivals</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg">
                <p className="text-yellow-100 text-sm">
                  Showing{" "}
                  <span className="text-yellow-300 font-bold">
                    {sortedProducts.length}
                  </span>{" "}
                  of{" "}
                  <span className="text-yellow-300 font-bold">
                    {merchandise.length}
                  </span>{" "}
                  products
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Desktop Sort and Results Info */}
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-yellow-100">
                  Showing{" "}
                  <span className="text-yellow-300 font-bold">
                    {sortedProducts.length}
                  </span>{" "}
                  products
                  {activeFilter !== "all" && (
                    <span>
                      {" "}
                      in{" "}
                      <span className="text-yellow-300 font-bold capitalize">
                        {activeFilter}
                      </span>
                    </span>
                  )}
                </p>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg px-3 py-2 text-yellow-100 focus:outline-none focus:border-yellow-400"
                >
                  <option value="default">Sort by: Default</option>
                  <option value="price-low">Sort by: Price: Low to High</option>
                  <option value="price-high">
                    Sort by: Price: High to Low
                  </option>
                  <option value="rating">Sort by: Highest Rated</option>
                  <option value="new">Sort by: New Arrivals</option>
                </select>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:border-yellow-400 group"
                    >
                      {/* Product Image */}
                      <div className="relative">
                        <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.isNew && (
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                              NEW
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                              BEST SELLER
                            </span>
                          )}
                        </div>
                        {/* Wishlist Button */}
                        <button className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 hover:bg-yellow-300 hover:text-black transition duration-300">
                          <FaHeart className="w-4 h-4" />
                        </button>
                        {/* Discount Badge */}
                        {product.originalPrice > product.price && (
                          <div className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            SAVE{" "}
                            {Math.round(
                              (1 - product.price / product.originalPrice) * 100
                            )}
                            %
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition duration-300">
                          {product.name}
                        </h3>

                        {/* Category */}
                        <p className="text-sm text-yellow-100 mb-3 capitalize">
                          {product.category}
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-yellow-300">
                            ${product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          <div className="flex gap-1">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-sm text-yellow-100 ml-2">
                            ({product.reviews})
                          </span>
                        </div>

                        {/* Sizes Preview */}
                        <div className="mb-4">
                          <p className="text-sm text-yellow-100 mb-2">
                            Available Sizes:
                          </p>
                          <div className="flex gap-1 flex-wrap">
                            {product.sizes.slice(0, 3).map((size) => (
                              <span
                                key={size}
                                className="px-2 py-1 border border-yellow-300 border-opacity-30 rounded text-xs text-yellow-100"
                              >
                                {size}
                              </span>
                            ))}
                            {product.sizes.length > 3 && (
                              <span className="px-2 py-1 text-xs text-yellow-100">
                                +{product.sizes.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-gradient-to-r from-yellow-300 to-gold-500 text-black font-bold py-3 rounded-lg hover:from-yellow-200 hover:to-gold-400 transition duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                          <FaShoppingCart className="w-5 h-5" />
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-12 text-center">
                  <p className="text-2xl text-yellow-300 mb-4">
                    No products found
                  </p>
                  <p className="text-yellow-100 mb-6">
                    We couldn't find any products matching your selection.
                  </p>
                  <button
                    onClick={() => setActiveFilter("all")}
                    className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-gold-500 text-black font-bold rounded-lg hover:from-yellow-200 hover:to-gold-400 transition duration-300"
                  >
                    VIEW ALL PRODUCTS
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <FaTruck className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Free Shipping
              </h3>
              <p className="text-yellow-100">
                Free delivery on orders over $75. Express shipping available.
              </p>
            </div>

            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-yellow-100">
                30-day return policy. Authentic official merchandise.
              </p>
            </div>

            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <FaStar className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Official Store
              </h3>
              <p className="text-yellow-100">
                Direct from the team. Support your Gurkhas with every purchase.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              JOIN THE GURKHAS FAMILY
            </h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Subscribe to get exclusive offers, new product launches, and team
              updates.
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

        {/* Decorative elements matching Hero section */}
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

export default Shop;
