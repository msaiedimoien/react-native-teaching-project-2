import React from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {

        case 'get_blogposts':
            return action.payload;

        case 'add_blogpost':
            return [...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                }];

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });

        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);

            default:
            return state;
    };
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({type: 'get_blogposts', payload: response.data})
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        try {
            const response = await jsonServer.post('/blogposts', {title, content});
            const id = response.data.id;

            if(response.status === 201)
            {
                dispatch({type: 'add_blogpost', payload: {id, title, content}});
                if (callback) {
                    callback();
                }
            }
        } catch (err) {
            alert(err);
        }
    };
};

const editBlogPost = dispatch => {
    return ( id, title, content, callback ) => {
        dispatch({type: 'edit_blogpost', payload: { id, title, content }});
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        try {
            const response = await jsonServer.delete(`/blogposts/${id}`);
            if(response.status === 200)
            {
                dispatch({type: 'delete_blogpost', payload: id})
            }
        }catch (err) {
            alert(err);
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
    []
);