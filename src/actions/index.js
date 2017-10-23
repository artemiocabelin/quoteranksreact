export const CREATE_QUOTE = 'create_quote';
export const UP_VOTE = 'up_vote';
export const DOWN_VOTE = 'down_vote';
export const DELETE_QUOTE = 'delete_quote';

export function createQuote(quote) {
    return {
        type: CREATE_QUOTE,
        payload: quote
    };
}
export function upVote(idx) {
    return {
        type: UP_VOTE,
        payload: idx
    };
}
export function downVote(idx) {
    return {
        type: DOWN_VOTE,
        payload: idx
    };
}
export function deleteQuote(idx) {
    return {
        type: DELETE_QUOTE,
        payload: idx
    };
}