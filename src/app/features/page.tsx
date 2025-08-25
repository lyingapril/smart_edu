import Image from "next/image";

export default function FeaturesPage() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      {/* 原#features部分内容 */}
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">特色服务</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">平台特色功能与服务，为学习者和教育工作者提供全方位支持</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/*  特色1：读书平台 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/5">
                            <div className="rounded-xl overflow-hidden h-full">
                                <Image src="https://picsum.photos/id/24/400/500" alt="读书平台" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-3/5 flex flex-col justify-center">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full inline-block mb-3 w-fit">
                                <i className="fa fa-book mr-1"></i> 读书平台
                            </span>
                            <h3 className="text-2xl font-bold mb-3">数字阅读空间</h3>
                            <p className="text-gray-600 mb-4">设有&#34;青少年读书空间&#34;&#34;老年读书社区&#34;等多个板块，汇聚海量电子书籍和阅读资源，全部免费向用户开放，培养阅读习惯，提升全民素养。</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>百万册电子书籍免费阅读</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>个性化阅读推荐</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>阅读小组与交流社区</span>
                                </li>
                            </ul>
                            <a href="#" className="text-primary font-medium inline-flex items-center w-fit">
                                进入读书平台 <i className="fa fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 特色2：AI智能学习 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/5">
                            <div className="rounded-xl overflow-hidden h-full">
                                <Image src="https://picsum.photos/id/180/400/500" alt="AI智能学习" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-3/5 flex flex-col justify-center">
                            <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full inline-block mb-3 w-fit">
                                <i className="fa fa-robot mr-1"></i> AI智能
                            </span>
                            <h3 className="text-2xl font-bold mb-3">智能学习助手</h3>
                            <p className="text-gray-600 mb-4">基于人工智能技术，为学习者提供个性化学习路径规划、智能答疑、作业批改等服务，提升学习效率和效果。</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>个性化学习计划制定</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>AI智能解题与辅导</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>学习效果评估与反馈</span>
                                </li>
                            </ul>
                            <a href="#" className="text-primary font-medium inline-flex items-center w-fit">
                                体验AI学习 <i className="fa fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 特色3：地方平台 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/5">
                            <div className="rounded-xl overflow-hidden h-full">
                                <Image src="https://picsum.photos/id/101/400/500" alt="地方平台" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-3/5 flex flex-col justify-center">
                            <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full inline-block mb-3 w-fit">
                                <i className="fa fa-map-marker mr-1"></i> 地方服务
                            </span>
                            <h3 className="text-2xl font-bold mb-3">地方教育平台</h3>
                            <p className="text-gray-600 mb-4">覆盖全国32个地区的地方教育平台，整合地方特色教育资源和服务，实现教育服务&#34;全国一盘棋&#34;，促进区域教育均衡发展。</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>地方特色教育资源</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>区域教育政策与资讯</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>地方教育服务入口</span>
                                </li>
                            </ul>
                            <a href="#" className="text-primary font-medium inline-flex items-center w-fit">
                                查看地方平台 <i className="fa fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 特色4：国际平台 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/5">
                            <div className="rounded-xl overflow-hidden h-full">
                                <Image src="https://picsum.photos/id/103/400/500" alt="国际平台" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-3/5 flex flex-col justify-center">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full inline-block mb-3 w-fit">
                                <i className="fa fa-globe mr-1"></i> 国际交流
                            </span>
                            <h3 className="text-2xl font-bold mb-3">国际教育平台</h3>
                            <p className="text-gray-600 mb-4">面向国际学生提供咨询、资源和政务等服务，促进国际教育交流与合作，展示中国教育发展成果。</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>来华留学指南与服务</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>中国教育国际交流项目</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                                    <span>多语言教育资源</span>
                                </li>
                            </ul>
                            <a href="#" className="text-primary font-medium inline-flex items-center w-fit">
                                访问国际平台 <i className="fa fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}