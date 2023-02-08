import { useFonts } from 'expo-font'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import Page from './components/Page';
import {useState, useEffect} from 'react'
import { AppContext } from './context';



const Stack = createNativeStackNavigator();



export default function App() {

  const [notes, setNotes] = useState([
    {
        "id": 1,
        "text": "Adam"
    },
    {
        "id": 2,
        "text": "Robert"
    },
    {
        "id": 3,
        "text": "Soheil"
    }
  ])

  const [fontsLoaded] = useFonts({
    'play-fair': require('./assets/fonts/Cookie,Playfair_Display/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'),
  });

  function editNotes(id, text) {
    console.log('edit notes was triggered', id)
    setNotes(notes.map((note) => 
    {
      if(note.id == id) {
        return { ...note, text: text }
      } else {
        return note
      }
    }
    ))
    
  }

  function addNote(text) {
    const prevId = notes[notes.length - 1].id
    setNotes([...notes, {id: prevId + 1, text: text}])
  }

  useEffect(() => {
    console.log(notes)
  }, [notes])

  return (
    <AppContext.Provider value={{notes, editNotes, setNotes, addNote}}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#131312'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Notes",
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen 
          name="Page"
          options={{
            title: 'Page',
            headerTintColor: 'white'
          }}
          component={Page} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}



