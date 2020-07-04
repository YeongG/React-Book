import * as api from '../lib/api';

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILUER";

export const getPost = id => async dispatch => {
    dispatch({type:GET_POST});
    try {
        const {data} = await api.getPost(id);
        dispatch({
            type:GET_POST_SUCCESS,
            responseData:data,
        });
    } catch(err) {
        dispatch({
            type:GET_POST_FAILURE,
            errData:err
        });
        throw err;
    }
}

export const getUsers = () => async dispatch => {
    dispatch({type:GET_USERS});
    try {
        const {data} = await api.getUsers();
        dispatch({
            responseData:data,
            type:GET_USERS_SUCCESS
        });
    } catch(err) {
        dispatch({
            type:GET_USERS_FAILURE,
            errData:err
        });
        throw err;
    }
}

const initialState = {
    loading:{
        GET_POST:false,
        GET_USERS:false,
    },
    post:null,
    users:null,
};

const sampleReducer = (state = initialState,action) => {
    switch(action.type) {
        case GET_POST: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:true,
            },
        });
        case GET_POST_SUCCESS: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.responseData,
        });
        case GET_POST_FAILURE: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.errData,
        });
        case GET_USERS: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:true,
            },
        });
        case GET_USERS_SUCCESS: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:false,
            },
            users:action.responseData,
        });
        case GET_USERS_FAILURE: return ({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:false,
            },
            users:action.errData,
        });
        default: return state;
    }
}

export const thunkFunction = {
    getPost,
    getUsers
}

export default sampleReducer;