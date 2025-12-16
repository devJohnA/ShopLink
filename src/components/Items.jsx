import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Items = () => {  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Fetch products from product.json
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        
        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(p => p.category).filter(Boolean))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
    //Animate on scroll
     window.AOS?.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = selectedCategories.length === 0 
    ? products 
    : products.filter(product => selectedCategories.includes(product.category));

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }



  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Catchy Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#054c73]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            Trending Products You'll Love!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            Discover the hottest deals on viral TikTok products. Limited stock,
            don't miss out!
          </p>
        </div>

        {/* Animated Brand Logos */}
        <div className="mb-16 overflow-hidden bg-gray-50 py-12 rounded-2xl">
          <p className="text-center text-sm font-semibold text-gray-500 mb-8">
            TRUSTED BY LEADING BRANDS
          </p>

          <div className="flex justify-center animate-slide-soft">
            <div className="flex gap-16">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike"
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/newbalance.svg"
                alt="New Balance"
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/puma.svg"
                alt="Puma"
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                alt="Adidas"
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8" id="categories">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              
              <div className="space-y-6">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 rounded border-gray-300 text-[#054c73] focus:ring-[#054c73] cursor-pointer"
                    />
                    <span className="text-gray-700 group-hover:text-[#054c73] transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="mt-6 w-full text-sm text-[#054c73] hover:text-[#043c5a] font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Right Content - Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {selectedCategories.length > 0 
                  ? `Filtered Products (${filteredProducts.length})`
                  : "You Might Also Like"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Responsive Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#054c73] transition-colors">
                      {product.name}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">{product.color}</p>

                    {/* Price + Button */}
                    <div className="mt-4 flex items-center justify-between">
                      {/* <p className="text-lg font-bold text-gray-900">
                        {product.price}
                      </p> */}

                      <a
                        href={product.link}
                        className="flex items-center gap-2 bg-[#054c73] text-white px-4 py-2 rounded-full font-medium hover:bg-[#043c5a] transition-all shadow-sm hover:shadow-md"
                      >
                        View
                        <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in selected categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
