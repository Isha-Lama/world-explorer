import Link from 'next/link';
import Image from 'next/image';
import FeatureCard from './FeatureCard';

const FEATURES_DATA = [
  {
    title: "Easy Discovery",
    description: "Find any country quickly with our intuitive search and filtering system.",
    imageSrc: "/cardicon1.png"
  },
  {
    title: "Rich Data",
    description: "Access detailed information including flags, capitals, populations, and more.",
    imageSrc: "/icon.png"
  },
  {
    title: "Beautiful UI",
    description: "Enjoy a clean, modern interface with smooth animations and responsive design.",
    imageSrc: "/cardicon3.png"
  }
];

export default function Features() {
  return (
    <section className="mt-40 mx-auto w-full max-w-330 px-10 flex flex-col items-center pb-25">
      <h2 className="text-[#0A0A0A] font-inter text-[36px] font-bold leading-10 text-center">
        Why Explore with Us?
      </h2>
      <p className="mt-[16.6px] text-[#4A5565] font-inter text-[18px] font-normal leading-7 text-center">
        Comprehensive data at your fingertips
      </p>

      <div className="mt-[65.4px] flex flex-wrap justify-center gap-[34.2px] w-full">
        {FEATURES_DATA.map((item, idx) => (
          <FeatureCard 
            key={idx} 
            title={item.title} 
            description={item.description}
            icon={
              <div className="relative w-7 h-7">
                <Image 
                  src={item.imageSrc} 
                  alt={item.title} 
                  fill 
                  className="object-contain"
                />
              </div>
            }
          />
        ))}
      </div>

      <div className="mt-20 w-full max-w-4xl h-68 rounded-3xl bg-linear-to-r from-[#155DFC] to-[#9810FA] flex flex-col items-center justify-center relative overflow-hidden px-6">
        <h2 className="text-white font-inter text-[36px] font-bold leading-10 text-center">
          Ready to Explore?
        </h2>
        <p className="mt-[16.8px] text-white font-inter text-[20px] font-normal leading-7 text-center">
          Start your journey through the world's countries today
        </p>
        
        <Link href="/explore">
          <button className="mt-[33.2px] w-[228.95px] h-15 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform active:scale-95">
            <span className="text-[#155DFC] font-inter text-[16px] font-semibold">View All Countries</span>
          </button>
        </Link>
      </div>

      <p className="mt-[190.6px] text-[#4A5565] font-inter text-[16px] font-normal leading-6 text-center">
        Data provided by REST Countries API
      </p>
    </section>
  );
}