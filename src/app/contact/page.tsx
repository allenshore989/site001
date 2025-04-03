'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

// 表单状态类型
type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

// 错误状态类型
type ErrorState = {
  [key in keyof FormState]?: string;
};

export default function ContactPage() {
  // 表单状态
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // 错误状态
  const [errors, setErrors] = useState<ErrorState>({});
  
  // 提交状态
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // 更新表单状态
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除该字段的错误
    if (errors[name as keyof FormState]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormState];
        return newErrors;
      });
    }
  };
  
  // 表单验证
  const validateForm = (): boolean => {
    const newErrors: ErrorState = {};
    
    // 验证姓名
    if (!formState.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    // 验证邮箱
    if (!formState.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    // 验证手机号（可选，但如果填写了需要验证格式）
    if (formState.phone && !/^1[3-9]\d{9}$/.test(formState.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }
    
    // 验证主题
    if (!formState.subject.trim()) {
      newErrors.subject = '请选择咨询主题';
    }
    
    // 验证留言内容
    if (!formState.message.trim()) {
      newErrors.message = '请输入留言内容';
    } else if (formState.message.length < 10) {
      newErrors.message = '留言内容不能少于10个字符';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 表单验证
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    
    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟提交成功
      console.log('表单提交数据:', formState);
      
      // 重置表单
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // 设置提交成功
      setSubmitSuccess(true);
    } catch (error) {
      // 设置提交失败
      setSubmitError('提交失败，请稍后重试');
      console.error('表单提交错误:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16"> {/* 恢复顶部内边距 */}
      {/* 使用PageHeader组件 */}
      <PageHeader
        title="联系我们"
        description="随时与我们取得联系，我们将竭诚为您服务"
        bgColor="bg-indigo-500"
        bgImage="url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      />

      {/* 联系信息卡片 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 地址卡片 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">公司地址</h3>
                <p className="text-gray-600 mb-2">中国广东省深圳市南山区</p>
                <p className="text-gray-600">科技园 美熙大厦</p>
              </div>
              
              {/* 联系电话卡片 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">联系电话</h3>
                <p className="text-gray-600 mb-2">销售热线: +86 755-8888-7777</p>
                <p className="text-gray-600">客服热线: +86 755-6666-5555</p>
              </div>
              
              {/* 电子邮件卡片 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">电子邮件</h3>
                <p className="text-gray-600 mb-2">销售咨询: sales@meixi.com</p>
                <p className="text-gray-600">客户服务: support@meixi.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单和地图 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 联系表单 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">给我们留言</h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                {submitSuccess && (
                  <div className="mb-8 bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
                    <div className="flex">
                      <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>您的留言已成功提交，我们将尽快与您联系！</p>
                    </div>
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-8 bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
                    <div className="flex">
                      <svg className="h-5 w-5 text-red-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p>{submitError}</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 姓名 */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`block w-full rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="请输入您的姓名"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* 邮箱 */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`block w-full rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="请输入您的邮箱"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 手机号 */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        手机号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={`block w-full rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="请输入您的手机号"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    {/* 咨询主题 */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        咨询主题 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className={`block w-full rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.subject ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">请选择咨询主题</option>
                        <option value="product">产品咨询</option>
                        <option value="service">服务咨询</option>
                        <option value="cooperation">商务合作</option>
                        <option value="job">求职咨询</option>
                        <option value="other">其他问题</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* 留言内容 */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="请输入您的留言内容"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  
                  {/* 提交按钮 */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          提交中...
                        </div>
                      ) : '提交留言'}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* 地图和营业时间 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的位置</h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                {/* 地图占位符 */}
                <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 relative overflow-hidden flex items-center justify-center">
                  <div className="text-center p-4 bg-white/80 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">美熙有限公司</h3>
                    <p className="text-gray-700">深圳市南山区科技园 美熙大厦</p>
                  </div>
                </div>
                
                {/* 营业时间 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">营业时间</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">周一至周五</span>
                      <span className="text-gray-900 font-medium">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">周六</span>
                      <span className="text-gray-900 font-medium">10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">周日</span>
                      <span className="text-gray-900 font-medium">休息</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">客服热线</h3>
                    <p className="text-gray-700">
                      如需紧急帮助，请拨打我们的24小时客服热线：
                    </p>
                    <p className="text-blue-600 font-semibold text-lg mt-1">
                      400-888-8888
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">常见问题</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">如何预约产品演示？</h3>
                <p className="text-gray-700">
                  您可以通过填写上方的联系表单，选择"产品咨询"主题，或直接拨打我们的销售热线 +86 755-8888-7777 预约产品演示。我们的销售团队会在24小时内与您联系，安排合适的时间进行产品展示和技术讲解。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">产品是否提供安装服务？</h3>
                <p className="text-gray-700">
                  是的，我们提供专业的安装服务。在您购买产品后，我们会安排技术人员上门安装调试，并提供基础培训，确保您能够正确使用我们的产品。安装费用根据产品类型和安装复杂度有所不同，具体费用请咨询我们的销售人员。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">产品质保期是多久？</h3>
                <p className="text-gray-700">
                  我们的产品标准质保期为两年，在此期间，因产品质量问题导致的故障，我们提供免费维修或更换服务。对于某些高端产品，我们还提供延长质保服务，详情请参阅产品说明书或咨询我们的客服人员。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">如何成为美熙的合作伙伴？</h3>
                <p className="text-gray-700">
                  我们欢迎各类合作伙伴加入美熙生态系统。您可以通过填写上方的联系表单，选择"商务合作"主题，详细说明您的合作意向。我们的商务团队会尽快与您联系，讨论具体合作方式和条件。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 