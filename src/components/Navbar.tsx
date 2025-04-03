'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(pathname !== '/');

  // 菜单项数据
  const menuItems = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于我们' },
    { href: '/products', label: '产品服务' },
    { href: '/news', label: '新闻动态' },
    { href: '/contact', label: '联系我们' },
  ];

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    // 如果不是首页，导航栏始终保持白底样式
    if (pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 切换菜单显示/隐藏
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 判断当前活动链接
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* 网站Logo - 修改为科技感图标 */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              美熙科技传媒有限公司
            </span>
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white'
                    : isScrolled
                    ? 'text-gray-800 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className={`ml-2 px-4 py-2 rounded-md text-sm font-medium ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } transition-colors`}
            >
              登录后台
            </Link>
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* 移动端导航菜单 */}
          <div
            className={`md:hidden fixed inset-0 bg-white z-0 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-4 border-b border-gray-100 text-lg ${
                    isActive(item.href) ? 'text-blue-600 font-medium' : 'text-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="mt-6 bg-blue-600 text-white py-3 px-4 rounded-md text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                登录后台
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 