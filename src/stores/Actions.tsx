import { ADD, SUBTRACT, ADD_NOTE } from './ActionTypes'

export const add = () => {
    return {
        type: ADD
    }
}

export const subtract = () => {
    return {
        type: SUBTRACT
    }
}

export const addnote = (note: string) => {
    return {
        type: ADD_NOTE,
        note
    }
}