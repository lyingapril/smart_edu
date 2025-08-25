import Image from "next/image";

export default function ResourcesPage() {
  return (
    <section id="resources" className="py-16 bg-gray-50">
      {/* 原#resources部分内容 */}
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">优质教育资源</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">汇聚全国各级各类优质教育资源，涵盖课程、教材、课件等多种形式，满足不同学习需求</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 资源卡片1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div className="h-48 overflow-hidden">
                            <Image width={600} height={400} src="https://picsum.photos/id/24/600/400" alt="精品课程" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">课程资源</span>
                                <span className="ml-auto text-gray-500 text-sm"><i className="fa fa-eye mr-1"></i> 125.8万</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">精品课程库</h3>
                            <p className="text-gray-600 mb-4">涵盖从小学到大学的各类精品课程，由全国知名教师录制，支持在线学习和下载</p>
                            <a href="#" className="text-primary font-medium inline-flex items-center">
                                查看全部 <i className="fa fa-angle-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 资源卡片2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div className="h-48 overflow-hidden">
                            <Image width={600} height={400} src="https://picsum.photos/id/25/600/400" alt="数字教材" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">教材资源</span>
                                <span className="ml-auto text-gray-500 text-sm"><i className="fa fa-eye mr-1"></i> 98.5万</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">数字教材中心</h3>
                            <p className="text-gray-600 mb-4">正版数字教材库，支持在线阅读和离线下载，包含各学科、各版本教材资源</p>
                            <a href="#" className="text-primary font-medium inline-flex items-center">
                                查看全部 <i className="fa fa-angle-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                    {/* 资源卡片3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div className="h-48 overflow-hidden">
                            <Image width={600} height={400} src="https://picsum.photos/id/26/600/400" alt="教学课件" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">教学资源</span>
                                <span className="ml-auto text-gray-500 text-sm"><i className="fa fa-eye mr-1"></i> 76.3万</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">教学课件库</h3>
                            <p className="text-gray-600 mb-4">丰富的教学课件资源，包括PPT、教案、习题等，助力教师高效备课</p>
                            <a href="#" className="text-primary font-medium inline-flex items-center">
                                查看全部 <i className="fa fa-angle-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-custom">
                        浏览全部资源 <i className="fa fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>
    </section>
  );
}