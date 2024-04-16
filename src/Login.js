import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from './Context/UserContext';

export default function Login() {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState( false );

    const { Login } = useContext( UserContext );
    
    function realizaLogin()
    {
      Login( email, senha);
    }

  return (
    <View style={css.container}>
      <Image
            style={{flex:1, width: 50, height: 50}}
            source={require('../src/images/logo.png')}
          />
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