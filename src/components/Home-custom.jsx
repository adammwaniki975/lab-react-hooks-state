import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import "../styles/home.css";

const PRODUCTS = [
  { id: 1, name: "Milk (1L)", category: "Dairy", price: 150 },
  { id: 2, name: "Mozzarella Cheese", category: "Dairy", price: 450 },
  { id: 3, name: "Yogurt (500ml)", category: "Dairy", price: 200 },
  { id: 4, name: "Chapati", category: "Bakery", price: 50 },
  { id: 5, name: "Mandazi", category: "Bakery", price: 100 },
  { id: 6, name: "Ugali Flour (2kg)", category: "Bakery", price: 250 },
  { id: 7, name: "Mangoes", category: "Produce", price: 100 },
  { id: 8, name: "Bananas (bunch)", category: "Produce", price: 80 },
  { id: 9, name: "Avocados", category: "Produce", price: 150 },
  { id: 10, name: "Chicken (1kg)", category: "Meat", price: 600 },
  { id: 11, name: "Beef (1kg)", category: "Meat", price: 800 },
  { id: 12, name: "Fish (Tilapia)", category: "Meat", price: 700 },
];

const CATEGORIES = ["All", "Dairy", "Bakery", "Produce", "Meat"];

export default function Home({
  isDarkMode,
  toggleDarkMode,
  cart,
  addToCart,
  removeFromCart,
  selectedCategory,
  setSelectedCategory,
}) {
  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">🇰🇪 Kenyan Grocery Store</h1>

          <div className="header-controls">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="dark-mode-btn"
            >
              {isDarkMode ? (
                <>
                  <Sun size={20} />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon size={20} />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Cart Icon */}
            <div className="cart-display">
              <ShoppingCart size={24} />
              <span className="cart-count">{cart.length}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="layout-grid">
          {/* Sidebar with Category Filter */}
          <aside className="sidebar">
            <div className="categories-card">
              <h2 className="categories-title">Categories</h2>
              <div className="categories-list">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="main-section">
            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                    </div>
                    <span className="product-price">
                      KES {product.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product.name)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Shopping Cart Section */}
            <div className="cart-section">
              <h2 className="cart-title">Shopping Cart</h2>

              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <span className="cart-item-text">
                        {item} is in your cart.
                      </span>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
