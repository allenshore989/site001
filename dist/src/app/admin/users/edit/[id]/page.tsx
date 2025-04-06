'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserEditPageProps {
  params: {
    id: string;
  };
}

export default function UserEditPage({ params }: UserEditPageProps) {
  const router = useRouter();
  const { id } = params;
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    role: '',
    status: '',
    lastLogin: '',
    createdAt: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAdmin, setIsAdmin] = useState(false);

  // 可用角色
  const roles = [
    { value: 'admin', label: '管理员' },
    { value: 'editor', label: '编辑' },
    { value: 'viewer', label: '查看者' }
  ];

  // 状态选项
  const statusOptions = [
    { value: 'active', label: '激活' },
    { value: 'inactive', label: '禁用' }
  ];

  useEffect(() => {
    // 模拟从API获取数据
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // 在实际应用中，这里应该调用API获取用户详情
        // const response = await fetch(`/api/users/${id}`);
        // const data = await response.json();
        
        // 模拟数据
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // 根据ID匹配模拟数据
        const mockUsers = [
          { id: 1, name: '系统管理员', username: 'admin', email: 'admin@meixi.com', role: 'admin', status: 'active', lastLogin: '2023-07-15 10:25:30', createdAt: '2023-01-01' },
          { id: 2, name: '张经理', username: 'zhang', email: 'zhang@meixi.com', role: 'admin', status: 'active', lastLogin: '2023-07-14 16:42:15', createdAt: '2023-02-15' },
          { id: 3, name: '李编辑', username: 'li', email: 'li@meixi.com', role: 'editor', status: 'active', lastLogin: '2023-07-13 09:18:45', createdAt: '2023-03-20' },
          { id: 4, name: '王市场', username: 'wang', email: 'wang@meixi.com', role: 'viewer', status: 'inactive', lastLogin: '2023-06-30 11:05:22', createdAt: '2023-04-10' },
          { id: 5, name: '赵销售', username: 'zhao', email: 'zhao@meixi.com', role: 'editor', status: 'active', lastLogin: '2023-07-12 14:30:10', createdAt: '2023-05-05' },
        ];
        
        const user = mockUsers.find(item => item.id === parseInt(id));
        
        if (user) {
          setFormData({
            ...user,
            newPassword: '',
            confirmPassword: '',
          });
          // 检查是否为系统管理员（ID为1）
          setIsAdmin(user.id === 1);
        } else {
          alert('未找到该用户');
          router.push('/admin/users');
        }
      } catch (error) {
        console.error('获取用户数据失败:', error);
        alert('获取用户数据失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id, router]);

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

    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }

    if (!formData.username.trim()) {
      newErrors.username = '请输入用户名';
    } else if (formData.username.length < 3) {
      newErrors.username = '用户名不能少于3个字符';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.role) {
      newErrors.role = '请选择角色';
    }

    if (!formData.status) {
      newErrors.status = '请选择状态';
    }

    // 密码验证（仅当填写了新密码时）
    if (formData.newPassword) {
      if (formData.newPassword.length < 6) {
        newErrors.newPassword = '密码不能少于6个字符';
      }

      if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = '两次输入的密码不一致';
      }
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
      // const response = await fetch(`/api/users/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     username: formData.username,
      //     email: formData.email,
      //     role: formData.role,
      //     status: formData.status,
      //     ...(formData.newPassword ? { password: formData.newPassword } : {})
      //   }),
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('提交的表单数据:', formData);
      
      // 成功后跳转到用户列表页
      alert('用户更新成功！');
      router.push('/admin/users');
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
          <span>正在加载用户数据...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">编辑用户</h1>
            <p className="mt-1 text-sm text-gray-600">更新用户信息和权限</p>
          </div>
          <Link href="/admin/users" className="text-sm text-indigo-600 hover:text-indigo-500">
            返回用户列表
          </Link>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.name ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                  placeholder="请输入姓名"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
                {isAdmin && (
                  <p className="mt-1 text-xs text-gray-500">系统管理员用户信息不可修改</p>
                )}
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  用户名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.username ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                  placeholder="请输入用户名"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.email ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                  placeholder="example@meixi.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  角色 <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                    errors.role ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                >
                  <option value="" disabled>请选择角色</option>
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                )}
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  状态 <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                    errors.status ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                >
                  <option value="" disabled>请选择状态</option>
                  {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
                {errors.status && (
                  <p className="mt-1 text-sm text-red-500">{errors.status}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  最后登录时间
                </label>
                <div className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
                  {formData.lastLogin || '暂无登录记录'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  创建时间
                </label>
                <div className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
                  {formData.createdAt || '未知'}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium text-gray-900">更改密码</h3>
                  <p className="mt-1 text-sm text-gray-500">留空则不更改密码</p>
                </div>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  新密码
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.newPassword ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                  placeholder="输入新密码"
                />
                {errors.newPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  确认密码
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isAdmin}
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  } ${isAdmin ? 'bg-gray-100' : ''}`}
                  placeholder="再次输入新密码"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
          </div>

          <div className="px-4 py-4 sm:px-6 flex justify-between">
            <button
              type="button"
              onClick={() => {
                if (isAdmin) {
                  alert('系统管理员账户不能删除');
                  return;
                }
                
                if (window.confirm('确定要删除该用户吗？此操作不可撤销。')) {
                  alert('用户已删除');
                  router.push('/admin/users');
                }
              }}
              className={`inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isAdmin ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              }`}
              disabled={isAdmin}
            >
              删除用户
            </button>
            
            <div className="flex space-x-3">
              <Link href="/admin/users" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                取消
              </Link>
              <button
                type="submit"
                disabled={isSubmitting || isAdmin}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  isAdmin ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50'
                }`}
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
                  '更新用户'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 