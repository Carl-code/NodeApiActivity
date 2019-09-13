const express = require('express')

const postRouter = require('./routers/posts')

const app = express()

app.use(express.json())

app.use('/posts', postRouter)

app.get('/',(request,response)=>{
	response.json({
		message: 'Hola Mundo'
	})
})

module.exports = app