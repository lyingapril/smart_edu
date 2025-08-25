import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* 英雄区域（原#home部分） */}
      <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
        {/* 英雄区域内容从原index.html复制 */}
        <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-shadow mb-4">
                            让每个学习者<br/>都能获得优质教育
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
                            整合全国优质教育资源，提供一站式学习服务，助力教育公平与质量提升
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-custom shadow-lg">
                                立即开始学习
                            </button>
                            <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-custom">
                                了解平台功能 <i className="fa fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                        <div className="mt-8 flex items-center text-sm">
                            <div className="flex -space-x-2 mr-4">
                                <Image src="https://picsum.photos/id/1001/100/100" alt="用户头像" className="w-8 h-8 rounded-full border-2 border-white"/>
                                <Image src="https://picsum.photos/id/1002/100/100" alt="用户头像" className="w-8 h-8 rounded-full border-2 border-white"/>
                                <Image src="https://picsum.photos/id/1003/100/100" alt="用户头像" className="w-8 h-8 rounded-full border-2 border-white"/>
                                <Image src="https://picsum.photos/id/1004/100/100" alt="用户头像" className="w-8 h-8 rounded-full border-2 border-white"/>
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs">
                                    +25k
                                </div>
                            </div>
                            <p>已有超过2500万师生使用</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-all duration-500">
                            <Image src="https://picsum.photos/id/20/600/400" alt="智慧教育平台展示" className="w-full h-auto"/>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/30 rounded-xl blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
      </section>

      {/* 平台数据（原平台数据部分） */}
      <section className="py-12 bg-white">
        {/* 平台数据内容从原index.html复制 */}
        <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-light">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2" id="counter1">373</div>
                        <p className="text-gray-600">平台浏览量(亿)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-light">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2" id="counter2">25.6</div>
                        <p className="text-gray-600">访客总量(亿人次)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-light">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2" id="counter3">215</div>
                        <p className="text-gray-600">覆盖XX和地区</p>
                    </div>
                    <div className="p-6 rounded-xl bg-light">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2" id="counter4">51</div>
                        <p className="text-gray-600">政务服务事项</p>
                    </div>
                </div>
            </div>
      </section>
    </>
  );
}