"use client";

import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  return (
    <div className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="mx-auto flex max-w-330 items-center justify-between gap-4">
        
        {/* Navigation & Brand */}
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-all active:scale-90"
          >
            <ArrowLeft size={20} />
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#155DFC] rounded-lg flex items-center justify-center text-white shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
              </svg>
            </div>
            <span className="font-inter font-bold text-[#0A0A0A] hidden sm:block">CountryExplorer</span>
          </div>
        </div>

        {/* Search Input Field */}
        <div className="relative flex-1 max-w-110">
          <Search 
            size={18} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-colors group-focus-within:text-[#9810FA]" 
          />
          <input
            type="text"
            placeholder="Search countries..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-full border border-gray-200 outline-none transition-all
              focus:border-pink-300 focus:ring-4 focus:ring-pink-500/10 text-sm font-medium text-[#0A0A0A]"
          />
        </div>
      </div>
    </div>
  );
}