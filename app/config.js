
module.exports = {
	serverPort: (process.env.NODE_ENV === 'production' ? process.env.PORT : 8080),
}