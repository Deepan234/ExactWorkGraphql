import { ActionTypes } from "../Action/ActionTypes";




const intialStates = {
    school:[],
}

const SchoolReducers = (state=intialStates,action) => {
    let newState ={...state};
    switch(action.type){
        case ActionTypes.GET_ALL_SCHOOLS:
            console.log(action.payload);
            newState.school = action.payload;
            break;

        default:
            newState = state;

    }

    return newState;
}

export default SchoolReducers;