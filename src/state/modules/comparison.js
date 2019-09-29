import axios from 'axios'

export const state = {
	compare: [],
}

export const getters = {
	comparable: state => state.compare,
	count: state => state.compare.length,
	isAlreadyAdded: state => id => state.compare.indexOf(id) > -1
}

export const mutations = {
	ADD_TO_COMPARE: (state, id) => state.compare.push(id),
	REMOVE_FROM_COMPARE: (state, id) => {
		let idx = state.compare.indexOf(id)

		if (idx > -1)
			state.compare.splice(idx, 1);
	},
}

export const actions = {}