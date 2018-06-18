const moment = require('moment')
const db = require('../models/db')
exports.list = async (req, res, next) => {
	try {
		const { topic_id } =req.query
		// const sqlStr = `select * from comments where topic_id=${topic_id}`
		const sqlStr = `select comments.id, comments.content, comments.create_time,
			comments.modify_time, comments.topic_id,comments.user_id, users.username as username
			from comments left join users
			on comments.user_id=users.id
			where topic_id=${topic_id}
			`
		const comments = await db.query(sqlStr)
		res.status(200).json(comments)
	} catch (err) {
		next(err)
	}
}

exports.create = async (req, res, next) => {
	try {
		const body = req.body
		const sqlStr = `
			insert into comments(content, create_time, modify_time, topic_id, user_id)
			values ('${body.content}', '${moment().format('YYYY-MM-DD hh:mm:ss')}', '${moment().format('YYYY-MM-DD hh:mm:ss')}', '${body.topic_id}', '${req.session.user.id}')
		`
		const {insertId} = await db.query(sqlStr)
		const [comment] = await db.query(`select * from comments where id=${insertId}`)
		res.status(201).json(comment)
	} catch (err) {
		next(err)
	}
}

exports.update = async (req, res, next) => {

}

exports.destroy = async (req, res, next) => {
	
}