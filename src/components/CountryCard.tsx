"use client";

import Image from "next/image";
import { Country } from "@/types/country";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

export default function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative w-full bg-white rounded-3xl p-2 overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1] cursor-pointer border border-transparent
      hover:scale-[1.02] hover:-translate-y-2
      hover:bg-linear-to-br hover:from-white hover:to-pink-50/50
      hover:shadow-[0_20px_50px_rgba(236,72,153,0.2),0_0_20px_rgba(152,16,250,0.1)]
      hover:border-pink-200/50"
    >
      {/* Flag Container with subtle inner glow on hover */}
      <div className="relative w-full aspect-304/180 rounded-[18px] overflow-hidden shadow-inner">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-5 transition-transform duration-500">
        <h3 className="text-[#0A0A0A] font-inter text-xl font-bold tracking-tight group-hover:text-pink-600 transition-colors duration-300">
          {country.name.common}
        </h3>

        <div className="mt-4 space-y-3">
          <DetailItem label="Capital" value={country.capital?.[0]} />
          <DetailItem label="Region" value={country.region} />
          <DetailItem label="Population" value={country.population.toLocaleString()} />
          
          <div className="pt-2 flex flex-wrap gap-1.5">
            {country.languages && Object.values(country.languages).slice(0, 2).map((lang) => (
              <span key={lang} className="text-[10px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-bold uppercase tracking-wider group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#155DFC] to-[#9810FA] transition-all duration-700 group-hover:w-full" />
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-[#4A5565] font-medium opacity-70 uppercase text-[10px] tracking-widest ">{label}</span>
      <span className="text-[#0A0A0A] font-semibold">{value || "N/A"}</span>
    </div>
  );
}