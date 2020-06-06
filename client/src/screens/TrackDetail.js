import React, { useContext} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const id = navigation.getParam('_id');

    const track = state.find( t => t.userId === id )
    console.log(state)
    return (
        <Text style={{ fontSize:48 }}>  details </Text>

    );

};

const styles = StyleSheet.create({});

export default TrackDetailScreen;