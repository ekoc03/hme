// Action types
export const ADD_TIMER = 'ADD_TIMER';
export const SELECT_TIMER = 'SELECT_TIMER';

export const addTimer = (timer) => ({
    type: ADD_TIMER,
    payload: timer
})


export const selectTimer = (timer) => ({
    type: SELECT_TIMER,
    payload: timer
})

