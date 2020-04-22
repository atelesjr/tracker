import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } =  useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={ clearErrorMessage }           
            />
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={ signin }
                submitButtonText="Sign In"
            />
            <NavLink 
                text="Don't have an accoutn? Sign Up instead!"
                routeName="Signup"
            />
        </View>

    );

};

SigninScreen.navigationOptions =  {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;

/* <NavigationEvents
                onWillFocus={() => {}}  // function to be called before navigation to this screen
                onDidFocus={}           // function to be called after the transintion of navigation for this screen.
                onWillBlur={}           // function called when havigate away from screen
                onDidBlur={}            //function called after the transition to navigate away from this screen
/> 
*/