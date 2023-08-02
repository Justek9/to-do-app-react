import { createStore } from 'redux'
import shortid from 'shortid'
import { strContains } from '../utils/strContains'
import initialState from './initialState'

//selectors
export const getFilteredCards = ({ cards, filterPhrase }, columnId) =>
	cards.filter(card => card.columnId === columnId && strContains(filterPhrase, card.title))

export const getAllColumns = ({ columns }) => {
	return columns
}

export const getListById = ({ lists }, id) => lists.filter(list => list.id === id)

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId)

export const getAllLists = ({ lists }) => {
	return lists
}

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload })
export const addCard = payload => ({ type: 'ADD_CARD', payload })
export const search = payload => ({ type: 'SEARCH', payload })
export const addList = payload => ({ type: 'ADD_LIST', payload })
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload})

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { ...action.payload.newColumn, id: shortid() }] }
		case 'ADD_CARD':
			return { ...state, cards: [...state.cards, { ...action.payload.newCard, id: shortid() }] }
		case 'SEARCH':
			return { ...state, filterPhrase: action.payload }
		case 'ADD_LIST':
			return { ...state, lists: [...state.lists, { ...action.payload.newList, id: shortid() }] }
		case 'TOGGLE_CARD_FAVORITE':
			return {
				...state,
				cards: state.cards.map(card => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card)),
			}
		default:
			return state
	}
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
