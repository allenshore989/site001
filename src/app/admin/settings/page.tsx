'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    siteName: '美熙有限公司管理系统',
    siteDescription: '智能家居解决方案提供商',
    contactEmail: 'admin@meixi.com',
    recordNumber: '粤ICP备XXXXXXXX号',
  });

  const [securitySettings, setSecuritySettings] = useState({
    passwordExpireDays: '90',
    loginAttemptsLimit: '5',
    sessionTimeout: '30',
    enableTwoFactor: false,
  });

  const [backupSettings, setBackupSettings] = useState({
    autoBackup: true,
    backupFrequency: 'daily',
    backupRetentionDays: '30',
  });

  // 处理常规设置表单变更
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 处理安全设置表单变更
  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // 处理备份设置表单变更
  const handleBackupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setBackupSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // 提交设置
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟API请求
    try {
      // 在实际应用中，这里应该是真实的API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('提交的设置:', {
        generalSettings,
        securitySettings,
        backupSettings
      });
      
      alert('设置保存成功！');
    } catch (error) {
      console.error('保存设置时出错:', error);
      alert('保存失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 清除缓存
  const handleClearCache = async () => {
    if (!window.confirm('确定要清除系统缓存吗？')) {
      return;
    }

    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 800));
      alert('系统缓存已清除');
    } catch (error) {
      console.error('清除缓存出错:', error);
      alert('操作失败，请重试');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">系统设置</h1>
        <p className="mt-1 text-sm text-gray-600">配置和管理系统参数</p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">常规设置</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            配置网站的基本信息
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                  网站名称
                </label>
                <input
                  type="text"
                  name="siteName"
                  id="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  联系邮箱
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  id="contactEmail"
                  value={generalSettings.contactEmail}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                  网站描述
                </label>
                <input
                  type="text"
                  name="siteDescription"
                  id="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="recordNumber" className="block text-sm font-medium text-gray-700">
                  备案号
                </label>
                <input
                  type="text"
                  name="recordNumber"
                  id="recordNumber"
                  value={generalSettings.recordNumber}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">安全设置</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            配置账号与登录安全选项
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="passwordExpireDays" className="block text-sm font-medium text-gray-700">
                  密码过期天数
                </label>
                <input
                  type="number"
                  name="passwordExpireDays"
                  id="passwordExpireDays"
                  min="0"
                  value={securitySettings.passwordExpireDays}
                  onChange={handleSecurityChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  0 表示密码永不过期
                </p>
              </div>
              <div>
                <label htmlFor="loginAttemptsLimit" className="block text-sm font-medium text-gray-700">
                  登录尝试次数限制
                </label>
                <input
                  type="number"
                  name="loginAttemptsLimit"
                  id="loginAttemptsLimit"
                  min="1"
                  value={securitySettings.loginAttemptsLimit}
                  onChange={handleSecurityChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                  会话超时时间（分钟）
                </label>
                <input
                  type="number"
                  name="sessionTimeout"
                  id="sessionTimeout"
                  min="5"
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecurityChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="enableTwoFactor"
                      name="enableTwoFactor"
                      type="checkbox"
                      checked={securitySettings.enableTwoFactor}
                      onChange={handleSecurityChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableTwoFactor" className="font-medium text-gray-700">启用两步验证</label>
                    <p className="text-gray-500">为管理员账号开启更高级别的安全保护</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">数据备份设置</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            配置系统数据自动备份选项
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="autoBackup"
                      name="autoBackup"
                      type="checkbox"
                      checked={backupSettings.autoBackup}
                      onChange={handleBackupChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="autoBackup" className="font-medium text-gray-700">启用自动备份</label>
                    <p className="text-gray-500">系统将按照设定的频率自动备份数据</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="backupFrequency" className="block text-sm font-medium text-gray-700">
                  备份频率
                </label>
                <select
                  id="backupFrequency"
                  name="backupFrequency"
                  value={backupSettings.backupFrequency}
                  onChange={handleBackupChange}
                  disabled={!backupSettings.autoBackup}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="hourly">每小时</option>
                  <option value="daily">每天</option>
                  <option value="weekly">每周</option>
                  <option value="monthly">每月</option>
                </select>
              </div>
              <div>
                <label htmlFor="backupRetentionDays" className="block text-sm font-medium text-gray-700">
                  备份保留天数
                </label>
                <input
                  type="number"
                  name="backupRetentionDays"
                  id="backupRetentionDays"
                  min="1"
                  value={backupSettings.backupRetentionDays}
                  onChange={handleBackupChange}
                  disabled={!backupSettings.autoBackup}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={handleClearCache}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          清除系统缓存
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              保存中...
            </>
          ) : (
            '保存所有设置'
          )}
        </button>
      </div>
    </div>
  );
} 