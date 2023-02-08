import { FlatList, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../styles';
import Card from './Card';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context';

const HomeScreen = ({ navigation }) => {

    const { notes, addNote } = useContext(AppContext)

    console.log('home screen was loaded')

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={notes}
                renderItem={({ item }) => <Card navigation={navigation} note={item} />}
            />
            <Button 
                title='add a note'
                onPress={() => addNote('New Note')}
            ></Button>
        </SafeAreaView>
    )
}




export default HomeScreen