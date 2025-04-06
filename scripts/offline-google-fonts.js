const fs = require('fs');
const path = require('path');
const https = require('https');
const { mkdirSync, existsSync } = fs;

// 要下载的字体
const fonts = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap'
];

// 创建字体缓存目录
const cacheDir = path.join(process.cwd(), '.next/cache/google-fonts');
if (!existsSync(cacheDir)) {
  mkdirSync(cacheDir, { recursive: true });
}

console.log('正在下载 Google 字体以供离线使用...');

// 下载字体
fonts.forEach((fontUrl, index) => {
  const fileName = `font-${index}.css`;
  const filePath = path.join(cacheDir, fileName);
  
  https.get(fontUrl, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
      data += chunk;
    });
    
    response.on('end', () => {
      fs.writeFileSync(filePath, data);
      console.log(`字体 ${index + 1}/${fonts.length} 已下载: ${fontUrl}`);
    });
  }).on('error', (err) => {
    console.error(`下载字体 ${fontUrl} 失败:`, err.message);
  });
});

console.log('完成! 字体已缓存，可以用于构建过程。'); 