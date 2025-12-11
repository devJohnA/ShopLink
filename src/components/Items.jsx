import React from "react";
import "../App.css";
import { HiArrowCircleRight } from "react-icons/hi";

const Items = () => {
 return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {/* Product 1 */}
          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="https://www.facebook.com/">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
             <div className="flex"> 
              <a href="https://www.facebook.com/" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
              alt="Front of men's Basic Tee in white."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Aspen White</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg"
              alt="Front of men's Basic Tee in dark gray."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Charcoal</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
             <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
             <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
              <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
              <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
              <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

          <div className="group relative">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Artwork Tee in peach."
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
             <div className="flex"> 
              <a href="#" className="w-9 px-5 py-2 text-[#054c73] font-bold"><HiArrowCircleRight size="30px"/></a>
             </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Items;
