import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.action"; 
import {Todo} from "../models/Todo";

const initialstate: Todo[]=[
    {title:"Todo 1"},
];

export function TodoReducer(state= initialstate,action:ActionParent){
    switch(action.type){
        case TodoActionType.Add:
            return [...state,action.payload]
        case TodoActionType.Remove:
         let newState=[...state];
         newState.splice(action.payload,1)
         return newState
        default :
        return state;
    }
}