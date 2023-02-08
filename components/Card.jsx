import { TouchableOpacity, Text } from "react-native"

const Card = ({navigation, note}) => {


  console.log('card was loaded')

  return (
    <TouchableOpacity
        style={{ padding: 15, width: 350 , borderBottomWidth: 1, borderBottomColor: '#333' }}
        onPress={() => {
            navigation.navigate('Page', {note: note})
        }}
    >
        <Text style={{color: 'white'}} numberOfLines={1}>{note.text}</Text>
    </TouchableOpacity>
  )
}

export default Card