import { ADD, SUBTRACT, ADD_NOTE } from './ActionTypes'

const initialState = {
    counter: 0,
    name: 'Welcome to HU Redux Study',
    note: ''
}

export const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD:
            return { ...state, counter: state.counter + 1 }

        case SUBTRACT:
            return { ...state, counter: state.counter - 1 }

        case ADD_NOTE:
            return { ...state, note: action.note }

        default:
            return state
    }

}