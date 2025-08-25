export default function StagesPage() {
  return (
    <section id="stages" className="py-16 bg-gray-50">
      {/* 原#stages部分内容 */}
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">各教育阶段</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">针对不同教育阶段提供专属资源和服务，满足从学前到高等教育的多样化需求</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 学前教育 */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://picsum.photos/id/119/600/400" alt="学前教育" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                <i className="fa fa-child text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">学前教育</h3>
                            <p className="mb-4 opacity-90">为3-6岁儿童提供启蒙教育资源，包括儿歌、故事、益智游戏等</p>
                            <a href="#" className="inline-flex items-center font-medium group-hover:underline">
                                进入学前教育板块 <i className="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 中小学教育 */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://picsum.photos/id/20/600/400" alt="中小学教育" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                <i className="fa fa-school text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">中小学教育</h3>
                            <p className="mb-4 opacity-90">覆盖小学到高中各学科课程资源，助力学生全面发展</p>
                            <a href="#" className="inline-flex items-center font-medium group-hover:underline">
                                进入中小学教育板块 <i className="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 高等教育 */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://picsum.photos/id/48/600/400" alt="高等教育" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                <i className="fa fa-university text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">高等教育</h3>
                            <p className="mb-4 opacity-90">为高校师生提供优质课程、科研资源和学术交流平台</p>
                            <a href="#" className="inline-flex items-center font-medium group-hover:underline">
                                进入高等教育板块 <i className="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 职业教育和终身学习 */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 职业教育 */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://picsum.photos/id/42/600/300" alt="职业教育" className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                <i className="fa fa-cogs text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">职业教育</h3>
                            <p className="mb-4 opacity-90">提供职业技能培训资源，助力职业发展和技能提升</p>
                            <a href="#" className="inline-flex items-center font-medium group-hover:underline">
                                进入职业教育板块 <i className="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 终身学习 */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://picsum.photos/id/24/600/300" alt="终身学习" className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                <i className="fa fa-book text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">终身学习</h3>
                            <p className="mb-4 opacity-90">面向社会学习者的各类知识资源，支持终身学习需求</p>
                            <a href="#" className="inline-flex items-center font-medium group-hover:underline">
                                进入终身学习板块 <i className="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}