'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

// 新闻分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'company', name: '公司新闻' },
  { id: 'industry', name: '行业新闻' },
  { id: 'announcement', name: '公司公告' },
  { id: 'information', name: '行业资讯' }
];

// 新闻数据
const newsItems = [
  {
    id: 1,
    title: '美熙科技传媒推出AI内容创作平台',
    category: 'company',
    date: '2023-06-12',
    summary: '美熙科技传媒今日正式发布基于人工智能的内容创作平台，该平台能够辅助创意人员更高效地生成多样化内容，显著提升内容创作效率。',
    imageUrl: 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '美熙科技传媒今日正式发布基于人工智能的内容创作平台，该平台能够辅助创意人员更高效地生成多样化内容，显著提升内容创作效率。此次发布的AI内容创作平台在多个方面都有创新：首先，平台具备多模态创作能力，可以同时处理文字、图像和视频内容；其次，AI辅助创作功能可以根据简单指令生成初稿，减少创意人员的重复性工作；最后，平台内置了质量评估系统，确保生成内容符合品牌调性和传播价值。该平台的发布标志着美熙在数字内容创作领域迈出了重要一步，将为品牌客户提供更高效、更具创意的内容服务。'
  },
  {
    id: 2,
    title: '美熙参加2023年数字营销峰会',
    category: 'company',
    date: '2023-05-20',
    summary: '美熙科技传媒参加了在深圳举办的2023年数字营销峰会，分享了内容营销的最新趋势和策略，展示了公司在短视频营销领域的创新案例。',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '美熙科技传媒参加了在深圳举办的2023年数字营销峰会，分享了内容营销的最新趋势和策略，展示了公司在短视频营销领域的创新案例。在为期三天的峰会上，美熙展台吸引了大量营销专业人士，公司展示的短视频创意案例和内容分发策略获得了行业同仁的高度评价。美熙创意总监李娜女士在峰会上发表了题为《短视频时代的品牌内容创作与传播》的演讲，分享了公司在内容创作和全渠道分发方面的经验与见解。此次参展不仅提升了美熙的行业影响力，也为公司开拓了更多的客户合作机会。'
  },
  {
    id: 3,
    title: '美熙与某电商平台达成战略合作',
    category: 'announcement',
    date: '2023-04-15',
    summary: '美熙科技传媒与国内某知名电商平台正式签署战略合作协议，双方将在内容营销和品牌传播领域展开深入合作，为平台商家提供一站式内容营销服务。',
    imageUrl: 'https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '美熙科技传媒与国内某知名电商平台正式签署战略合作协议，双方将在内容营销和品牌传播领域展开深入合作，为平台商家提供一站式内容营销服务。根据协议，美熙将为电商平台的商家提供从内容策划、视频拍摄到全渠道分发的整合营销服务；电商平台则将为美熙提供流量支持和数据分析能力。双方还将共同开发针对电商场景的内容营销解决方案，帮助商家提升品牌影响力和产品转化率。此次合作是美熙拓展电商内容营销业务的重要举措，也标志着公司在垂直行业服务方面迈出了坚实的一步。预计在未来一年内，美熙将为该平台上的百家商家提供内容营销服务，帮助品牌在激烈的电商竞争中脱颖而出。'
  },
  {
    id: 4,
    title: '数字营销行业发展趋势分析',
    category: 'information',
    date: '2023-03-28',
    summary: '本文分析了2023年数字营销行业的最新发展趋势，包括AI辅助创作、内容碎片化、私域流量运营等方向，以及品牌如何应对这些变化。',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '本文分析了2023年数字营销行业的最新发展趋势，包括AI辅助创作、内容碎片化、私域流量运营等方向，以及品牌如何应对这些变化。随着人工智能技术的发展，AI辅助内容创作正在改变传统的内容生产方式，提高了创作效率同时降低了成本。内容碎片化趋势要求品牌能够在短时间内吸引用户注意力，需要更加简洁有力的内容表达。私域流量运营成为品牌建立长期用户关系的重要手段，如何构建有效的私域内容生态是当前品牌面临的重要课题。同时，随着各平台算法的不断调整，如何优化内容以适应算法推荐也成为营销人员需要关注的技能。面对这些变化，品牌需要更新营销策略，建立灵活的内容创作和分发机制，才能在激烈的市场竞争中保持优势。'
  },
  {
    id: 5,
    title: '美熙2023年第一季度业绩公告',
    category: 'announcement',
    date: '2023-03-10',
    summary: '美熙科技传媒发布2023年第一季度业绩公告，公司营收同比增长30%，品牌内容营销和视频制作业务增长显著。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '美熙科技传媒发布2023年第一季度业绩公告，公司营收同比增长30%，品牌内容营销和视频制作业务增长显著。根据公告，公司第一季度实现营收1.2亿元，净利润1500万元，同比增长35%。在业务结构方面，品牌内容营销服务收入同比增长40%，视频制作业务增长25%，网站建设和运营服务收入增长20%。公司董事长张伟表示，第一季度的优异业绩得益于公司在内容创意和技术创新方面的持续投入，以及数字营销市场的快速增长。展望未来，公司将继续加大创意和技术投入，进一步提升服务质量和客户满意度，同时积极拓展新的业务领域，力争全年实现更好的业绩表现。'
  },
  {
    id: 6,
    title: '全球内容营销市场规模将在2028年达到1万亿美元',
    category: 'industry',
    date: '2023-02-20',
    summary: '根据最新市场研究报告，全球内容营销市场规模预计将从2023年的4000亿美元增长到2028年的1万亿美元，年复合增长率约为20%。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '根据最新市场研究报告，全球内容营销市场规模预计将从2023年的4000亿美元增长到2028年的1万亿美元，年复合增长率约为20%。报告指出，推动市场增长的主要因素包括数字媒体消费的增加、社交媒体平台的普及、视频内容需求的爆发性增长，以及企业对内容营销ROI认可度的提高。在地区分布方面，北美和欧洲市场目前占据主导地位，但亚太地区，特别是中国市场的增长速度最快。在内容类型方面，视频内容、社交媒体短内容和互动式内容是增长最快的三个领域。报告还指出，AI技术在内容创作和优化中的应用将进一步推动市场增长，同时内容个性化和精准分发将成为品牌投资的重点方向。'
  },
  {
    id: 7,
    title: '美熙荣获"2023年度最具创新力内容机构"称号',
    category: 'company',
    date: '2023-01-15',
    summary: '在近日举行的"2023中国数字营销峰会"上，美熙科技传媒荣获"2023年度最具创新力内容机构"称号，公司创作的品牌短视频系列也获得了"年度最佳内容营销案例"奖。',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '在近日举行的"2023中国数字营销峰会"上，美熙科技传媒荣获"2023年度最具创新力内容机构"称号，公司创作的品牌短视频系列也获得了"年度最佳内容营销案例"奖。这两项大奖的获得，是业界对美熙在创意内容和数字营销方面成就的高度认可。美熙创意总监李娜在获奖感言中表示，公司将继续秉持创新精神，融合前沿技术与优质内容，为客户创造更具传播力的品牌资产。此次峰会汇集了数字营销行业的众多知名企业和专家，与会者就内容创新、技术应用、营销效果等话题进行了深入交流。美熙还在会上展示了即将推出的AI辅助内容创作工具，引起了与会者的广泛关注。'
  },
  {
    id: 8,
    title: 'AI技术将如何改变内容创作和营销？',
    category: 'information',
    date: '2022-12-28',
    summary: '随着AI技术的快速发展，内容创作和营销方式正在发生革命性变化。本文探讨了AI技术将如何影响未来的内容创作和数字营销行业，带来更加高效、个性化的营销体验。',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=jpg',
    content: '随着AI技术的快速发展，内容创作和营销方式正在发生革命性变化。本文探讨了AI技术将如何影响未来的内容创作和数字营销行业，带来更加高效、个性化的营销体验。首先，生成式AI的应用正在改变内容生产方式，大幅提高了内容创作的效率和多样性；其次，人工智能算法可以基于用户行为和偏好，为每个用户提供个性化的内容推荐，提升内容触达效果；第三，AI驱动的数据分析能够更准确地评估营销效果，指导营销策略调整；最后，AI技术在视觉和音频创作领域的应用，正在拓展内容表现形式的边界。随着这些技术的不断成熟，未来的内容营销将更加精准、高效，同时对创意人员的要求也将从基础内容生产转向创意策略和内容架构设计，形成人机协作的内容创作新模式。'
  }
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 根据分类和搜索词筛选新闻
  const filteredNews = newsItems
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="pt-16"> {/* 恢复顶部内边距 */}
      {/* 使用PageHeader组件 */}
      <PageHeader
        title="新闻动态"
        description="了解美熙科技传媒最新动态和行业资讯"
        bgColor="bg-purple-600"
        bgImage="url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      />

      {/* 新闻筛选和搜索 */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* 搜索框 */}
            <div className="relative">
              <input
                type="text"
                placeholder="搜索新闻..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻列表 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <div key={news.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.imageUrl} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=${encodeURIComponent(news.title)}`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {categories.find(cat => cat.id === news.category)?.name || news.category}
                      </span>
                      <span className="text-gray-500 text-sm">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{news.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{news.summary}</p>
                    <Link 
                      href={`/news/${news.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
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
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关新闻</h3>
              <p className="text-gray-600">
                请尝试使用其他关键词搜索，或者选择其他分类查看。
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
              >
                查看全部新闻
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 订阅新闻 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">订阅我们的新闻</h2>
            <p className="text-gray-700 mb-8">
              想第一时间了解美熙的最新动态和行业资讯？请订阅我们的新闻邮件，我们将定期发送最新信息到您的邮箱。
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 flex-1 max-w-md"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
                订阅
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              我们尊重您的隐私，绝不会向第三方泄露您的信息。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 