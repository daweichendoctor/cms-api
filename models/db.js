const mysql = require('mysql')
/*const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '102102aa',
	database: 'answer'
})
// connection.connect()
connection.query('select 1+1 as solution', function (err, results, fields) {
	if (err) throw err
	console.log(results[0].solution);
})
connection.end()*/

// 创建一个连接池 效率更高 不需要每次操作数据库都创建连接
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '102102aa',
	database: 'answer'
})
/*
		query 方法 查询返回数组 增删改返回对象
 */
exports.query = function (sqlStr) {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				return reject(err)
			}
			connection.query(sqlStr, (err, ...args) => {
				// 操作结束 尽早释放链接
				connection.release()
				if (err) {
					return reject(err)
				}
				resolve(...args)
			})
		})
	})
}