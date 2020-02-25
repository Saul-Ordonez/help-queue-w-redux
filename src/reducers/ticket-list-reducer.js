export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TICKET':
            const { names, location, issue, timeOpen, id } = action;
            let newState = Object.assign({}, state, {
                [id]: {
                    names,
                    location,
                    issue,
                    timeOpen,
                    id,
                },
            });
            return newState;
        default:
            return state;
    }
};
