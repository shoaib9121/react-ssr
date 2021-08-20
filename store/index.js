import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

/**
 * Initial State
 */
const startState = {
  cards: []
}


/**
 * Reducers
 */
export const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INITIAL_CARDS':
      return {
        cards: action.cards
      }
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item]
      }
    default:
      return state;
  }
}

/**
 * Create store
 * @returns 
 */
const store = (initialState = startState) => {
  return createStore(reducer, initialState)
}

export const initStore = createWrapper(store)