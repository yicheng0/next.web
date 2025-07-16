import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "探索现代Web开发技术",
    excerpt: "深入了解React、Next.js和TypeScript等现代Web开发技术，构建高性能的用户界面。",
    author: "张三",
    date: "2024-01-15",
    readTime: "5 min",
    category: "技术",
    image: "/next.svg"
  },
  {
    id: 2,
    title: "设计系统的最佳实践",
    excerpt: "如何构建一个可扩展、一致的设计系统，提升团队协作效率和用户体验。",
    author: "李四",
    date: "2024-01-12",
    readTime: "8 min",
    category: "设计",
    image: "/vercel.svg"
  },
  {
    id: 3,
    title: "性能优化的艺术",
    excerpt: "Web应用性能优化的策略和技巧，让你的网站飞速运行。",
    author: "王五",
    date: "2024-01-10",
    readTime: "6 min",
    category: "性能",
    image: "/globe.svg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                TechBlog
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">首页</a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">技术</a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">设计</a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">关于</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            欢迎来到我的博客
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            分享技术见解、设计灵感和开发经验，探索数字世界的无限可能
          </p>
          <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-medium">
            开始阅读
          </button>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            精选文章
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {post.author[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {post.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                      阅读更多 →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechBlog</h3>
              <p className="text-slate-400">
                专注于分享高质量的技术文章和设计见解
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">分类</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">技术</a></li>
                <li><a href="#" className="hover:text-white transition-colors">设计</a></li>
                <li><a href="#" className="hover:text-white transition-colors">性能</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RSS订阅</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechBlog. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
