const TMDB_BASE_URL = 'https://api.themoviedb.org/3'; // 这行是关键，之前可能被误删了
const axios = require('axios');
// 后面的缓存、函数逻辑保持不变...
// 构建 TMDB 请求 URL（拼接 API 密钥）
const API_KEY = process.env.TMDB_API_KEY; // 从 Vercel 环境变量获取密钥
// 处理 URL 参数拼接：如果原路径已有 ? 参数就用 & 连接，没有就用 ? 开头
const tmdbUrl = `${TMDB_BASE_URL}${fullPath}${fullPath.includes('?') ? '&' : '?'}api_key=${API_KEY}`;

// 构建请求配置（无需修改 Authorization 部分，保留原逻辑）
const config = {};
if (authHeader) {
    config.headers = {
        'Authorization': authHeader
    };
}
