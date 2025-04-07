import { useReducer } from "react";
// useReducer is a hook that allows you to manage complex state logic in your functional components

type CounterState = {
    count: number
}

type UpdateAction={
    type: 'increment' | 'decrement' 
    payload: number

}

type ResetAction={
    type: 'reset'
}

const initialState = { count: 0 };

type CounterAction = UpdateAction | ResetAction
// Union type of UpdateAction and ResetAction
//Discriminated union type is a type that can be one of several different types, and it is used to represent a value that can take on different forms depending on the context in which it is used.



function reducer (state:CounterState,action: CounterAction){
    switch (action.type) {
        case 'increment':
    return {count: state.count + action.payload}
        case 'decrement':
    return {count: state.count - action.payload}
    case 'reset':
        return initialState
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}