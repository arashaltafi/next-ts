export interface State {
    count: number;
}

export type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };

export const initialState: State = {
    count: 0,
};

export function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error(`Unknown action`);
    }
}
