import axios from 'axios'
import _ from 'lodash'

export const state = {
	deaths: [],
}

export const getters = {
	byLocation: state => _.groupBy(state.deaths, death => death.region)
}

export const mutations = {
	SET_DEATHS(state, deaths) {
		state.deaths = deaths;
	},
}

export const actions = {
	init({dispatch}) {
		dispatch('fetchDeaths')
	},

	fetchDeaths({commit, state, rootState}, force = false) {
		if (state.deaths.length > 0 || force) {
			return Promise.resolve(state.deaths)
		}

		return axios.get(`http://localhost:8080/api/infantsDeaths`)
			.then(response => response.data)
			.then(data => {
				commit('SET_DEATHS', data)
				return data
			})
	},
}
