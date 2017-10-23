import { CREATE_QUOTE } from '../actions';
import { UP_VOTE } from '../actions';
import { DOWN_VOTE } from '../actions';
import { DELETE_QUOTE } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case CREATE_QUOTE:
            let id = 0;
            let quote = action.payload;
            quote.votes = 0;
            if(Object.keys(state).length === 0) {
                id = Object.keys(state).length + 1;
            } else {
                id = Object.keys(state)[Object.keys(state).length - 1] + 1;
            }
            return { ...state, [id] : quote };
        
        case UP_VOTE:
            const quoteId = action.payload;
            const newState = { ...state };
            newState[quoteId]['votes'] += 1;
            return newState;
        
        case DOWN_VOTE:
            const newStateToDownVote = { ...state };
            newStateToDownVote[action.payload]['votes'] -= 1;
            return newStateToDownVote;
        
        case DELETE_QUOTE:
            const newStateToDelete = { ...state };
            delete newStateToDelete[action.payload];
            return newStateToDelete;
        
        default:
            return state;
    }
}