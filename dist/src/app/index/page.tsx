'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 轮播图数据
const slides = [
  {
    id: 1,
    title: '内容创造价值，创意驱动增长',
    description: '美熙科技传媒 - 用专业内容助力品牌传播',
    imageUrl: 'https://placehold.co/1920x800/e2e8f0/475569?text=美熙科技传媒',
    buttonText: '了解我们的服务',
    buttonLink: '/products'
  },
  {
    id: 2,
    title: '全渠道内容创作，多维度品牌传播',
    description: '从短视频到图文，从社媒到官网，我们提供一站式内容创作与分发服务',
    imageUrl: 'https://placehold.co/1920x800/d1d5db/4b5563?text=全渠道内容创作',
    buttonText: '浏览成功案例',
    buttonLink: '/products'
  },
  {
    id: 3,
    title: '数据驱动，创意为王',
    description: '整合AI技术与人文创意，打造兼具传播力与转化力的品牌内容',
    imageUrl: 'https://placehold.co/1920x800/e2e8f0/475569?text=数据驱动创意为王',
    buttonText: '联系我们',
    buttonLink: '/contact'
  }
];

// 服务数据
const services = [
  {
    id: 1,
    icon: '📊',
    title: '整合营销策划',
    description: '基于数据分析与市场洞察，为品牌提供全渠道整合营销策略，实现传播与转化的双重目标',
    link: '/products'
  },
  {
    id: 2,
    icon: '📝',
    title: '品牌内容创作',
    description: '提供品牌故事梳理、价值主张提炼及多形式内容创作，塑造一致且富有感染力的品牌形象',
    link: '/products'
  },
  {
    id: 3,
    icon: '🎬',
    title: '视听内容制作',
    description: '专业的视频与音频内容制作，包括品牌宣传片、产品演示、企业形象片和播客等多元内容形式',
    link: '/products'
  },
  {
    id: 4,
    icon: '📱',
    title: '数字媒体运营',
    description: '全平台数字媒体账号运营管理，内容规划与执行，粉丝互动与社群建设，提升品牌数字资产价值',
    link: '/products'
  },
  {
    id: 5,
    icon: '🖥️',
    title: '数字体验设计',
    description: '网站与应用设计开发，用户体验优化，打造符合品牌调性的数字触点和交互体验',
    link: '/products'
  },
  {
    id: 6,
    icon: '🔍',
    title: '内容效果分析',
    description: '通过专业的数据分析工具，评估内容营销效果，优化内容策略，提升投资回报率',
    link: '/products'
  }
];

// 公司优势
const advantages = [
  {
    id: 1,
    title: '专业创意团队',
    description: '由资深创意总监领衔，集结文案策划、视觉设计、视频创作等多领域专家',
    icon: '👥'
  },
  {
    id: 2,
    title: '数据驱动创作',
    description: '结合市场洞察和数据分析，创造既有情感共鸣又有转化效果的内容',
    icon: '📈'
  },
  {
    id: 3,
    title: '全渠道内容适配',
    description: '根据不同平台特性，提供定制化内容创作，确保传播效果最大化',
    icon: '🔄'
  },
  {
    id: 4,
    title: 'AI技术赋能',
    description: '运用先进AI工具辅助内容创作和优化，提高创作效率和内容质量',
    icon: '🤖'
  }
];

// 客户评价
const testimonials = [
  {
    id: 1,
    name: '张先生',
    position: '某科技公司市场总监',
    comment: '美熙科技传媒为我们提供的内容营销服务非常专业，他们对市场趋势的敏锐把握和创意表达能力给我们留下了深刻印象。通过合作，我们的品牌知名度和用户转化率都有了显著提升。',
    avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=张'
  },
  {
    id: 2,
    name: '李女士',
    position: '某电商平台品牌负责人',
    comment: '与美熙的合作让我们的产品在激烈的市场竞争中脱颖而出。他们创作的内容不仅吸引人，而且能准确传达产品价值，大大提升了我们的销售转化率。期待未来有更多合作机会！',
    avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=李'
  },
  {
    id: 3,
    name: '王先生',
    position: '某金融机构品牌部主管',
    comment: '美熙团队对金融行业的理解非常深入，能够将复杂的金融产品特性通过生动的内容表达出来，让用户易于理解。他们创作的内容既专业又不失趣味性，完美契合我们的品牌调性。',
    avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=王'
  }
];

// 最新动态
const news = [
  {
    id: 1,
    title: '美熙科技传媒推出AI内容创作平台',
    date: '2023-06-12',
    summary: '美熙科技传媒今日正式发布基于人工智能的内容创作平台，该平台能够辅助创意人员更高效地生成多样化内容，显著提升内容创作效率。',
    link: '/news/1'
  },
  {
    id: 2,
    title: '美熙参加2023年数字营销峰会',
    date: '2023-05-20',
    summary: '美熙科技传媒参加了在深圳举办的2023年数字营销峰会，分享了内容营销的最新趋势和策略，展示了公司在短视频营销领域的创新案例。',
    link: '/news/2'
  },
  {
    id: 3,
    title: '美熙荣获"2023年度最具创新力内容机构"称号',
    date: '2023-01-15',
    summary: '在近日举行的"2023中国数字营销峰会"上，美熙科技传媒荣获"2023年度最具创新力内容机构"称号，公司创作的品牌短视频系列也获得了"年度最佳内容营销案例"奖。',
    link: '/news/7'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <main>
      {/* 轮播图 */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 bg-gray-200 flex items-center justify-center ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <Link href={slide.buttonLink} className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
        
        {/* 指示器 */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>
      
      {/* 关于我们 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于美熙科技传媒</h2>
            <p className="text-xl text-gray-700">
              美熙科技传媒是一家专注于数字内容创作与营销的专业机构，致力于用创意和技术的力量，
              帮助品牌建立有效的沟通体系，提升品牌影响力和市场价值。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.id} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 inline-block">{advantage.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about" className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
              了解更多关于我们
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 我们的服务 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的服务</h2>
            <p className="text-xl text-gray-700">
              美熙科技传媒提供全方位的内容创作与数字营销服务，助力品牌在数字时代脱颖而出
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 inline-block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={service.link} className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
                  了解详情
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block">
              查看全部服务
            </Link>
          </div>
        </div>
      </section>
      
      {/* 客户评价 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-xl text-gray-700">
              听听我们的客户如何评价美熙科技传媒的服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-gray-500">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 最新动态 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">最新动态</h2>
            <p className="text-xl text-gray-700">
              了解美熙科技传媒的最新动态和行业资讯
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {news.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{item.summary}</p>
                  <Link 
                    href={item.link} 
                    className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                  >
                    阅读更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news" className="bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 px-8 rounded-md font-medium transition-colors inline-block">
              查看全部动态
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好提升您的品牌内容了吗？</h2>
            <p className="text-xl mb-8 text-purple-100">
              联系美熙科技传媒，我们将为您打造独特而有效的内容营销解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-700 hover:bg-purple-200 py-3 px-8 rounded-md font-bold transition-colors"
              >
                联系我们
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent hover:bg-purple-800 text-white border border-white py-3 px-8 rounded-md font-bold transition-colors"
              >
                了解服务
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 