import { ActionTypes } from "./ActionTypes"

export const getAllSchool = (school) => {
    console.log(school);
    return{
        type:ActionTypes.GET_ALL_SCHOOLS,
        payload:school
    }
}