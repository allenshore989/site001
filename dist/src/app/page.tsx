'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 轮播图数据
export const carouselItems = [
  {
    id: 1,
    backgroundColor: 'bg-blue-600',
    backgroundImage: 'https://images.unsplash.com/photo-1596262223917-2c71d953bf45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=jpg',
    title: '美熙数字营销策划',
    description: '创新策略，精准定位，助力品牌数字化转型',
    buttonText: '了解更多',
    buttonLink: '/products'
  },
  {
    id: 2,
    backgroundColor: 'bg-purple-600',
    backgroundImage: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=jpg',
    title: '专业视频制作服务',
    description: '从创意到成片，一站式视频内容创作解决方案',
    buttonText: '查看案例',
    buttonLink: '/products'
  },
  {
    id: 3,
    backgroundColor: 'bg-teal-600',
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=jpg',
    title: '响应式网站建设',
    description: '技术驱动创意，打造引领行业的品牌网站',
    buttonText: '服务详情',
    buttonLink: '/products'
  }
];

// 服务特色数据
const features = [
  {
    id: 1,
    icon: '💼',
    iconImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&fm=jpg',
    title: '商业咨询',
    description: '提供专业的数字化转型咨询服务，帮助企业制定完善的数字战略，把握市场机遇。'
  },
  {
    id: 2,
    icon: '🎬',
    iconImage: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&fm=jpg',
    title: '视频制作',
    description: '专业的视频拍摄、剪辑和后期团队，为品牌创作高质量、有传播力的视频内容。'
  },
  {
    id: 3,
    icon: '🌐',
    iconImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&fm=jpg',
    title: '网站建设',
    description: '从创意设计到技术实现，打造响应式、高性能、用户体验优秀的品牌网站。'
  },
  {
    id: 4,
    icon: '📱',
    iconImage: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&fm=jpg',
    title: '营销策划',
    description: '整合线上线下资源，策划创新营销活动，提升品牌影响力和用户转化率。'
  }
];

// 服务展示数据
const products = [
  {
    id: 1,
    name: '企业品牌网站建设',
    description: '专业定制开发，打造品牌形象网站',
    backgroundColor: 'bg-gray-200',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg',
    link: '/products'
  },
  {
    id: 2,
    name: '数字营销全案策划',
    description: '整合多平台资源，提升品牌影响力',
    backgroundColor: 'bg-gray-200',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg',
    link: '/products'
  },
  {
    id: 3,
    name: '商业视频制作',
    description: '品牌宣传片、产品介绍视频、社交媒体短视频',
    backgroundColor: 'bg-gray-200',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg',
    link: '/products'
  }
];

// 数据统计
const stats = [
  { id: 1, value: '10+', label: '年行业经验' },
  { id: 2, value: '200+', label: '合作企业' },
  { id: 3, value: '1000+', label: '成功案例' },
  { id: 4, value: '99%', label: '客户满意度' }
];

// 提取轮播图组件，以便在其他页面重用
export function Carousel({ height = 'h-[600px]', showButtons = true }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 手动切换轮播图
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className={`relative ${height} overflow-hidden`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full" 
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className={`min-w-full h-full relative ${item.backgroundColor}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
            <div 
              className="absolute inset-0 bg-center bg-cover z-0" 
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
              ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{item.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">{item.description}</p>
              <Link 
                href={item.buttonLink} 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-colors"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* 轮播图指示器 */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
        {carouselItems.map((_, index) => (
          <button 
            key={index} 
            className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => goToSlide(index)}
            aria-label={`转到幻灯片 ${index + 1}`}
          />
        ))}
      </div>
      
      {/* 左右箭头 */}
      {showButtons && (
        <>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center z-30"
            onClick={() => setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center z-30"
            onClick={() => setActiveSlide((prev) => (prev + 1) % carouselItems.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 使用提取的轮播图组件 */}
      <Carousel />

      {/* 欢迎部分 */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* 左侧文字部分 */}
              <div className="md:w-1/2 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80&fm=jpg" 
                    alt="美熙科技传媒Logo" 
                    className="h-20 w-20 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=LOGO`;
                    }}
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">欢迎来到美熙科技传媒</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto md:mx-0 mb-8"></div>
                <p className="text-lg text-gray-700 mb-8">
                  美熙科技传媒有限公司是专注于数字营销与内容创作的综合服务提供商，致力于通过创新科技与优质内容帮助企业提升品牌影响力。我们提供从商业咨询、网站建设到视频制作、营销策划的全方位数字解决方案，为客户创造持续增长的商业价值。
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-colors">
                    了解我们
                  </Link>
                  <Link href="/contact" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 py-2 px-6 rounded-full font-medium transition-colors">
                    联系我们
                  </Link>
                </div>
              </div>
              
              {/* 右侧图片部分 */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg z-0"></div>
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1526293987832-60dc8bcc9810?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=jpg" 
                      alt="美熙科技传媒总部 - Apple Park风格建筑" 
                      className="w-full h-auto"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Apple Park风格总部`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务特色 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">我们的服务</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="h-40 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={feature.iconImage} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=${feature.icon}`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务展示 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">热门服务</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-2xl font-bold text-white text-center px-4">{product.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <Link href={product.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    了解更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-colors">
              查看全部服务
            </Link>
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        {/* 背景图片和遮罩 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=jpg")' }}
        ></div>
        
        {/* 水印和装饰效果 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/3 translate-x-1/3 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full translate-y-1/3 -translate-x-1/3 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">最新动态</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg" 
                  alt="美熙科技传媒推出全新AI营销解决方案" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=公司新闻`;
                  }}
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">公司新闻</div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">2023-06-12</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">美熙科技传媒推出全新AI营销解决方案</h3>
                <p className="text-gray-700 mb-4">美熙科技传媒今日正式发布基于人工智能的新一代数字营销解决方案，帮助品牌实现更精准的用户触达和转化...</p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  阅读更多 →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg" 
                  alt="美熙参加2023年数字营销峰会" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=行业资讯`;
                  }}
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">行业资讯</div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">2023-05-20</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">美熙参加2023年数字营销峰会</h3>
                <p className="text-gray-700 mb-4">美熙科技传媒参加了在深圳举办的2023年数字营销峰会，分享了短视频营销的最新趋势和策略...</p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  阅读更多 →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg" 
                  alt="美熙与某知名电商平台达成战略合作" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=合作动态`;
                  }}
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">合作动态</div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">2023-04-15</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">美熙与某知名电商平台达成战略合作</h3>
                <p className="text-gray-700 mb-4">美熙科技传媒与国内某知名电商平台正式签署战略合作协议，将为平台商家提供一站式内容营销服务...</p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  阅读更多 →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-colors">
              查看更多新闻
            </Link>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">联系我们</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">联系方式</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">地址</p>
                      <p className="text-gray-700">中国广东省深圳市南山区科技园 美熙大厦</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">电话</p>
                      <p className="text-gray-700">+86 755-8888-7777</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">邮箱</p>
                      <p className="text-gray-700">contact@meixi.com</p>
                    </div>
                  </div>
                </div>
                
                {/* 添加地图图片 */}
                <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg" 
                    alt="公司地图位置" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=公司地图`;
                    }}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">给我们留言</h3>
                <form className="space-y-4 mb-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="您的姓名" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="您的邮箱" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="您的留言" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
                    提交留言
                  </button>
                </form>
                
                {/* 添加二维码图片 */}
                <div className="mt-6 bg-white p-4 border border-gray-200 rounded-lg shadow-sm text-center">
                  <p className="text-gray-700 mb-2">扫描二维码关注我们</p>
                  <div className="bg-gray-100 p-2 rounded-lg inline-block">
                    <img 
                      src="https://images.unsplash.com/photo-1607000270395-2381bd2f2053?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&fm=jpg" 
                      alt="公司二维码" 
                      className="w-32 h-32 object-cover mx-auto"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=关注我们`;
                      }}
                    />
                  </div>
                  <p className="text-blue-600 text-sm mt-2">美熙科技传媒</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
