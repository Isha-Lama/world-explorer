import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-330 flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-12 md:pt-16 md:pb-24 gap-12 lg:gap-8 overflow-hidden">
      <div className="animate-hero-left flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
        <h1 className="flex flex-col text-[#0A0A0A] font-inter text-[48px] md:text-[60px] xl:text-[72px] font-bold leading-none tracking-tight">
          Discover the
          <span 
            className="w-fit mx-auto lg:mx-0 bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent inline-block"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            World
          </span>
        </h1>

        <p className="mt-6 md:mt-8.5 w-full max-w-116 text-[#364153] font-inter text-base md:text-[20px] font-normal leading-relaxed md:leading-[28px]">
          Explore detailed information about every country in the world. 
          From population and languages to currencies and flags - all at your fingertips.
        </p>

        <Link href="/explore">
          <button className="mt-8 md:mt-8.25 flex w-fit h-12 md:h-14 px-6 md:px-7 items-center gap-2 rounded-[10px] bg-black text-white hover:bg-gray-800 transition-all active:scale-95 shadow-md group/btn">
            <span className="font-inter text-sm md:text-[16px] font-medium">
              Explore Countries
            </span>
            <svg 
              width="18" height="18" 
              className="md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </Link>

        <div 
          className="animate-stats-up flex gap-8 md:gap-12 mt-10 md:mt-12" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <div>
            <p className="text-2xl md:text-[32px] font-bold text-[#155DFC]">195+</p>
            <p className="text-sm md:text-base text-[#364153] font-medium opacity-60">Countries</p>
          </div>
          <div>
            <p className="text-2xl md:text-[32px] font-bold text-[#155DFC]">7K+</p>
            <p className="text-sm md:text-base text-[#364153] font-medium opacity-60">Languages</p>
          </div>
        </div>
      </div>

      <div className="animate-hero-right flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2 w-full group">
        <div className="
          relative w-full max-w-116 aspect-464/309 overflow-hidden rounded-[20px] 
          shadow-2xl transition-all duration-700 ease-[0.16,1,0.3,1]
          group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_-15px_rgba(21,93,252,0.2)]
        ">
          <Image 
            src="/globe.jpg" 
            alt="World Globes"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
          />
        </div>
        
        <div className="hidden md:block absolute -bottom-10 -right-10 h-64 w-64 bg-purple-500/10 blur-[100px] -z-10 transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-150" />
      </div>
    </section>
  );
}