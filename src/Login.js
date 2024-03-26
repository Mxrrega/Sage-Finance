import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({setLogado}) {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState( false );

    async function realizaLogin()
    {
        if( email == "teste@gmail.com" && senha == "123") {
            await AsyncStorage.setItem( 'usuario' , email );
            setLogado(true);
        }
        else {
            setErro( true );
        }
    }
  return (
    <View style={css.container}>
        <View style={css.box}>
      <TextInput style={css.input} placeholder='Email' value={email} onChangeText={ (digitado) => setEmail( digitado )}/>
      <TextInput style={css.input} placeholder='Senha' value={senha} onChangeText={ (digitado) => setSenha( digitado )}/>
      {erro && <Text style={css.mensagemErro}>Senha ou email incorretos</Text>}
                <TouchableOpacity style={css.button} onPress={realizaLogin}>
                    <Text style={css.text}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      input: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        borderWidth: 0,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
      },
      button: {
        width: '100%',
        height: 40,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
      mensagemErro: {
        color: 'red',
        marginBottom: 10,
    },
    });