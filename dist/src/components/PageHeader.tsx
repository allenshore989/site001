'use client';

import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  description: string;
  bgColor?: string; // 背景颜色
  bgImage?: string; // 背景图片
  buttonText?: string;
  buttonLink?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  bgColor = 'bg-blue-600', // 默认蓝色背景
  bgImage,
  buttonText,
  buttonLink 
}: PageHeaderProps) {
  return (
    <section className={`relative h-[400px] overflow-hidden ${bgColor}`}>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      {bgImage && (
        <div 
          className="absolute inset-0 bg-center bg-cover z-0" 
          style={{ backgroundImage: bgImage }}
        ></div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">{description}</p>
        {buttonText && buttonLink && (
          <Link 
            href={buttonLink} 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-colors"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
} 