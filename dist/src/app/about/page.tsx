'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

// 团队成员数据
const teamMembers = [
  {
    id: 1,
    name: 'Alan.Shore',
    position: '创始人 & CEO',
    bio: '硅谷顶尖科技企业家，拥有20年科技与数字营销经验，曾担任多家财富500强企业高管，2021年创立美熙科技传媒。',
    imageUrl: '/about/ceo.jpg'
  },
  {
    id: 2,
    name: 'David Thompson',
    position: '创意总监',
    bio: '前苹果公司创意设计主管，多次参与苹果产品发布会策划，曾获多项国际设计大奖，负责美熙品牌创意与设计方向。',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=jpg'
  },
  {
    id: 3,
    name: 'Emma Rogers',
    position: '市场总监',
    bio: '前谷歌全球营销策略主管，哈佛商学院MBA，专精数字营销与品牌增长，曾主导多个全球知名品牌的市场战略。',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=jpg'
  },
  {
    id: 4,
    name: 'Robert Chen',
    position: '技术总监',
    bio: '前亚马逊AWS技术专家，斯坦福大学AI研究员，在人工智能、大数据和云计算领域拥有多项国际专利。',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=jpg'
  }
];

// 发展历程数据
const milestones = [
  {
    id: 1,
    year: '2010',
    title: '公司成立',
    description: '美熙科技传媒在深圳成立，初期专注于数字内容创作和品牌营销服务。'
  },
  {
    id: 2,
    year: '2013',
    title: '业务扩展',
    description: '扩展网站建设和视频制作业务，成为综合性数字营销服务提供商。'
  },
  {
    id: 3,
    year: '2016',
    title: '技术突破',
    description: '组建专业技术团队，将AI技术应用于内容创作和营销分析领域。'
  },
  {
    id: 4,
    year: '2018',
    title: '战略转型',
    description: '推出全媒体营销解决方案，为企业提供一站式品牌传播服务。'
  },
  {
    id: 5,
    year: '2020',
    title: '全国布局',
    description: '在全国建立8个分支机构，服务网络覆盖主要城市。'
  },
  {
    id: 6,
    year: '2023',
    title: '国际化发展',
    description: '开始拓展国际市场，为跨国企业提供本地化内容创作和营销服务。'
  }
];

// 企业价值观数据
const values = [
  {
    id: 1,
    icon: '🔍',
    title: '创新',
    description: '持续创新是我们的核心驱动力，不断探索前沿技术与创意，为客户创造更大价值。'
  },
  {
    id: 2,
    icon: '🤝',
    title: '诚信',
    description: '诚实守信是我们的基本准则，以真诚赢得客户和合作伙伴的信任。'
  },
  {
    id: 3,
    icon: '🎯',
    title: '专注',
    description: '专注于数字内容与营销领域，深耕细作，提供专业的服务和解决方案。'
  },
  {
    id: 4,
    icon: '🌱',
    title: '可持续',
    description: '注重内容价值和品牌长期发展，提供可持续增长的营销解决方案。'
  }
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* 使用带背景图的PageHeader组件 */}
      <PageHeader
        title="关于我们"
        description="认识美熙科技传媒，了解我们的使命、愿景和发展历程"
        bgColor="bg-purple-600"
        bgImage="url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      />

      {/* 公司简介 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">公司简介</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                美熙科技传媒成立于2010年，由Alan创立，是一家专注于数字营销和内容创作的高科技传媒企业。公司总部采用了与苹果公司Apple Park类似的环形设计理念，构建了极具科技感的现代化办公环境，位于深圳湾科技创新中心，在全国设有多个分支机构。
              </p>
              <p className="text-gray-700 mb-4">
                经过多年的发展，美熙已经成为数字营销与内容创作领域的领先企业，拥有来自美国硅谷的顶尖管理团队和创意人才，服务范围涵盖商业咨询、网站建设、视频制作、营销策划等多个领域。
              </p>
              <p className="text-gray-700 mb-6">
                我们秉持"创意驱动价值，科技赋能传播"的理念，致力于通过优质内容和创新技术，帮助企业提升品牌影响力，实现商业增长。
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors inline-block"
              >
                联系我们
              </Link>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1626271763156-706c953e2dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg" 
                alt="美熙科技传媒总部 - Apple Park风格建筑" 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=环形总部大楼`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 使命与愿景 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">使命与愿景</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">我们的使命</h3>
                <p className="text-gray-700">
                  通过创意内容和数字技术，帮助品牌构建有效的传播体系，提升品牌影响力和市场价值，实现可持续的业务增长。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">我们的愿景</h3>
                <p className="text-gray-700">
                  成为全球领先的数字营销内容创作机构，引领传媒行业创新发展，打造连接品牌与受众的桥梁，让优质内容创造更大价值。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">核心团队</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=${encodeURIComponent(member.name)}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">发展历程</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="flex mb-8 last:mb-0">
                <div className="mr-6 relative">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-14 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-blue-200"></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">企业文化</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center p-8 bg-gray-50 rounded-lg transition-transform hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA部分 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">加入美熙，共创内容新价值</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            我们始终寻找优秀的人才加入团队，如果您对数字营销和创意内容充满热情，欢迎加入我们！
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-md font-bold transition-colors inline-block"
          >
            联系我们
          </Link>
        </div>
      </section>
    </main>
  );
} 