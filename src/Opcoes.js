import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export default function Opcoes() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const corHeader = modoEscuro ? '#2C3E50' : '#2980B9';

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Opções</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>🌙 Modo Escuro</Text>
        <Switch
          style={{ marginLeft: 'auto' }}
          value={modoEscuro}
          onValueChange={(value) => setModoEscuro(value)}
        />
        
      </View>   
      <View style={styles.divisionLine} />  
      <View style={styles.optionContainer}>
        <FontAwesome name="user" style={styles.icon} color="black" />
        <Text style={styles.optionText}>Usuário</Text>
      </View>     
    </View>
    
  );
}
  const styles = StyleSheet.create({
    header: {
      backgroundColor: corHeader,
      padding: 50,
    },
    headerText: {
      color: 'white',
      fontSize: 18,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
    optionText: {
      fontSize: 16,
    },
    divisionValueText: {
      marginBottom: 10,
    },
    divisionLine: {
      width: 340,
      height: 4,
      backgroundColor: 'gray',
      opacity: 0.4,
      marginLeft: 20,
    },
    icon: {
      fontSize: 20,
      marginRight: 10,
    },
  });



