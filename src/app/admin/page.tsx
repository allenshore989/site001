'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // 模拟数据
  const [stats, setStats] = useState({
    totalNews: 0,
    totalProducts: 0,
    totalUsers: 0,
    recentVisits: 0
  });

  // 访问统计数据(模拟)
  const [visitStats, setVisitStats] = useState<{
    labels: string[];
    values: number[];
  }>({
    labels: [],
    values: []
  });

  // 载入状态
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟从API获取数据
    // 在实际应用中，这里应该调用API获取真实数据
    const fetchData = () => {
      setLoading(true);
      // 模拟加载数据
      setTimeout(() => {
        setStats({
          totalNews: 28,
          totalProducts: 46,
          totalUsers: 12,
          recentVisits: 4328
        });

        // 设置图表数据
        const today = new Date();
        const days = [];
        const visits = [];
        
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          days.push(`${date.getMonth() + 1}/${date.getDate()}`);
          // 生成模拟访问数据 (100-500之间的随机数)
          visits.push(Math.floor(Math.random() * 400) + 100);
        }
        
        setVisitStats({
          labels: days,
          values: visits
        });

        setLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

  // 近期活动数据
  const recentActivities = [
    { id: 1, user: 'Alan Johnson', action: '发布了新闻', target: '"美熙科技传媒推出全新AI营销解决方案"', time: '1小时前' },
    { id: 2, user: 'Sarah Williams', action: '更新了产品', target: '"社交媒体短视频创作服务"', time: '3小时前' },
    { id: 3, user: 'Michael Davis', action: '回复了用户留言', target: 'ID:10086', time: '昨天' },
    { id: 4, user: '系统', action: '自动备份了数据库', target: '', time: '昨天' },
    { id: 5, user: 'Jessica Miller', action: '添加了新用户', target: '"市场部经理"', time: '3天前' },
  ];

  // 最新订单数据(模拟)
  const latestOrders = [
    { id: 1, customer: '腾讯科技有限公司', service: '品牌营销策略规划', amount: '88,000元', status: '已确认', date: '2023-08-15' },
    { id: 2, customer: '字节跳动科技', service: '社交媒体短视频创作', amount: '46,500元', status: '处理中', date: '2023-08-14' },
    { id: 3, customer: '阿里巴巴集团', service: '企业品牌网站建设', amount: '120,000元', status: '已完成', date: '2023-08-10' },
    { id: 4, customer: '小米科技', service: '品牌形象片制作', amount: '75,000元', status: '已确认', date: '2023-08-08' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">仪表盘</h1>
        <p className="mt-1 text-sm text-gray-600">欢迎使用美熙后台管理系统</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">新闻总数</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {loading ? <div className="animate-pulse h-8 w-12 bg-gray-200 rounded"></div> : stats.totalNews}
                    </div>
                    <span className="ml-2 text-sm text-green-600">↑12%</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/news" className="font-medium text-indigo-600 hover:text-indigo-500">查看所有新闻</Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">产品总数</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {loading ? <div className="animate-pulse h-8 w-12 bg-gray-200 rounded"></div> : stats.totalProducts}
                    </div>
                    <span className="ml-2 text-sm text-green-600">↑8%</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/products" className="font-medium text-indigo-600 hover:text-indigo-500">查看所有产品</Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">管理用户数</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {loading ? <div className="animate-pulse h-8 w-12 bg-gray-200 rounded"></div> : stats.totalUsers}
                    </div>
                    <span className="ml-2 text-sm text-green-600">↑4%</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/users" className="font-medium text-indigo-600 hover:text-indigo-500">管理用户</Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">最近访问量</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {loading ? <div className="animate-pulse h-8 w-12 bg-gray-200 rounded"></div> : stats.recentVisits}
                    </div>
                    <span className="ml-2 text-sm text-green-600">↑22%</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/analytics" className="font-medium text-indigo-600 hover:text-indigo-500">查看详细统计</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 访问统计图表 */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">访问统计（近7天）</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          {loading ? (
            <div className="animate-pulse h-64 w-full bg-gray-200 rounded"></div>
          ) : (
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end">
                {visitStats.values.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="bg-indigo-500 w-10 transition-all duration-500" 
                      style={{ height: `${(value / Math.max(...visitStats.values)) * 80}%` }}
                    ></div>
                    <span className="text-xs mt-2 text-gray-600">{visitStats.labels[index]}</span>
                    <span className="text-xs text-gray-800 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 最新订单 */}
      <div className="mt-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900">最新订单</h2>
        <div className="mt-2 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金额</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {latestOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{order.service}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">{order.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === '已完成' ? 'bg-green-100 text-green-800' : 
                            order.status === '处理中' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 最近活动 */}
      <div className="mt-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900">最近活动</h2>
        <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {activity.user} {activity.action} {activity.target}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 快捷操作 */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">快捷操作</h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
            <Link href="/admin/news/create" className="block p-4 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="ml-3 text-sm font-medium text-gray-900">发布新闻</span>
              </div>
            </Link>
            <Link href="/admin/products/create" className="block p-4 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="ml-3 text-sm font-medium text-gray-900">添加产品</span>
              </div>
            </Link>
            <Link href="/admin/users/create" className="block p-4 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="ml-3 text-sm font-medium text-gray-900">添加用户</span>
              </div>
            </Link>
            <Link href="/admin/settings" className="block p-4 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-3 text-sm font-medium text-gray-900">系统设置</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 