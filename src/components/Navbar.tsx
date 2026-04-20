import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="animate-nav-down mx-auto flex w-full max-w-330 h-18 md:h-23 px-6 md:px-10 justify-between items-center bg-transparent">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2 md:gap-3 group">
        <div className="relative w-7 h-7 md:w-8 md:h-8 shrink-0 transition-transform duration-300 group-hover:rotate-12">
          <Image 
            src="/icon.png" 
            alt="WorldExplorer Logo" 
            fill
            className="object-contain"
            priority 
          />
        </div>
        <span className="text-[#155DFC] font-inter text-lg md:text-[20px] font-semibold leading-tight">
          WorldExplorer
        </span>
      </Link>

      {/* Button Section */}
      <Link href="/explore">
      <button 
        className="flex justify-center items-center bg-black text-white hover:bg-gray-800 hover:scale-[1.03] transition-all duration-300 active:scale-95 px-4 md:px-5.5 py-2 md:py-2.5 rounded-[10px] shadow-lg shadow-black/5"
      >
        <span className="text-xs md:text-[14px] font-medium">Explore Now</span>
      </button>
      </Link>
    </nav>
  );
}