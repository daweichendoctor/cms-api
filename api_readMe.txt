// api接口 api               传参            返回
// user
router
  .get('/users')          req.query   res.status(200).json(await db.query(sqlStr))
  .post('/users')         req.body    res.json(user)

// session
router
  .get('/session')        no          error/{user} = req.session
  .post('/session')       req.body    req.session.user
  .delete('/session')     no          {}

// topic
router
  .get('/topics')        no/?_page _limit   topics [] 
  .get('/topics/num')    no            {length: topic.length}
  .get('/topics/:id')    req.params    [topic]
  .post('/topics')       req.body      [topic]   //(db.query(insert)).insertId    //login
  .patch('/topics/:id')  req.params    req.body  [topic] //update query //login  topic
  .delete('/topics/:id') req.params    {}   //login  topic

// comment
router
  .get('/comments')     query topic_id   comments []  //联表查询 包含user.username
  .post('/comments')    req.body       [comment]   
