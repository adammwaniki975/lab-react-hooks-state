import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add item to cart
  const addToCart = (itemName) => {
    setCart([...cart, itemName]);
  };

  // Remove item from cart
  const removeFromCart = (itemName) => {
    setCart(cart.filter((item) => item !== itemName));
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme={isDarkMode ? "dark" : "light"}>
        <TooltipProvider>
          <Toaster />
          <div className={isDarkMode ? "dark" : ""}>
            <Home
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
