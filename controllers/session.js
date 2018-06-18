const md5 =require('blueimp-md5')
const db = require('../models/db')

// 获取会话状态
exports.get = (req, res, next) => {
	const {user} = req.session
	if(!user) {
		return res.status(401).json({
			error: 'Unauthorized'
		})
	}
	res.status(200).json(user)
}

// 创建会话 用户登录
exports.create = async (req, res, next) => {
	try {
		const body = req.body
		body.password = md5(md5(body.password))
		const sqlStr =
			`select * from users where email='${body.email}' and password='${body.password}'`
		const [user] = await db.query(sqlStr)
		if (!user) {
			return res.status(404).json({
				error: 'invalid email or passworld!'
			})
		}
		req.session.user = user
		res.status(201).json(req.session.user)
	} catch (err) {
		next(err)
	}
}

// 注销登录
exports.destroy = (req, res, next) => {
	if (req.session.user) { delete req.session.user }
	res.status(201).json({})
}
