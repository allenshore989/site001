'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  publishDate: string;
  status: 'published' | 'draft';
}

export default function NewsManagement() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // 模拟从API获取数据
    const fetchNews = () => {
      setIsLoading(true);
      // 这里应该是真实API调用
      setTimeout(() => {
        const mockNews: NewsItem[] = [
          { id: 1, title: '美熙有限公司发布全新智能家居系统', category: '公司新闻', publishDate: '2023-06-12', status: 'published' },
          { id: 2, title: '美熙参加2023年智能科技展览会', category: '行业新闻', publishDate: '2023-05-20', status: 'published' },
          { id: 3, title: '美熙与腾讯云达成战略合作', category: '公司新闻', publishDate: '2023-04-15', status: 'published' },
          { id: 4, title: '智能家居行业发展趋势分析', category: '行业资讯', publishDate: '2023-03-28', status: 'published' },
          { id: 5, title: '美熙2023年第一季度业绩公告', category: '公司公告', publishDate: '2023-03-10', status: 'published' },
          { id: 6, title: '新一代产品研发计划草案', category: '内部新闻', publishDate: '2023-06-18', status: 'draft' },
        ];
        setNewsItems(mockNews);
        setIsLoading(false);
      }, 800);
    };

    fetchNews();
  }, []);

  // 过滤新闻列表
  const filteredNews = newsItems.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 删除新闻项
  const handleDelete = (id: number) => {
    if (window.confirm('确定要删除这条新闻吗？此操作不可撤销。')) {
      // 在实际应用中，这里应该调用API删除数据
      setNewsItems(prevNews => prevNews.filter(news => news.id !== id));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">新闻管理</h1>
          <p className="mt-1 text-sm text-gray-600">管理网站新闻内容</p>
        </div>
        <Link href="/admin/news/create" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          添加新闻
        </Link>
      </div>

      {/* 搜索栏 */}
      <div className="mb-6">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="搜索新闻标题或分类..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 新闻列表 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {isLoading ? (
          <div className="py-10 flex justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>正在加载...</span>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  标题
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  分类
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  发布日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredNews.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                    没有找到匹配的新闻
                  </td>
                </tr>
              ) : (
                filteredNews.map((news) => (
                  <tr key={news.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {news.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {news.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {news.publishDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        news.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {news.status === 'published' ? '已发布' : '草稿'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Link href={`/admin/news/edit/${news.id}`} className="text-indigo-600 hover:text-indigo-900">
                          编辑
                        </Link>
                        <button 
                          onClick={() => handleDelete(news.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          删除
                        </button>
                        <Link href={`/news/${news.id}`} target="_blank" className="text-gray-600 hover:text-gray-900">
                          查看
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
} 