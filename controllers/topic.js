const moment = require('moment')
const db = require('../models/db')
exports.list = async (req, res, next) => {
	let { _page=1, _limit = 20 } = req.query
	if (_page < 1) { _page = 1 }
	if (_limit < 1) { _limit = 1 }
	if (_limit > 20) { _limit = 20 }

	try {
		// limit num1, num2 从num1开始取num2条
		const sqlStr = `
			select * from topics order by id DESC limit ${(_page-1)*_limit},${_limit}
		`
		const topics = await db.query(sqlStr)
		console.log(topics)
		res.status(200).json(topics)
	} catch (err) {
		next(err)
	}
}
exports.getListNum = async (req, res, next) => {
	try {
		const sqlStr = `select * from topics`
		const topics = await db.query(sqlStr)
		res.status(200).json({ length: topics.length })
	} catch (err) {
		next(err)
	}
}
exports.getTopicById = async (req, res, next) => {
	try {
		const {id} = req.params
		const [topic] = await db.query(`select * from topics where id=${id}`)
		res.status(200).json(topic)
	} catch (err) {
		next(err)
	}
}
// 创建主题
exports.create = async (req, res, next) => {
	try {
		
		const body = req.body
		body.create_time = moment().format('YYYY-MM-DD hh:mm:ss')
		body.modify_time = moment().format('YYYY-MM-DD hh:mm:ss')
		body.user_id = req.session.user.id
		const sqlStr = `
			insert into topics(title, content, create_time, modify_time, user_id)
			values('${body.title}', '${body.content}', '${body.create_time}', '${body.modify_time}', '${body.user_id}')
		`
		/*
		query 方法 查询返回数组 增删改返回对象
		 */
		const ret = await db.query(sqlStr)
		const [topic] = await db.query(`select * from topics where id='${ret.insertId}'`)
		res.status(201).json(topic)
	} catch (err) {
		next (err)
	}


}

exports.update = async (req, res, next) => {
	try {
		const {id} = req.params
		const body = req.body
		const sqlStr = `
			update topics
			set title='${body.title}', content='${body.content}', modify_time='${moment().format('YYYY-MM-DD hh:mm:ss')}'
			where id=${id}
		`
		await db.query(sqlStr)
		const [updateTopic] = await db.query(`select * from topics where id=${id}`)
		res.status(201).json(updateTopic)
	} catch (err) {
		next(err)
	}
}

exports.destroy = async (req, res, next) => {
	try {
		const { id } = req.params
		const sqlStr = `delete from topics where id=${id}`
		await db.query(sqlStr)
		res.status(201).json({})
	} catch (err) {
		next(err)
	}
}