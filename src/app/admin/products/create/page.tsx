'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCreatePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    features: '',
    price: '',
    stock: '',
    status: 'active' as 'active' | 'inactive',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 分类选项
  const categories = [
    '智能家居',
    '安防系统',
    '智能音箱',
    '智能灯光',
    '智能家电',
    '其他设备'
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

  // 图片处理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      
      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          image: '请上传图片文件'
        }));
        return;
      }
      
      // 检查文件大小（限制为5MB）
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          image: '图片大小不能超过5MB'
        }));
        return;
      }
      
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // 清除错误
      if (errors.image) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.image;
          return newErrors;
        });
      }
    }
  };

  // 表单验证
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入产品名称';
    }

    if (!formData.category) {
      newErrors.category = '请选择产品分类';
    }

    if (!formData.description.trim()) {
      newErrors.description = '请输入产品描述';
    }

    if (!formData.price.trim()) {
      newErrors.price = '请输入产品价格';
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      newErrors.price = '价格格式不正确，应为数字或小数（最多两位小数）';
    }

    if (!formData.stock.trim()) {
      newErrors.stock = '请输入库存数量';
    } else if (!/^\d+$/.test(formData.stock)) {
      newErrors.stock = '库存必须为整数';
    }

    if (!imagePreview) {
      newErrors.image = '请上传产品图片';
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
      // 包括上传图片和提交表单数据
      // const formDataForSubmit = new FormData();
      // formDataForSubmit.append('name', formData.name);
      // formDataForSubmit.append('category', formData.category);
      // formDataForSubmit.append('description', formData.description);
      // formDataForSubmit.append('features', formData.features);
      // formDataForSubmit.append('price', formData.price);
      // formDataForSubmit.append('stock', formData.stock);
      // formDataForSubmit.append('status', formData.status);
      // if (imageFile) {
      //   formDataForSubmit.append('image', imageFile);
      // }
      // const response = await fetch('/api/products', {
      //   method: 'POST',
      //   body: formDataForSubmit,
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('提交的表单数据:', { ...formData, imageFile: imageFile?.name });
      
      // 成功后跳转到产品列表页
      alert('产品添加成功！');
      router.push('/admin/products');
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
            <h1 className="text-2xl font-semibold text-gray-900">添加新产品</h1>
            <p className="mt-1 text-sm text-gray-600">创建新的产品信息</p>
          </div>
          <Link href="/admin/products" className="text-sm text-indigo-600 hover:text-indigo-500">
            返回产品列表
          </Link>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    产品名称 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="请输入产品名称"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  产品分类 <span className="text-red-500">*</span>
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

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  产品状态
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="active">上架</option>
                  <option value="inactive">下架</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  价格 (元) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.price ? 'border-red-500' : ''
                  }`}
                  placeholder="例如：1299.00"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                )}
              </div>

              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                  库存 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.stock ? 'border-red-500' : ''
                  }`}
                  placeholder="例如：100"
                />
                {errors.stock && (
                  <p className="mt-1 text-sm text-red-500">{errors.stock}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  产品描述 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.description ? 'border-red-500' : ''
                  }`}
                  placeholder="请输入产品描述"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                  产品特点
                </label>
                <textarea
                  name="features"
                  id="features"
                  rows={4}
                  value={formData.features}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="请输入产品特点，每行一个，例如：- 支持WiFi连接"
                />
                <p className="mt-1 text-sm text-gray-500">
                  每行一个特点，使用 - 开头，例如：- 支持WiFi连接
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">产品图片 <span className="text-red-500">*</span></label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-2 text-center">
                    {imagePreview ? (
                      <div className="relative mx-auto w-48 h-48 mb-4">
                        {/* @ts-ignore */}
                        <Image 
                          src={imagePreview} 
                          alt="产品图片预览" 
                          fill 
                          style={{ objectFit: 'contain' }} 
                        />
                      </div>
                    ) : (
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>{imagePreview ? '更换图片' : '上传图片'}</span>
                        <input 
                          id="image-upload" 
                          name="image-upload" 
                          type="file" 
                          className="sr-only" 
                          accept="image/*" 
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">或拖拽图片到此处</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF 最大 5MB
                    </p>
                  </div>
                </div>
                {errors.image && (
                  <p className="mt-1 text-sm text-red-500">{errors.image}</p>
                )}
              </div>
            </div>
          </div>

          <div className="px-4 py-4 sm:px-6 flex justify-end">
            <div className="flex space-x-3">
              <Link href="/admin/products" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                  '添加产品'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 