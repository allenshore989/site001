'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <PageHeader
        title="产品与服务"
        description="美熙科技传媒为您提供全方位的产品与服务解决方案"
        bgColor="bg-teal-600"
        bgImage="url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      />

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">我们的产品</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              创新科技，品质保障
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">产品图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">智能家居设备</h3>
                <p className="mt-2 text-gray-500">
                  我们的智能家居设备采用先进的物联网技术，让您轻松实现家居智能化控制，提升生活品质。
                </p>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    智能控制系统
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    能源管理与节能
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    安全监控系统
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">产品图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">企业管理软件</h3>
                <p className="mt-2 text-gray-500">
                  专为企业设计的管理软件，帮助企业提升运营效率，优化业务流程，实现数字化转型。
                </p>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    客户关系管理
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    财务管理与分析
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    人力资源管理
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">产品图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">数据分析平台</h3>
                <p className="mt-2 text-gray-500">
                  强大的数据分析平台，帮助企业从海量数据中挖掘价值，支持决策优化和业务增长。
                </p>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    实时数据分析
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    预测分析模型
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    可视化报表生成
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">专业服务</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              以客户需求为中心，提供全方位解决方案
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-medium text-gray-900">技术咨询</h3>
              </div>
              <p className="mt-4 text-gray-500">
                我们的技术专家团队提供专业的技术咨询服务，帮助客户制定适合自身需求的技术方案和实施计划，确保技术应用的有效性和可行性。
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  技术需求分析与评估
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  技术选型与架构设计
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  技术实施路线规划
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-medium text-gray-900">定制开发</h3>
              </div>
              <p className="mt-4 text-gray-500">
                根据客户的特定需求提供定制化的软件开发服务，从需求分析、系统设计到开发实施和上线维护，提供全流程专业支持。
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  需求调研与分析
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  系统架构与界面设计
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  开发测试与部署维护
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-medium text-gray-900">企业培训</h3>
              </div>
              <p className="mt-4 text-gray-500">
                为企业提供针对性的技术和管理培训，帮助企业员工提升技能，适应新技术和新业务模式的挑战。
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  技术能力提升培训
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  管理能力提升培训
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  数字化转型培训
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-medium text-gray-900">技术支持</h3>
              </div>
              <p className="mt-4 text-gray-500">
                提供专业的技术支持服务，包括故障排除、系统维护、性能优化等，确保客户系统稳定高效运行。
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  7x24小时技术支持
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  系统维护与优化
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  问题诊断与解决
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  <span className="block">需要量身定制的解决方案？</span>
                  <span className="block text-indigo-200">联系我们的专业团队，获取详细咨询。</span>
                </h2>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 