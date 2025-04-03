'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 模拟检查登录状态
  useEffect(() => {
    // 实际应用中，这里应该从localStorage或cookie中检查登录token
    const checkLoginStatus = () => {
      const token = localStorage.getItem('admin_token');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  // 如果未登录且不在登录页面，则重定向到登录页面
  useEffect(() => {
    if (!isLoggedIn && pathname !== '/admin/login') {
      window.location.href = '/admin/login';
    }
  }, [isLoggedIn, pathname]);

  // 如果在登录页面，则不显示管理布局
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const menuItems = [
    { name: '仪表盘', path: '/admin', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: '新闻管理', path: '/admin/news', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { name: '产品管理', path: '/admin/products', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: '用户管理', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { name: '系统设置', path: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    window.location.href = '/admin/login';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-indigo-700 transition duration-300 transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-indigo-800">
          <span className="text-white text-xl font-semibold">美熙管理系统</span>
        </div>
        <nav className="mt-5 px-2">
          {menuItems.map((item) => (
            <Link 
              href={item.path} 
              key={item.name}
              className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                pathname === item.path
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600'
              }`}
            >
              <svg 
                className={`mr-3 h-5 w-5 ${
                  pathname === item.path ? 'text-white' : 'text-indigo-300 group-hover:text-white'
                }`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航栏 */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold ml-3">控制面板</h1>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button 
                onClick={handleLogout}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <span className="mr-2">管理员</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* 主内容 */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 