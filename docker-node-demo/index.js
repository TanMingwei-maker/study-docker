const express = require('express');
const mysql = require('mysql2/promise'); // 使用 promise 版本
const app = express();
const port = 3000;

// 创建数据库连接池
const pool = mysql.createPool({
  // 注意：这里的 host 必须填 docker-compose.yml 里的服务名 'db'
  // 不能填 'localhost'，因为 localhost 指的是容器自己
  host: 'db', 
  user: 'user',
  password: 'password',
  database: 'my_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/', async (req, res) => {
  let dbStatus = 'Checking connection...';
  let dbVersion = 'Unknown';

  try {
    // 尝试查询数据库版本
    const [rows] = await pool.query('SELECT VERSION() as version');
    dbStatus = 'Connected! ✅';
    dbVersion = rows[0].version;
  } catch (error) {
    dbStatus = `Connection Failed ❌: ${error.message}`;
    console.error(error);
  }

  res.send(`
    <div style="text-align: center; padding-top: 50px;">
      <h1 style="color: #4CAF50;">Hello from Node.js Container! 🚀</h1>
      <p>This is a dynamic server-side application.</p>
      <p>Node.js Version: ${process.version}</p>
      
      <div style="margin-top: 20px; padding: 20px; background: #f0f0f0; display: inline-block; border-radius: 8px;">
        <h3>Database Status</h3>
        <p>Status: <strong>${dbStatus}</strong></p>
        <p>MySQL Version: <strong>${dbVersion}</strong></p>
        <p>Host: <strong>db</strong> (Docker Service Name)</p>
      </div>

      <p style="margin-top: 20px;">Current Time: ${new Date().toLocaleString()}</p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});