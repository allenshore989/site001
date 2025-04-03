'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateNewsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '公司新闻', // 默认分类
    content: '',
    status: 'draft' as 'draft' | 'published',
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('提交的表单数据:', formData);
      
      // 成功后跳转到新闻列表页
      alert('新闻创建成功！');
      router.push('/admin/news');
    } catch (error) {
      console.error('提交表单时出错:', error);
      alert('提交失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">添加新闻</h1>
            <p className="mt-1 text-sm text-gray-600">创建新的新闻内容</p>
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

          <div className="px-4 py-4 sm:px-6 flex justify-end space-x-3">
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
                '保存新闻'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 