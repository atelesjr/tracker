import React, { useEffect, useContext} from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ReseolveAuthScreen = () => {
    const { tryLocalSignin } = useContext((AuthContext));

    useEffect( () => {
        tryLocalSignin();    
    }, []); //empty array means to run one time this screen is loaded
    
    return null;
};

export default ReseolveAuthScreen;