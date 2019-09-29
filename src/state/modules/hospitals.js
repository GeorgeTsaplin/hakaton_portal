import axios from 'axios'
import _ from 'lodash'

export const state = {
	hospitals: [],
}

export const getters = {
	hospitals: state => state.hospitals,
	addresses: state => state.hospitals.map(it => it.address),
	byIds: state => ids => state.hospitals.map(it => _.includes(ids, it.name) ? it : undefined).filter(it => it !== undefined)
}

export const mutations = {
	SET_HOSPITALS(state, hospitals) {
		state.hospitals = hospitals;
	},
}

export const actions = {
	init({commit, dispatch}) {
		dispatch('fetchHospitals')
	},

	fetchHospitals({commit, state, rootState}, force = false) {
		if (state.hospitals.length > 0 && !force) {
			return Promise.resolve(state.hospitals)
		}

		return axios.get(`http://localhost:8080/api/hospitals`)
			.then(response => response.data)
			.then(data => {
				commit('SET_HOSPITALS', data)
				return data
			})
	},
}
