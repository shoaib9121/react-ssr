import data from '../../pages/API/data.json';

/**
 * Actions
 */
 export const initialCards = () => {
  return {
    type: 'INITIAL_CARDS',
    cards: data
  }
}

export const addItem = (item) => {
  return {
    type: 'ADD',
    item
  }
}