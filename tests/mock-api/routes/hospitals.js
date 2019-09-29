const Hospitals = require('../resources/hospitals')

module.exports = (app) => {
	app.get('/api/hospitals', (request, response) => {
		response.json(Hospitals.all)
	})
}
