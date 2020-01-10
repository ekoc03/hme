import { ADD_TIMER, SELECT_TIMER } from '../actions/timerCheckbox';

export default (state = {timers: [], selectedTimer: ''}, action) => {
    switch (action.type) {
        case ADD_TIMER:
            const timers = [...state.timers, action.payload];
            return {
                ...state,
                timers
            }
        case SELECT_TIMER:
            return {
                ...state,
                selectedTimer: action.payload
            }
        default:
        return state
    }
}
