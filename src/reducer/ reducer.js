export default function tasks(state = { tasks: [] }, action) {


    switch (action.type) {
        case 'ADD_TASK':
            return { tasks: action.payload }
        default:
            return state
    }

}
