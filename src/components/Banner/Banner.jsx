import React, { useState } from 'react';
import { Link } from 'react-router';

const Banner = () => {
  const onSearch = (q) => { }
  const [query, setQuery] = useState("");

  function submitSearch(e) {
    e?.preventDefault();
    onSearch(query.trim());
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-rose-50 pointer-events-none" aria-hidden></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 py-16 lg:py-24">

          {/* Left: Text + controls */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Find delicious meals near you
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">Search thousands of home-cooked and restaurant dishes. Fast delivery, great taste.</p>

            {/* Search form */}
            <form onSubmit={submitSearch} className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <label htmlFor="hero-search" className="sr-only">Search foods</label>
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search food or restaurant..."
                className="w-full sm:flex-1 rounded-md border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-blue-400 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                >
                  Search Food
                </button>

                <Link to="/availableFoods">
                  <button className="inline-flex items-center rounded-md border border-gray-200 bg-blue-400 text-white px-4 py-3 text-sm font-medium shadow-sm hover:bg-blue-800">
                    View All Foods
                  </button>
                </Link>
              </div>
            </form>

            {/* Feature badges */}
            <ul className="mt-6 flex flex-wrap gap-3">
              <li className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l-3 3L8 9.586 9.586 8 11 9.414z" clipRule="evenodd" />
                </svg>
                Fast delivery
              </li>

              <li className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4z" />
                  <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 011 1v7a3 3 0 01-3 3H6a3 3 0 01-3-3V7zm8 2a1 1 0 10-2 0v3a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
                Trusted Sellers
              </li>

              <li className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M3 8l7-5 7 5v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                Secure payments
              </li>
            </ul>
          </div>

          {/* Right: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Decorative plate illustration - SVG */}
              <svg viewBox="0 0 600 400" className="w-full h-auto drop-shadow-2xl" role="img" aria-label="Delicious food illustration">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffecd2" />
                    <stop offset="100%" stopColor="#fcb69f" />
                  </linearGradient>
                </defs>

                <rect rx="20" width="100%" height="100%" fill="url(#g1)" />

                {/* Plate */}
                <g transform="translate(80,40)">
                  <ellipse cx="220" cy="200" rx="170" ry="80" fill="#fff" opacity="0.9" />
                  <ellipse cx="220" cy="200" rx="120" ry="56" fill="#ffeedd" />

                  {/* Food: simple stylized bowl & steam */}
                  <g transform="translate(140,120)">
                    <ellipse cx="80" cy="60" rx="80" ry="36" fill="#c94f4f" />
                    <ellipse cx="80" cy="46" rx="60" ry="26" fill="#f4b4b4" />

                    <path d="M60 10c0-8 16-18 28-10s10 22 0 28-28 2-28-6c0-4 6-8 6-12z" fill="#fff7" />

                    <g transform="translate(20,-16)" fill="#fff">
                      <path d="M10 0c4 6-4 12-6 18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
                      <path d="M30 0c4 6-4 12-6 18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
                    </g>
                  </g>
                </g>
              </svg>

              {/* subtle card */}
              <div className="absolute -bottom-6 left-6 hidden sm:block">
                <div className="rounded-xl bg-white/90 p-3 shadow-lg">
                  <p className="text-sm font-medium text-gray-700">Popular: <span className="font-semibold">Chicken Biryani</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;


