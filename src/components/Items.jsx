import React, { useState, useEffect } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from product.json
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Catchy Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#054c73]">
            Trending Products You'll Love!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the hottest deals on viral TikTok products. Limited stock,
            don't miss out!
          </p>
        </div>

        {/* Animated Brand Logos */}
        <div className="mb-16 overflow-hidden bg-gray-50 py-12 rounded-2xl">
          <p className="text-center text-sm font-semibold text-gray-500 mb-8">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Brand 1"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Brand 2"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Brand 3"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="Brand 4"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Brand 5"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Brand 6"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Brand 1"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Brand 2"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Brand 3"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="Brand 4"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Brand 5"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="mx-8 flex items-center justify-center">
                <img
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Brand 6"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
          You Might Also Like
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#054c73] transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{product.color}</p>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">
                    {product.price}
                  </p>

                  <a
                    href={product.link}
                    className="flex items-center gap-2 bg-[#054c73] text-white px-4 py-2 rounded-full font-medium hover:bg-[#043c5a] transition-all shadow-sm hover:shadow-md"
                  >
                    View
                    <HiArrowCircleRight size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
