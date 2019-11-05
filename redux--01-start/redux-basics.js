
// 1 - use NodeJS import syntax - only required b/c want to show this with Nodejs first
const redux = require('redux')

//2 - Store - createStore is a function which allows us to create a new redux store 
const createStore = redux.createStore;


//5 - Initial State - in rootReducer, use featuer provided by ES6 and initialize the rootReducer function with a default value
const initialState = {
    counter: 0
}
//4- Reducer- store needs to be initialized with a reducer, the only thing that may update the state in the end, that's why we need to pass reducer to createStore(reducer) function b/c its so connected
//Reducer gets two arguments - state and action & has to return 1 thing - the updated state
//Simpliest reducer you can write just returns state
//When you add state = initialState, now it will take initialState whenever stat is undefined

//7- In reducer, we get action in second arg so we cna react to different type of actions
//DO NOT set stateCounter ++ which would increment and return state b/c its NOT immutable, you're mutating original state. Instead, you return a new JS object where you MAY first copy the old state w/ spread operator and then override the one property you want to adjust, the counter
//After we do this, we see a different console.log of 11 

const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + 10
        }

    }
    return state
}


//3 - Create store - however this will hold an undefined state, we can veritfy this  by console.log - we need to do this by typing node filename - node redux-basics.js - this executes the file and spits out any console.log in the terminal //This is because we forgot to intialize the state. Set up a const named initilaized state, a Javascript object though theroetically it can be a number - doesn't have to be an object.

const store = createStore(rootReducer)
console.log(store.getState())



//6 - Dispatching Action. An action is dispatched by access the store and calling dispatch, a function which takes an argument - an action - a Javascript object which needs to have a type property, you can also pass some optional payload
store.dispatch({ type: "INC_COUNTER" })
store.dispatch({ type: "ADD_COUNTER", value: 10 })
//State will now be 0 - counter 0 twice. First is from first console.log statement. Second stems from this console.log - when we dispatched our actions. We still have counter of 0. 
console.log(store.getState())

//Subscription