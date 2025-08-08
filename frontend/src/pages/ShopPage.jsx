import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ShoppingCart,
  ChevronDown,
  Star,
  Headphones,
  Mouse,
  Monitor,
  Shirt,
  Award,
  Plus,
  Minus,
  X,
  ShoppingBag,
  Gamepad,
  HomeIcon,
} from "lucide-react";

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Product categories
  const categories = [
    {
      id: "all",
      name: "All Products",
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    { id: "mice", name: "Gaming Mice", icon: <Mouse className="w-4 h-4" /> },
    { id: "audio", name: "Headsets", icon: <Headphones className="w-4 h-4" /> },
    { id: "monitors", name: "Monitors", icon: <Monitor className="w-4 h-4" /> },
    { id: "merch", name: "Team Merch", icon: <Shirt className="w-4 h-4" /> },
    {
      id: "collectibles",
      name: "Collectibles",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  // Products data
  const products = [
    {
      id: 1,
      name: "Razer Viper Ultimate",
      price: 129.99,
      category: "mice",
      brand: "Razer",
      rating: 4.8,
      description: "Wireless gaming mouse with hyper-speed technology",
      image:
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500",
    },
    {
      id: 2,
      name: "SteelSeries Arctis Pro",
      price: 179.99,
      category: "audio",
      brand: "SteelSeries",
      rating: 4.7,
      description: "High-fidelity gaming headset with DTS surround",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    },
    {
      id: 3,
      name: "ASUS ROG Swift PG279Q",
      price: 699.99,
      category: "monitors",
      brand: "ASUS",
      rating: 4.9,
      description: '27" WQHD IPS gaming monitor with 165Hz refresh rate',
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    },
    {
      id: 4,
      name: "Fnatic Jersey 2023",
      price: 59.99,
      category: "merch",
      brand: "Fnatic",
      rating: 4.5,
      description: "Official Fnatic esports team jersey",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
    },
    {
      id: 5,
      name: "Logitech G Pro X Superlight",
      price: 149.99,
      category: "mice",
      brand: "Logitech",
      rating: 4.9,
      description: "Ultra-lightweight wireless gaming mouse",
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    },
    {
      id: 6,
      name: "HyperX Cloud Alpha",
      price: 99.99,
      category: "audio",
      brand: "HyperX",
      rating: 4.6,
      description: "Dual chamber drivers for superior sound",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 7,
      name: "Team Liquid Hoodie",
      price: 79.99,
      category: "merch",
      brand: "Team Liquid",
      rating: 4.7,
      description: "Premium quality team hoodie",
      image:
        "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?w=500",
    },
    {
      id: 8,
      name: "Valorant Collectible Statue",
      price: 89.99,
      category: "collectibles",
      brand: "Riot Games",
      rating: 4.8,
      description: "Limited edition Jett statue",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
    },
    {
      id: 9,
      name: "Corsair K70 RGB MK.2",
      price: 159.99,
      category: "keyboards",
      brand: "Corsair",
      rating: 4.7,
      description: "Mechanical gaming keyboard with Cherry MX switches",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
    {
      id: 10,
      name: "Gaming Mouse Pad XL",
      price: 24.99,
      category: "accessories",
      brand: "SteelSeries",
      rating: 4.4,
      description: "Extra large RGB mouse pad",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500",
    },
  ];

  // Filter products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.id - b.id; // Default: featured (original order)
  });

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Calculate total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <HomeIcon className="w-6 h-6" />
            </Link>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Gamepad className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold">GamerGear</h1>
          </div>

          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            onClick={() => setShowCart(true)}
            className="relative p-2 rounded-lg hover:bg-gray-800"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h2>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 w-full p-2 rounded-lg text-left ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-300 text-sm">On all orders over $100</p>

              <h3 className="font-bold text-lg mt-4 mb-2">Secure Payment</h3>
              <p className="text-gray-300 text-sm">
                100% secure payment methods
              </p>

              <h3 className="font-bold text-lg mt-4 mb-2">30-Day Returns</h3>
              <p className="text-gray-300 text-sm">
                Hassle-free returns policy
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {activeCategory === "all"
                  ? "All Products"
                  : categories.find((c) => c.id === activeCategory)?.name}
                <span className="text-gray-400 text-lg ml-2">
                  ({filteredProducts.length})
                </span>
              </h2>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500 transition-all"
                  >
                    <div className="h-48 bg-gray-700 relative overflow-hidden">
                      <div
                        className="w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                      <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                        ${product.price}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <div className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {product.brand}
                        </span>
                        <button
                          onClick={() => addToCart(product)}
                          className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-sm font-medium hover:from-red-700 hover:to-orange-600 transition-all"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
                  <Search className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
                <p className="text-gray-400">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shopping Cart */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-end">
          <div className="w-full max-w-md bg-gray-900 border-l border-gray-800 h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Your Cart (
                {cartItems.reduce((total, item) => total + item.quantity, 0)})
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 rounded-lg hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-gray-800 pb-6"
                    >
                      <div
                        className="w-20 h-20 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          {item.brand}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-full bg-gray-800 hover:bg-gray-700"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-full bg-gray-800 hover:bg-gray-700"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex justify-between mb-4">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span>Shipping</span>
                      <span className="text-green-400">FREE</span>
                    </div>
                    <div className="flex justify-between mb-6 text-lg font-bold">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-bold hover:from-red-700 hover:to-orange-600 transition-all">
                      Proceed to Checkout
                    </button>

                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full py-3 mt-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
                    <ShoppingCart className="w-12 h-12 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Add some gaming gear to get started!
                  </p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium"
                  >
                    Browse Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured Brands */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "Razer",
            "Logitech",
            "SteelSeries",
            "HyperX",
            "Corsair",
            "ASUS",
          ].map((brand) => (
            <div
              key={brand}
              className="bg-gray-800 rounded-xl p-6 flex items-center justify-center border border-gray-700 hover:border-orange-500 transition-all"
            >
              <div className="text-xl font-bold text-gray-300">{brand}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GamerGear</h3>
              <p className="text-gray-400">
                Premium gaming equipment and esports merchandise for the
                ultimate gaming experience.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Gaming Mice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Headsets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Keyboards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Team Merch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-3">
                Subscribe for exclusive deals and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none w-full"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-r-lg font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2023 GamerGear. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopPage;
