const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'test_back',
})

connection.connect(err => {
	if (err) {
		console.error('Error connecting to database: ', err)
		return
	}
	console.log('Connected to database')
})

module.exports = { connection }
