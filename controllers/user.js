const md5 = require('blueimp-md5')
const moment = require('moment')
const db = require('../models/db')
const sqlHelper = require('../utilities/sqlHelper')
exports.list = async (req, res, next) => {
	try {
		const andConditionStr = sqlHelper.andCondition(req.query)
		const sqlStr = `select * from users where ${andConditionStr}`
		console.log(sqlStr)
		res.status(200).json(await db.query(sqlStr))
	} catch (err) {
		next(err)
	}

}

exports.create = async (req, res, next) => {
	const body = req.body
	const sqlStr =
		`insert into \`users\`
			(username, password, email, avatar, gender, create_time, modify_time)
			values(
				'${body.username}',
				'${md5(md5(body.password))}',
				'${body.email}',
				'default-avatar.png',
				0,
				'${moment().format('YYYY-MM-DD hh:mm:ss')}',
				'${moment().format('YYYY-MM-DD hh:mm:ss')}'
		)`
	try {
		const ret = await db.query(sqlStr)
		// users 返回数组
		const users = await db.query(`select * from users where id = '${ret.insertId}'`)
		res.status(201).json(users[0])
	} catch (err) {
		next(err)
	}
}

exports.update = (req, res, next) => {

}

exports.destroy = (req, res, next) => {
	
}