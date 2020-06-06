import React, { useContext } from 'react';
import { StyleSheet, Text,  FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';


const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    const { navigate } = navigation;

    return (
        <>
            <NavigationEvents onWillFocus={ fetchTracks } />
            <Text style={{ fontSize:48 }}> Track List </Text>
            <FlatList
                data={ state }
                keyExtractor={ item => item._id }
                renderItem={({ item }) => {
                    return ( 
                        <TouchableOpacity onPress={ () => navigate('TrackDetail', { _id: item._id }) }>
                            <ListItem chevron title={ item.name } />
                        </TouchableOpacity>
                    )                
                }}
            />
           
        </>
    );

};

const styles = StyleSheet.create({});

export default TrackListScreen;