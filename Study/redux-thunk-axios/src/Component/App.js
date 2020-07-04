import React from 'react';
import { useEffect } from 'react';
import {
    getPost,
    getUsers
} from '../modules/sample';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector(({sample}) => sample);
    const {
        post,
        users,
        loading:{
            GET_POST:loadingPost,
            GET_USERS:loadingUsers,
        },
    } = state;

    useEffect(() => {
        getPost(1)(dispatch);
    },[]);

    useEffect(() => {
        console.log(post,users,loadingPost,loadingUsers);
    });
    return (
        <div></div>
    );
}

export default App;