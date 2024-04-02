import { Button, Text, View, TouchableOpacity} from "react-native";



export default function Cartoes({handle}) 
{
  return (
    <View style={{ flex: 1, position: 'absolute', width: "100%", height: "100%", backgroundColor: "white" }}>
        <Text>Cartões</Text>
        <TouchableOpacity style={{marginTop: 80}} onPress={() => handle(false)}> 
          <Text>Voltar</Text>
        </TouchableOpacity>
    </View>
  )
}

