import React, { useEffect } from "react";
import "../App.css";
import { ShoppingBag, LinkIcon, Star } from "lucide-react";

const About = () => {
    useEffect(() => {
    window.AOS?.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div id="about" className="max-w-6xl mx-auto px-6 py-24">

      {/* Heading */}
      <h2 className="text-center font-bold text-4xl mb-8" data-aos="zoom-in">
        About <span className="text-[#054c73]">ShopLink</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
        ShopLink is a modern platform designed to make browsing TikTok and Shopee Shop products
        effortless. As a TikTok and Shopee Affiliate, I created this website to help users discover
        trending items and instantly redirect them to the official TikTok and Shopee Shop page —
        fast, safe, and convenient.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="backdrop-blur-xl bg-white/60 shadow-xl p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-center mb-5">
            <ShoppingBag className="h-10 w-10 text-[#054c73]" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Easy Browsing</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Explore curated TikTok and Shopee Shop products without endless scrolling — clean,
            organized, and simple to use.
          </p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-xl bg-white/60 shadow-xl p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-center mb-5">
            <LinkIcon className="h-10 w-10 text-[#054c73]" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Direct Links</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Get instantly redirected to the official TikTok and Shopee Shop page — no ads, no clutter,
            just the product you want.
          </p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-xl bg-white/60 shadow-xl p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-center mb-5">
            <Star className="h-10 w-10 text-[#054c73]" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Affiliate Creator</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            I built this platform for my own use to easily manage and organize my TikTok and Shopee affiliate links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
