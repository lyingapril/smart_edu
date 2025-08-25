import type { ReactNode } from 'react';
import './globals.css';
import ChartScript from '@/components/ChartScript';
export const metadata = {
  title: '智慧教育公共服务平台',
  charset: 'UTF-8',
  other: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 引入Chart.js的客户端组件 */}
        <ChartScript />
      </head>
      <body className="bg-gray-50 font-sans text-dark">
        {/* 顶部通知栏（共享） */}
        <div className="bg-primary text-white text-center py-2 text-sm">
          <div className="container mx-auto px-4">
            <p>📢 平台2.0智能版已上线，新增12项政务服务事项 <a href="#" className="underline ml-2">了解更多</a></p>
          </div>
        </div>

        {/* 导航栏（共享） */}
        <header className="sticky top-0 bg-white shadow-sm z-50 transition-all duration-300" id="navbar">
          {/* 导航栏内容从原index.html复制 */}
        </header>

        {/* 页面主体内容（子页面会插入这里） */}
        <main>{children}</main>

        {/* 页脚（如果原页面有，可在此添加） */}
            
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* 关于平台 */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary mr-3">
                                <i className="fa fa-graduation-cap text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-black">智慧教育平台</h3>
                        </div>
                        <p className="text-gray-400 mb-6">XX智慧教育公共服务平台，整合优质教育资源，提供一站式教育服务，促进教育公平与质量提升。</p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-custom">
                                <i className="fa fa-weibo"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-custom">
                                <i className="fa fa-wechat"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-custom">
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-black">快速链接</h4>
                        <ul className="space-y-3">
                            <li><a href="./" className="text-gray-400 hover:text-white transition-custom">首页</a></li>
                            <li><a href="./resources" className="text-gray-400 hover:text-white transition-custom">教育资源</a></li>
                            <li><a href="./services" className="text-gray-400 hover:text-white transition-custom">服务大厅</a></li>
                            <li><a href="./stages" className="text-gray-400 hover:text-white transition-custom">教育阶段</a></li>
                            <li><a href="./features" className="text-gray-400 hover:text-white transition-custom">特色服务</a></li>
                            <li><a href="./help" className="text-gray-400 hover:text-white transition-custom">帮助中心</a></li>
                        </ul>
                    </div>

                    {/* 联系我们 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-black">联系我们</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fa fa-map-marker text-gray-400 mt-1 mr-3"></i>
                                <span className="text-gray-400">北京市西城区复兴门内大街160号</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-phone text-gray-400 mr-3"></i>
                                <span className="text-gray-400">400-123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-envelope text-gray-400 mr-3"></i>
                                <span className="text-gray-400">contact@XXsmarteduXX.cn</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-clock-o text-gray-400 mr-3"></i>
                                <span className="text-gray-400">工作日 9:00-18:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* 订阅 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-black">订阅资讯</h4>
                        <p className="text-gray-400 mb-4">订阅我们的资讯，获取最新教育动态和平台更新信息</p>
                        <form className="mb-4">
                            <div className="flex">
                                <input type="email" placeholder="您的邮箱地址" className="px-4 py-2 rounded-l-lg w-full bg-primary focus:outline-none text-dark"/>
                                <button type="submit" className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-custom">
                                    <i className="fa fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                        <p className="text-gray-500 text-sm">我们尊重您的隐私，不会向第三方分享您的信息</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 智慧教育公共服务平台 版权所有 | 京ICP备12345678号</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}