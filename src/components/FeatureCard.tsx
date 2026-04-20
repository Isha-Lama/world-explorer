import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="
      group w-76 h-66 bg-white rounded-3xl p-8 
      flex flex-col items-start shrink-0
      border border-transparent
      shadow-lg shadow-black/5
      cursor-pointer
      transition-all duration-500 ease-[0.16,1,0.3,1]
      hover:scale-[1.05] 
      hover:shadow-[0_25px_60px_10px_rgba(168,85,247,0.3)]
      hover:border-pink-100
    ">
      <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center text-[#155DFC] transition-all duration-500 group-hover:bg-pink-50 group-hover:text-pink-500 group-hover:rotate-12">
        {icon}
      </div>
      
      <h3 className="mt-[22.8px] text-[#0A0A0A] font-inter text-[20px] font-semibold leading-7 transition-colors duration-300 group-hover:text-pink-600">
        {title}
      </h3>
      
      <p className="mt-2.75 w-60 text-[#4A5565] font-inter text-[16px] font-normal leading-6 shrink-0">
        {description}
      </p>
    </div>
  );
}