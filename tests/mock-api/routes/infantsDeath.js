const Deaths = require('../resources/infantsDeaths')

module.exports = (app) => {
	app.get('/api/infantsDeaths', (request, response) => {
		response.json(Deaths.all)
	})
}
