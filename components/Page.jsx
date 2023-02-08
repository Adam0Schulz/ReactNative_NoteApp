import { StyleSheet, TextInput, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../styles';
import { AppContext } from '../context';
import { useContext } from 'react';


const ProfileScreen = ({ route, navigation }) => {

  const { note } = route.params
  const { editNotes, setNotes, notes } = useContext(AppContext)

  console.log('profile')

  return (
    <TextInput
      style={{ fontSize: 20, padding: 30, paddingTop: 40, backgroundColor: '#131312', minHeight: 800, color: 'white' }}
      multiline={true}
      onChangeText={(text) => editNotes(note.id, text)}
    >
      {note.text}
    </TextInput>
  )
}

export default ProfileScreen