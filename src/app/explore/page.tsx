"use client";

import { useState, useEffect, useMemo } from "react";
import { getAllCountries } from "@/lib/api";
import { Country } from "@/types/country";
import CountryCard from "@/components/CountryCard";
import Searchbar from "@/components/Searchbar";

export default function ExplorePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(25);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      const capital = country.capital?.[0]?.toLowerCase() || "";
      const query = searchQuery.toLowerCase();
      return name.includes(query) || capital.includes(query);
    });
  }, [countries, searchQuery]);

  const displayedCountries = filteredCountries.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white">
      <div className="animate-nav-down">
        <Searchbar onSearch={(query) => {
          setSearchQuery(query);
          setVisibleCount(25);
        }} />
      </div>
      
      <main className="mx-auto w-full max-w-330 px-6 md:px-10 py-12">
        <div className="mb-12 animate-hero-left">
          <h1 className="text-[#0A0A0A] font-inter text-[36px] md:text-[48px] font-bold tracking-tight">
            Explore Countries
          </h1>
          <p className="text-[#4A5565] font-inter text-lg mt-2 font-medium">
            {loading 
              ? "Fetching countries..." 
              : `Showing ${displayedCountries.length} of ${filteredCountries.length} countries`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCountries.map((country, index) => (
            <div 
              key={country.cca3}
              className="animate-stats-up"
              style={{ 
                animationDelay: `${index * 0.05}s`, 
                animationFillMode: 'both' 
              }}
            >
              <CountryCard 
                country={country} 
                onClick={() => console.log("Clicked:", country.name.common)} 
              />
            </div>
          ))}
        </div>

        {!loading && visibleCount < filteredCountries.length && (
          <div className="mt-16 flex justify-center animate-stats-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <button 
              onClick={() => setVisibleCount(prev => prev + 25)}
              className="group relative flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold transition-all hover:bg-gray-800 active:scale-95 shadow-xl hover:shadow-pink-500/10"
            >
              <span>Show More Countries</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-1">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}