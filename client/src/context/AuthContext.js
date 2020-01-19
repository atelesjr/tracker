import createDataContext from './createDataContex';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    };
};

const signup =  dispatch  => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post(
                '/signup',
                { email, password }
            );
            console.log( response.data );
        } catch(err){
            console.log( err.response.data );
        }
    };
};

const signin = ( dispatch ) => {
    return ( { email, password }) => {
        

    };
};

const signout = ( dispatch ) => {
    return ( { email, password }) => {
        

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedin: false }
);