'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface NewsEditPageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function NewsEditPage({ params }: NewsEditPageProps) {
  const router = useRouter();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    status: '' as 'published' | 'draft',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 分类选项
  const categories = [
    '公司新闻',
    '行业新闻',
    '公司公告',
    '行业资讯',
    '内部新闻',
  ];

  useEffect(() => {
    // 模拟从API获取数据
    const fetchNewsData = async () => {
      setIsLoading(true);
      try {
        // 在实际应用中，这里应该调用API获取新闻详情
        // const response = await fetch(`/api/news/${id}`);
        // const data = await response.json();
        
        // 模拟数据
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // 根据ID匹配模拟数据
        const mockNewsItems = [
          { id: 1, title: '美熙有限公司发布全新智能家居系统', category: '公司新闻', content: '美熙有限公司今日正式发布了全新一代智能家居系统，该系统采用AI技术，能够更智能地感知用户需求，提供更舒适的居家体验。系统将于下月正式上市销售。', publishDate: '2023-06-12', status: 'published' },
          { id: 2, title: '美熙参加2023年智能科技展览会', category: '行业新闻', content: '美熙有限公司参加了在深圳举办的2023年智能科技展览会，展示了公司最新的智能家居产品线，受到了业界广泛关注。', publishDate: '2023-05-20', status: 'published' },
          { id: 3, title: '美熙与腾讯云达成战略合作', category: '公司新闻', content: '美熙有限公司与腾讯云正式签署战略合作协议，双方将在智能家居云服务领域展开深入合作，为用户提供更安全、更稳定的智能家居云服务。', publishDate: '2023-04-15', status: 'published' },
          { id: 4, title: '智能家居行业发展趋势分析', category: '行业资讯', content: '本文分析了2023年智能家居行业的最新发展趋势，包括AI技术的应用、物联网技术的普及，以及用户对智能家居产品的新需求。', publishDate: '2023-03-28', status: 'published' },
          { id: 5, title: '美熙2023年第一季度业绩公告', category: '公司公告', content: '美熙有限公司发布2023年第一季度业绩公告，公司营收同比增长30%，智能家居产品销量创历史新高。', publishDate: '2023-03-10', status: 'published' },
          { id: 6, title: '新一代产品研发计划草案', category: '内部新闻', content: '公司计划在下半年开始研发新一代智能家居产品，将重点提升产品的互联互通能力和安全性能。', publishDate: '2023-06-18', status: 'draft' },
        ];
        
        const newsItem = mockNewsItems.find(item => item.id === parseInt(id));
        
        if (newsItem) {
          setFormData({
            title: newsItem.title,
            category: newsItem.category,
            content: newsItem.content,
            status: newsItem.status as 'published' | 'draft',
          });
        } else {
          alert('未找到该新闻');
          router.push('/admin/news');
        }
      } catch (error) {
        console.error('获取新闻数据失败:', error);
        alert('获取新闻数据失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsData();
  }, [id, router]);

  // 表单输入变更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 清除相关错误
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // 表单验证
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = '请输入新闻标题';
    } else if (formData.title.length > 100) {
      newErrors.title = '标题不能超过100个字符';
    }

    if (!formData.content.trim()) {
      newErrors.content = '请输入新闻内容';
    }

    if (!formData.category) {
      newErrors.category = '请选择新闻分类';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模拟API请求
    try {
      // 在实际应用中，这里应该是真实的API调用
      // const response = await fetch(`/api/news/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('提交的表单数据:', formData);
      
      // 成功后跳转到新闻列表页
      alert('新闻更新成功！');
      router.push('/admin/news');
    } catch (error) {
      console.error('提交表单时出错:', error);
      alert('提交失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>正在加载新闻数据...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">编辑新闻</h1>
            <p className="mt-1 text-sm text-gray-600">更新新闻内容</p>
          </div>
          <Link href="/admin/news" className="text-sm text-indigo-600 hover:text-indigo-500">
            返回新闻列表
          </Link>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            {/* 标题 */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                标题 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.title ? 'border-red-500' : ''
                }`}
                placeholder="请输入新闻标题"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* 分类 */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                分类 <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                  errors.category ? 'border-red-500' : ''
                }`}
              >
                <option value="" disabled>请选择分类</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            {/* 内容 */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="content"
                id="content"
                rows={10}
                value={formData.content}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.content ? 'border-red-500' : ''
                }`}
                placeholder="请输入新闻内容"
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-500">{errors.content}</p>
              )}
              <p className="mt-2 text-sm text-gray-500">
                支持基本的Markdown格式。图片可以通过链接引用。
              </p>
            </div>

            {/* 状态 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">发布状态</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="status-draft"
                    name="status"
                    type="radio"
                    value="draft"
                    checked={formData.status === 'draft'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status-draft" className="ml-3 block text-sm font-medium text-gray-700">
                    草稿
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="status-published"
                    name="status"
                    type="radio"
                    value="published"
                    checked={formData.status === 'published'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status-published" className="ml-3 block text-sm font-medium text-gray-700">
                    发布
                  </label>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                草稿状态下的新闻不会在网站前台显示。
              </p>
            </div>
          </div>

          <div className="px-4 py-4 sm:px-6 flex justify-between">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('确定要删除这条新闻吗？此操作不可撤销。')) {
                  alert('新闻已删除');
                  router.push('/admin/news');
                }
              }}
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              删除新闻
            </button>
            
            <div className="flex space-x-3">
              <Link href="/admin/news" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                取消
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    处理中...
                  </>
                ) : (
                  '更新新闻'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 