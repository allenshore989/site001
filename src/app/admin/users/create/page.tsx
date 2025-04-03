'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateUserPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '内容编辑', // 默认角色
    status: 'active' as 'active' | 'inactive',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 角色选项
  const roles = [
    '内容编辑',
    '产品管理',
    '客服人员',
    '市场专员',
    '超级管理员',
  ];

  // 表单输入变更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    // 姓名验证
    if (!formData.name.trim()) {
      newErrors.name = '请输入用户姓名';
    }

    // 用户名验证
    if (!formData.username.trim()) {
      newErrors.username = '请输入用户名';
    } else if (formData.username.length < 4) {
      newErrors.username = '用户名至少需要4个字符';
    }

    // 邮箱验证
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // 密码验证
    if (!formData.password) {
      newErrors.password = '请输入密码';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少需要6个字符';
    }

    // 确认密码验证
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    // 角色验证
    if (!formData.role) {
      newErrors.role = '请选择用户角色';
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
      
      // 成功后跳转到用户列表页
      alert('用户创建成功！');
      router.push('/admin/users');
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
            <h1 className="text-2xl font-semibold text-gray-900">添加用户</h1>
            <p className="mt-1 text-sm text-gray-600">创建新的系统用户账号</p>
          </div>
          <Link href="/admin/users" className="text-sm text-indigo-600 hover:text-indigo-500">
            返回用户列表
          </Link>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            {/* 姓名 */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名 <span className="text-red-500">*</span>
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
                placeholder="请输入用户姓名"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* 用户名 */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                用户名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.username ? 'border-red-500' : ''
                }`}
                placeholder="请输入用户名（登录账号）"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                用户名将用于登录系统，不能与现有用户重复
              </p>
            </div>

            {/* 邮箱 */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="请输入邮箱地址"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* 密码 */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密码 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="请输入密码"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                密码长度至少为6个字符，建议使用字母、数字和特殊字符的组合
              </p>
            </div>

            {/* 确认密码 */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                确认密码 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
                placeholder="请再次输入密码"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* 角色 */}
            <div className="mb-6">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                角色 <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                  errors.role ? 'border-red-500' : ''
                }`}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                不同角色拥有不同的操作权限
              </p>
            </div>

            {/* 状态 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">账号状态</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="status-active"
                    name="status"
                    type="radio"
                    value="active"
                    checked={formData.status === 'active'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status-active" className="ml-3 block text-sm font-medium text-gray-700">
                    启用
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="status-inactive"
                    name="status"
                    type="radio"
                    value="inactive"
                    checked={formData.status === 'inactive'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status-inactive" className="ml-3 block text-sm font-medium text-gray-700">
                    禁用
                  </label>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                禁用状态的用户将无法登录系统
              </p>
            </div>
          </div>

          <div className="px-4 py-4 sm:px-6 flex justify-end space-x-3">
            <Link href="/admin/users" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                '创建用户'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* 安全提示 */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">安全提示</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>请妥善保管账号信息，超级管理员拥有系统最高权限，请谨慎分配。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 