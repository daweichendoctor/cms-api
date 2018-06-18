const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
	secret: 'cdw',
	resave: true,
	saveUninitialized: false,
	cookie: { maxAge: 60 * 1000 * 30 }
}))

/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3001");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/
app.use(router)




app.use((err, req, res,next) => {
	res.status(500).json({
		error: err.message
	})
})

app.listen(5000, () => {
	console.log('App is running at port 5000....')
})