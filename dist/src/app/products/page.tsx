'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

// 产品类别
const categories = [
  { id: 'all', name: '全部服务' },
  { id: 'strategy', name: '营销策划' },
  { id: 'content', name: '内容创作' },
  { id: 'video', name: '视听制作' },
  { id: 'digital', name: '数字运营' },
  { id: 'experience', name: '体验设计' },
  { id: 'analysis', name: '效果分析' }
];

// 产品数据
const products = [
  // 内容创作类
  {
    id: 1,
    name: '品牌故事策划与创作',
    category: 'content',
    description: '通过深入挖掘企业价值观与发展历程，构建富有情感共鸣的品牌故事，形成系统化的品牌叙事体系，强化品牌识别度与情感连接。',
    features: ['品牌价值挖掘', '故事架构设计', '多形式内容转化', '品牌语言定制'],
    price: '20,000-50,000元',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: '企业内容营销方案',
    category: 'content',
    description: '基于企业营销目标制定系统化内容营销方案，策划年度/季度内容主题与框架，建立内容创作标准，实现内容资产的持续积累。',
    features: ['内容主题规划', '内容框架搭建', '创作标准制定', '传播节奏设计'],
    price: '15,000-30,000元/季度',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: '专业文案创作服务',
    category: 'content',
    description: '由资深文案团队提供高质量的商业写作服务，包括品牌slogan、产品文案、活动文案、软文等，打造兼具传播力与转化力的文字内容。',
    features: ['市场洞察分析', '创意文案策划', '多场景文案创作', '文案优化迭代'],
    price: '2,000-10,000元/篇',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg'
  },
  
  // 营销策划类
  {
    id: 4,
    name: '品牌营销策略规划',
    category: 'strategy',
    description: '通过市场分析与品牌诊断，制定全面的品牌营销策略，包括品牌定位、目标受众分析、传播策略和营销渠道规划等。',
    features: ['品牌现状诊断', '市场竞争分析', '品牌战略定位', '营销体系构建'],
    price: '50,000-200,000元',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: '整合营销传播方案',
    category: 'strategy',
    description: '基于品牌策略，整合各类传播渠道与营销手段，策划全方位的整合营销方案，实现品牌信息的有效传递与市场影响力提升。',
    features: ['传播渠道规划', '创意策略制定', '执行方案设计', '效果评估体系'],
    price: '30,000-100,000元',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: '营销活动策划执行',
    category: 'strategy',
    description: '提供从创意策划到现场执行的一站式营销活动服务，包括线上线下活动策划、内容设计、物料制作、现场执行等。',
    features: ['活动创意策划', '活动流程设计', '物料创意制作', '现场统筹执行'],
    price: '50,000-300,000元/场',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg'
  },
  
  // 视听制作类
  {
    id: 7,
    name: '品牌形象片制作',
    category: 'video',
    description: '创作高质量的品牌形象宣传片，通过专业的视听语言，全面展示企业形象、文化和价值主张，提升品牌认知度。',
    features: ['创意脚本编写', '专业团队拍摄', '后期精细制作', '多格式输出优化'],
    price: '50,000-200,000元/部',
    image: 'https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: '产品营销视频制作',
    category: 'video',
    description: '针对产品特性与卖点，创作富有营销力的产品视频，通过生动的画面语言展示产品价值，提升用户购买意愿。',
    features: ['产品卖点提炼', '创意表现策略', '专业拍摄制作', '平台优化适配'],
    price: '20,000-80,000元/部',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg'
  },
  {
    id: 9,
    name: '社交媒体短视频创作',
    category: 'video',
    description: '专为社交媒体平台打造的短视频内容创作服务，结合平台特性与传播规律，创作高互动、易传播的品牌短视频。',
    features: ['平台特性分析', '内容创意策划', '专业拍摄制作', '数据反馈优化'],
    price: '5,000-30,000元/条',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=jpg'
  },
  {
    id: 10,
    name: '企业播客制作服务',
    category: 'video',
    description: '策划和制作专业的企业播客节目，通过音频形式传递企业观点、行业洞察或产品信息，建立品牌专业形象。',
    features: ['节目定位策划', '内容脚本创作', '专业录制剪辑', '发布推广优化'],
    price: '8,000-25,000元/期',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // 数字运营类
  {
    id: 11,
    name: '全媒体矩阵运营',
    category: 'digital',
    description: '提供跨平台的全媒体账号矩阵运营服务，包括内容规划、日常更新、互动维护、数据分析等，构建完整的品牌数字资产。',
    features: ['平台矩阵规划', '内容体系建设', '社群互动管理', '数据分析优化'],
    price: '10,000-50,000元/月',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    name: '社交媒体营销',
    category: 'digital',
    description: '基于社交媒体平台特性，提供专业的社媒营销服务，包括账号定位、内容创作、社区运营、广告投放等，提升品牌社交影响力。',
    features: ['平台策略制定', '内容创意策划', '互动引导设计', '转化路径优化'],
    price: '8,000-30,000元/月',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    name: '私域流量运营',
    category: 'digital',
    description: '构建和运营企业私域流量池，通过内容营销、社群运营和会员管理，提升用户粘性与复购率，实现用户资产长期价值。',
    features: ['私域体系设计', '内容策略规划', '社群活动策划', '会员体系管理'],
    price: '15,000-40,000元/月',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // 体验设计类
  {
    id: 14,
    name: '品牌官网设计开发',
    category: 'experience',
    description: '提供从品牌调性研究到UI设计、前端开发的一站式官网建设服务，打造专业、美观、功能完善的企业数字门户。',
    features: ['品牌视觉延展', '用户体验设计', '响应式开发', 'SEO优化'],
    price: '30,000-150,000元',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    name: '数字产品UI/UX设计',
    category: 'experience',
    description: '为企业数字产品提供专业的UI/UX设计服务，包括用户研究、交互设计、界面设计等，提升产品易用性与用户满意度。',
    features: ['用户调研分析', '信息架构设计', '交互原型制作', '视觉界面设计'],
    price: '20,000-100,000元',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 16,
    name: '小程序/H5设计开发',
    category: 'experience',
    description: '提供营销型小程序与H5的设计开发服务，结合营销目标与用户体验，创造具有传播力与转化力的数字营销工具。',
    features: ['营销策略融入', '互动体验设计', '前端开发实现', '数据跟踪部署'],
    price: '15,000-50,000元',
    image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // 效果分析类
  {
    id: 17,
    name: '内容营销效果分析',
    category: 'analysis',
    description: '通过专业的数据分析方法，全面评估内容营销效果，包括内容表现分析、用户行为分析、转化路径分析等，优化内容策略。',
    features: ['多维指标体系', '数据可视化呈现', '内容表现评估', '优化方向建议'],
    price: '5,000-20,000元/次',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 18,
    name: '营销投放效果监测',
    category: 'analysis',
    description: '针对数字营销投放活动提供专业的效果监测与分析服务，实时追踪投放表现，优化营销策略，提升投资回报率。',
    features: ['投放监测体系', '实时数据分析', 'A/B测试方案', 'ROI优化建议'],
    price: '8,000-25,000元/月',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 19,
    name: '品牌数字资产审计',
    category: 'analysis',
    description: '全面审计企业数字营销资产，包括网站、社交账号、内容库等，评估现有数字资产状况，提供系统化提升建议。',
    features: ['全面资产盘点', '竞品对标分析', '问题诊断报告', '提升策略建议'],
    price: '30,000-80,000元',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 20,
    name: '用户洞察研究',
    category: 'analysis',
    description: '通过定性与定量研究方法，深入分析目标用户需求、行为习惯和偏好，为内容创作与营销策略提供数据支持。',
    features: ['用户行为分析', '偏好趋势研究', '内容反馈收集', '洞察报告生成'],
    price: '20,000-60,000元',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

// 解决方案数据
const solutions = [
  {
    id: 1,
    title: '品牌内容全案',
    description: '为企业提供一站式的品牌内容解决方案，从品牌故事梳理、内容策略制定到全媒体内容创作与分发，打造完整的品牌内容生态。',
    features: [
      '品牌故事与内容策略规划',
      '全媒体内容创作矩阵搭建',
      '内容分发与传播体系构建',
      '内容资产管理与效果优化'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: '数字营销生态构建',
    description: '帮助企业建立完整的数字营销生态，整合自有媒体、付费媒体与赢得媒体资源，形成协同传播效应，实现品牌数字化增长。',
    features: [
      '数字媒体矩阵规划与建设',
      '内容营销与社交媒体策略',
      '私域流量体系构建与运营',
      '数据驱动的增长策略优化'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: '垂直行业营销解决方案',
    description: '针对特定行业特性与营销挑战，提供定制化的营销解决方案，结合行业洞察与创新方法，帮助企业在竞争中脱颖而出。',
    features: [
      '行业特性与机会分析',
      '差异化营销策略制定',
      '专业内容创作与传播',
      '行业影响力构建策略'
    ],
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: '企业IP培育计划',
    description: '帮助企业构建与培育独特的品牌IP资产，通过系统化的IP设计、内容开发与运营，打造具有强识别度与情感连接的品牌标识。',
    features: [
      'IP战略定位与角色设计',
      'IP视觉与语言体系构建',
      'IP内容创作与活动策划',
      'IP资产价值转化'
    ],
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 根据分类和搜索词筛选产品
  const filteredProducts = products
    .filter(product => activeCategory === 'all' || product.category === activeCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="pt-16"> {/* 恢复顶部内边距 */}
      {/* 使用PageHeader组件 */}
      <PageHeader
        title="产品服务"
        description="探索美熙科技传媒提供的全方位数字营销与内容创作服务"
        bgColor="bg-blue-600"
        bgImage="url('https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      />

      {/* 产品分类和展示 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* 产品卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=${encodeURIComponent(product.name)}`;
                      console.log(`图片加载失败: ${product.name}, 原始URL: ${product.image}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-xl font-bold text-white px-4 text-center">{product.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">核心特点：</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-semibold">{product.price}</span>
                    <Link 
                      href={`/contact?service=${product.name}`} 
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition-colors text-sm"
                    >
                      咨询服务
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">行业解决方案</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              美熙科技传媒针对不同行业特点和需求，提供定制化的内容创作与营销解决方案，助力企业实现内容价值最大化
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="h-64 rounded-xl overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=${encodeURIComponent(solution.title)}`;
                        console.log(`解决方案图片加载失败: ${solution.title}, 原始URL: ${solution.image}`);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-700 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="bg-transparent hover:bg-purple-600 text-purple-600 hover:text-white border border-purple-600 py-2 px-5 rounded-md font-medium transition-colors inline-block"
                  >
                    了解更多
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的服务流程</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              美熙科技传媒拥有成熟的服务流程和项目管理体系，确保每个项目都能高质高效地完成
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 流程线 */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
              
              {/* 流程步骤 */}
              <div className="space-y-8 md:space-y-0 relative">
                {/* 步骤1 */}
                <div className="md:flex items-center md:space-x-8 md:odd:flex-row-reverse md:odd:space-x-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-24 text-center md:text-right md:odd:text-left">
                    <div className="bg-purple-100 p-6 rounded-lg relative md:mr-8 md:odd:mr-0 md:odd:ml-8">
                      <div className="absolute top-1/2 -right-12 md:odd:-left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <span className="inline-block md:hidden bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 mx-auto">1</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">需求沟通</h3>
                      <p className="text-gray-700">深入了解客户的业务目标、受众特点、传播渠道和预期效果，确保后续工作方向明确</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
                
                {/* 步骤2 */}
                <div className="md:flex items-center md:space-x-8">
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="md:w-1/2 mb-8 md:mb-24 text-center md:text-left">
                    <div className="bg-purple-100 p-6 rounded-lg relative md:ml-8">
                      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <span className="inline-block md:hidden bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 mx-auto">2</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">策略制定</h3>
                      <p className="text-gray-700">基于需求沟通结果，制定详细的内容策略和创作计划，明确内容方向、风格和关键信息点</p>
                    </div>
                  </div>
                </div>
                
                {/* 步骤3 */}
                <div className="md:flex items-center md:space-x-8 md:odd:flex-row-reverse md:odd:space-x-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-24 text-center md:text-right md:odd:text-left">
                    <div className="bg-purple-100 p-6 rounded-lg relative md:mr-8 md:odd:mr-0 md:odd:ml-8">
                      <div className="absolute top-1/2 -right-12 md:odd:-left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <span className="inline-block md:hidden bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 mx-auto">3</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">创意执行</h3>
                      <p className="text-gray-700">由专业团队进行内容创作和制作，包括文案撰写、设计制作、视频拍摄等，确保高质量输出</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
                
                {/* 步骤4 */}
                <div className="md:flex items-center md:space-x-8">
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="md:w-1/2 mb-8 md:mb-24 text-center md:text-left">
                    <div className="bg-purple-100 p-6 rounded-lg relative md:ml-8">
                      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <span className="inline-block md:hidden bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 mx-auto">4</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">优化调整</h3>
                      <p className="text-gray-700">根据客户反馈进行内容优化和调整，确保最终成果完全符合客户期望和市场需求</p>
                    </div>
                  </div>
                </div>
                
                {/* 步骤5 */}
                <div className="md:flex items-center md:space-x-8 md:odd:flex-row-reverse md:odd:space-x-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-right md:odd:text-left">
                    <div className="bg-purple-100 p-6 rounded-lg relative md:mr-8 md:odd:mr-0 md:odd:ml-8">
                      <div className="absolute top-1/2 -right-12 md:odd:-left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <span className="inline-block md:hidden bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 mx-auto">5</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">效果追踪</h3>
                      <p className="text-gray-700">内容发布后进行数据追踪和效果分析，为客户提供详细的效果报告和优化建议</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">成功案例</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              我们为众多行业领先企业提供内容创作和数字营销服务，以下是部分成功案例
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 font-medium">客户 {item}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block"
            >
              成为我们的客户
            </Link>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
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
                预约咨询
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent hover:bg-purple-800 text-white border border-white py-3 px-8 rounded-md font-bold transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 