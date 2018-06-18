const express = require('express')
const router = express.Router()
const db =require('./models/db')

const userController = require('./controllers/user')
const topicController = require('./controllers/topic')
const commentController = require('./controllers/comment')
const sessionController = require('./controllers/session.js')


// 处理session验证 中间件
function checkLogin(req, res, next) {
	if (!req.session.user) {
		return res.status(401).json({
			err: 'Unauthorized'
		})
	}
	next()
}

// 验证用户修改 删除话题的权限
async function checkTopic(req, res, next) {
	try {
		const { id } = req.params
		const [topic] = await db.query(`select * from topics where id=${id}`)
		if (!topic) { return res.status(404).json({ error: 'topic not found'})}
		if (topic.user_id !== req.session.user.id) {
			return res.status(400).json({ error: 'action invalid' })
		}
		next()
	} catch (err) {
		next(err)
	}
}

/*
	用户资源
 */

router
	.get('/users', userController.list)
	.post('/users', userController.create)
	.patch('/users/:id', userController.update)
	.delete('/users/:id', userController.destroy)

/*
	话题资源
 */

router
	.get('/topics', topicController.list)
	.get('/topics/num', topicController.getListNum)
	.get('/topics/:id', topicController.getTopicById)
	.post('/topics', checkLogin, topicController.create)
	.patch('/topics/:id', checkLogin, checkTopic, topicController.update)
	.delete('/topics/:id', checkLogin, checkTopic, topicController.destroy)
/*
	评论资源
 */

router
	.get('/comments', commentController.list)
	.post('/comments', checkLogin, commentController.create)
	.patch('/comments/:id', checkLogin, commentController.update)
	.delete('/comments/:id', checkLogin, commentController.destroy)

/*
	会话资源
 */

router
	.get('/session', sessionController.get)
	.post('/session', sessionController.create)
	.delete('/session', sessionController.destroy)

module.exports = router