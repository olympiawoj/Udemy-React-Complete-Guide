
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


const rootReducer = (state = initialState, action) => {
    return state
}


//3 - Create store - however this will hold an undefined state, we can veritfy this  by console.log - we need to do this by typing node filename - node redux-basics.js - this executes the file and spits out any console.log in the terminal //This is because we forgot to intialize the state. Set up a const named initilaized state, a Javascript object though theroetically it can be a number - doesn't have to be an object.

const store = createStore(rootReducer)
console.log(store.getState())



//Dispatching Action

//Subscription