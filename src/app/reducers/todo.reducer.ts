import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.action"; 
import {Todo} from "../models/Todo";

const initialstate: Todo[]=[
    {titile:"Todo 1"},
    {titile:"Todo 2"},
    {titile:"Todo 3"},
];

export function TodoReducer(state= initialstate,action:ActionParent){
    switch(action.type){
        default :
        return state;
    }
}