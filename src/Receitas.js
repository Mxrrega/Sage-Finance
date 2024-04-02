import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Receitas({handle}) {
  return (
    <View style={{ flex: 1, position: 'absolute', width: "100%", height: "100%", backgroundColor: "#2980B9" }}>
        <View style={styles.header}>
        <TouchableOpacity  onPress={() => handle(false)}> 
          <Text>-----</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Receitas</Text>
      </View>
      <View style={styles.nav}>

      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#2980B9',
      padding: 50,
      alignItems: 'baseline',
      height: '15%',
      width: '100%',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },
      nav: {
        backgroundColor: 'white',
        height: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }
});