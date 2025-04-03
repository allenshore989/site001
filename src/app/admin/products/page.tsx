'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  status: 'active' | 'inactive';
  imageUrl: string;
}

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    // 模拟从API获取数据
    const fetchProducts = () => {
      setIsLoading(true);
      // 这里应该是真实API调用
      setTimeout(() => {
        const mockProducts: Product[] = [
          { id: 1, name: '智能家居控制中心', category: '智能家居', price: '¥2,999', status: 'active', imageUrl: '/images/products/product1.jpg' },
          { id: 2, name: '智能门锁 Pro', category: '安防设备', price: '¥1,499', status: 'active', imageUrl: '/images/products/product2.jpg' },
          { id: 3, name: '全屋AI语音助手', category: '智能家居', price: '¥899', status: 'active', imageUrl: '/images/products/product3.jpg' },
          { id: 4, name: '安防监控套装', category: '安防设备', price: '¥3,499', status: 'active', imageUrl: '/images/products/product4.jpg' },
          { id: 5, name: '智能灯光控制系统', category: '智能家居', price: '¥1,299', status: 'active', imageUrl: '/images/products/product5.jpg' },
          { id: 6, name: '家庭能源管理系统', category: '节能设备', price: '¥4,999', status: 'inactive', imageUrl: '/images/products/product6.jpg' },
          { id: 7, name: '智能窗帘控制器', category: '智能家居', price: '¥799', status: 'active', imageUrl: '/images/products/product7.jpg' },
          { id: 8, name: '全屋净水系统', category: '健康设备', price: '¥5,999', status: 'active', imageUrl: '/images/products/product8.jpg' },
          { id: 9, name: '智能恒温器', category: '节能设备', price: '¥699', status: 'active', imageUrl: '/images/products/product9.jpg' },
          { id: 10, name: '空气质量监测套装', category: '健康设备', price: '¥1,899', status: 'inactive', imageUrl: '/images/products/product10.jpg' },
          { id: 11, name: '智能厨房助手', category: '智能家居', price: '¥2,499', status: 'active', imageUrl: '/images/products/product11.jpg' },
          { id: 12, name: '家庭安全预警系统', category: '安防设备', price: '¥3,299', status: 'active', imageUrl: '/images/products/product12.jpg' },
          { id: 13, name: '智能体重秤', category: '健康设备', price: '¥399', status: 'active', imageUrl: '/images/products/product13.jpg' },
          { id: 14, name: '节能插座组', category: '节能设备', price: '¥499', status: 'active', imageUrl: '/images/products/product14.jpg' },
        ];
        setProducts(mockProducts);
        setIsLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  // 提取所有产品分类
  const categories = ['all', ...Array.from(new Set(products.map(product => product.category)))];

  // 过滤产品列表
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // 删除产品
  const handleDelete = (id: number) => {
    if (window.confirm('确定要删除这个产品吗？此操作不可撤销。')) {
      // 在实际应用中，这里应该调用API删除数据
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    }
  };

  // 切换产品状态
  const toggleProductStatus = (id: number) => {
    setProducts(prevProducts => prevProducts.map(product => 
      product.id === id 
        ? { ...product, status: product.status === 'active' ? 'inactive' : 'active' }
        : product
    ));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">产品管理</h1>
          <p className="mt-1 text-sm text-gray-600">管理产品信息和展示状态</p>
        </div>
        <Link href="/admin/products/create" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          添加产品
        </Link>
      </div>

      {/* 搜索和筛选 */}
      <div className="mb-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="搜索产品名称或分类..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:w-64">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? '所有分类' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 产品列表 */}
      {isLoading ? (
        <div className="py-10 flex justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>正在加载...</span>
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-500">没有找到匹配的产品</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {/* 这里显示的是一个占位图，实际应用中应替换为真实图片 */}
                    {/* <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="cover" /> */}
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.category}</p>
                      </div>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status === 'active' ? '已上架' : '已下架'}
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{product.price}</p>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Link href={`/admin/products/edit/${product.id}`} className="text-indigo-600 hover:text-indigo-900">
                          编辑
                        </Link>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          删除
                        </button>
                      </div>
                      <button
                        onClick={() => toggleProductStatus(product.id)}
                        className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded ${
                          product.status === 'active'
                            ? 'text-red-700 bg-red-100 hover:bg-red-200'
                            : 'text-green-700 bg-green-100 hover:bg-green-200'
                        }`}
                      >
                        {product.status === 'active' ? '下架' : '上架'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
} 