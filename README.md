# 美熙有限公司官方网站

这是美熙有限公司的官方网站源代码，使用Next.js和Tailwind CSS构建。

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [TypeScript](https://www.typescriptlang.org/) - 类型化JavaScript

## 功能特性

- 响应式设计，适配各种屏幕尺寸
- 现代化UI界面
- 首页展示公司概览和服务亮点
- 关于我们页面，包含公司历史和团队介绍
- 产品服务页面，展示公司提供的产品和服务
- 新闻动态页面，展示公司新闻和行业资讯
- 联系我们页面，包含联系表单和公司联系信息

## 如何运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 运行生产版本

```bash
npm start
```

## 项目结构

```
/
├── public/            # 静态资源
├── src/               # 源代码
│   ├── app/           # Next.js App Router 页面
│   │   ├── about/     # 关于我们页面
│   │   ├── contact/   # 联系我们页面
│   │   ├── news/      # 新闻动态页面
│   │   ├── services/  # 产品服务页面
│   │   ├── layout.tsx # 根布局组件
│   │   └── page.tsx   # 首页
│   └── components/    # 可复用组件
│       ├── Navbar.tsx # 导航栏组件
│       └── Footer.tsx # 页脚组件
├── .gitignore         # Git忽略文件
├── next.config.ts     # Next.js配置
├── package.json       # 项目依赖
├── README.md          # 项目说明
└── tsconfig.json      # TypeScript配置
```

## 后续开发

- 集成真实的后端API
- 添加多语言支持
- 实现新闻详情页
- 添加搜索功能
- 集成更多交互动画

## 许可证

[MIT](LICENSE)

# 使用Node.js官方镜像作为基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制所有文件
COPY . .

# 构建应用
RUN npm run build

# 生产环境阶段
FROM node:18-alpine AS runner

WORKDIR /app

# 设置为生产环境
ENV NODE_ENV=production

# 复制必要文件
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
