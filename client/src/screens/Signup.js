import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SingupScreen = ({ navigation }) => {
    const { state, signup } =  useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <View style={ styles.container }>  
            <Spacer>
                <Text style={{ fontSize: 48 }} h3> Sing Up for Tracker </Text>
            </Spacer>
            <Spacer>
                <Input 
                    label ="Email" 
                    value={ email }
                    onChangeText={ setEmail }
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input 
                    secureTextEntry
                    label="Password"
                    value={ password }
                    onChangeText={  setPassword }
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button 
                    title=" SignUp"
                    onPress={ () => signup({ email, password }) }
                />

            </Spacer>
        </View>
    );

};

// SingupScreen.navigationOptions = () => {
//     return {
//         header: null
//     };
// };

SingupScreen.navigationOptions =  {
    header: null
};

const styles = StyleSheet.create({
    container: {
        //borderColor: 'red',
        //borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200

    }
});

export default SingupScreen;