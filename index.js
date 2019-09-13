require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

const listenServer = function () {
	return new Promise((resolve, reject) => {
		server.listen(8081,() => {
			resolve()
		})
	})
}

async function main (){
	await dbConnect()
	console.log('DB CONNECTED')
	await listenServer()
	console.log('SERVER LISTENNING')
}

main()
 .then(() =>{
	 console.log('server listenning')
 })
 .catch(error =>{
	 console.error('ERROR:', error)
 })