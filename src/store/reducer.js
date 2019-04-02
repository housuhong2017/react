import{ ADD_TODO_ITEM,DEL_TODO_ITEM  } from '../action/ActionTypes';
import {combineReducers} from 'redux';

let counter=(state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'DEC':
            return state-1;
        case 'add_odd':
            return state+1;
        case 'add_async':
            return state+1;
        default:
            return state;
    }
}
combineReducers({counter});



let initValue = [1,2,3];
export default (state=initValue,action)=> {
    switch(action.type){
        case ADD_TODO_ITEM:
            return [...state,action.value];
            // let newState=JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);
            // return newState;
        case DEL_TODO_ITEM:
            return state.filter((item,index)=>{
                return index !== action.index
            });
            // let newState1=JSON.parse(JSON.stringify(state));
            // newState1.list.splice(action.index,1);
            // return newState1;   
        default:
            return state;
    }
}