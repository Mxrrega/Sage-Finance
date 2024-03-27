import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export default function Opcoes() 
{
  const {usuario} = useContext( UserContext);

  return (
    <View>
      <Text>Bem Vindo: {usuario}</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>Opções</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>🌙 Modo Escuro</Text>
        <Switch
          style={{ marginLeft: 'auto' }}
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
      backgroundColor: '#2980B9',
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



