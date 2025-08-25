export default function ServicesPage() {
  return (
    <section id="services" className="py-16 bg-white">
      {/* 原#services部分内容 */}
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">服务大厅</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">提供各类教育政务服务事项和应用，让您的教育相关事务办理更便捷</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* 服务项1 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-graduation-cap text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">学历学位认证</h3>
                        <p className="text-gray-600 text-sm">提供学历学位查询与认证服务</p>
                    </div>

                    {/* 服务项2 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-book text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">考试服务</h3>
                        <p className="text-gray-600 text-sm">各类考试报名、成绩查询等服务</p>
                    </div>

                    {/* 服务项3 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-briefcase text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">就业服务</h3>
                        <p className="text-gray-600 text-sm">提供就业信息与指导服务</p>
                    </div>

                    {/* 服务项4 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-plane text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">留学服务</h3>
                        <p className="text-gray-600 text-sm">出国留学相关咨询与服务</p>
                    </div>

                    {/* 服务项5 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-id-card text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">学籍管理</h3>
                        <p className="text-gray-600 text-sm">学籍查询、异动等管理服务</p>
                    </div>

                    {/* 服务项6 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-trophy text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">竞赛活动</h3>
                        <p className="text-gray-600 text-sm">各类教育竞赛活动报名与信息</p>
                    </div>

                    {/* 服务项7 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-credit-card text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">缴费服务</h3>
                        <p className="text-gray-600 text-sm">教育相关费用在线缴纳</p>
                    </div>

                    {/* 服务项8 */}
                    <div className="bg-light rounded-xl p-6 text-center card-hover">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa fa-ellipsis-h text-primary text-xl"></i>
                        </div>
                        <h3 className="font-bold mb-2">更多服务</h3>
                        <p className="text-gray-600 text-sm">其他教育相关服务事项</p>
                    </div>
                </div>
            </div>
    </section>
  );
}