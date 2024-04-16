import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faCheck, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { ReceitasContext } from './Context/ReceitasContext';


export default function Receitas({ handle }) {
  
  const { valoreceita, setValorReceita, descricao, setDescricao, categoria, setCategoria, conta, setConta, saveData } = useContext(ReceitasContext);

  const adicionar = () => {
    saveData();
    Keyboard.dismiss();
    setValorReceita("");
    setDescricao("");
    setCategoria("");
    setConta("");
  };


  const [navHeight, setNavHeight] = useState(Dimensions.get('window').height * 0.85);

  useEffect(() => {
    const updateLayout = () => {
      const height = Dimensions.get('window').height;
      const navNewHeight = height * 0.85;
      setNavHeight(navNewHeight);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

 

  const categoriaconst = [
    { key: '1', value: 'Investimentos' },
    { key: '2', value: 'Casa' },
    { key: '3', value: 'Presente' },
    { key: '4', value: 'Prêmio' },
    { key: '5', value: 'Salário' },
    { key: '6', value: 'Outros' },
  ];
  const contaconst = [
    { key: '1', value: 'Banco Inter' },
    { key: '2', value: 'Banco Do Brasil' },
    { key: '3', value: 'Itaú' },
    { key: '4', value: 'Santander' },
    { key: '5', value: 'C6' },
    { key: '6', value: 'Nubank' },
    { key: '7', value: 'Carteira' },
  ];

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "#2980B9" }}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <TouchableOpacity style={styles.backButton} onPress={() => handle(false)}>
                <Text><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", }} /></Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>Nova Receita</Text>
            </View>
            <View style={styles.caixareceita}>
              <Text style={styles.valoreceitacss}>Valor da receita</Text>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='R$0,00'
                placeholderTextColor="#ffffff"
                value={valoreceita}
                onChangeText={ (digitado) => setValorReceita( digitado )}
              />
            </View>
          </View>
          <View style={[styles.nav, { height: navHeight }]}>
            <View style={styles.boxconteudo}>
              <FontAwesomeIcon icon={faMicrophone} style={styles.Iconbox} size={24} />
              <TextInput
                placeholder='Descrição'
                style={styles.descricaoInput}
                value={descricao}
                onChangeText={ (digitado) => setDescricao( digitado )}
              />
            </View>
            <View style={styles.boxlinha}>
              <View style={styles.linha}></View>
            </View>

            <View style={styles.boxconteudo}>
              <FontAwesomeIcon icon={faBookmark} style={styles.Iconbox} size={24} />
              <SelectList
                setSelected={(val) => setCategoria(val)}
                data={categoriaconst}
                save="value"
                placeholder='Categoria'
                boxStyles={{
                  width: 150,
                  height: 45,
                  marginTop: 10,
                  borderRadius: 30
                }}
              />
            </View>
            <View style={styles.boxlinha}>
              <View style={styles.linha}></View>
            </View>

            <View style={styles.boxconteudo}>
              <FontAwesomeIcon icon={faBookmark} style={styles.Iconbox} size={24} />
              <SelectList
                setSelected={(val) => setConta(val)}
                data={contaconst}
                save="value"
                placeholder='Conta'
                boxStyles={{
                  width: 150,
                  height: 45,
                  marginTop: 10,
                  borderRadius: 30
                }}
              />
            </View>
            <View style={styles.boxlinha}>
              <View style={styles.linha}></View>
            </View>

            <View style={styles.circleButton}>
              <TouchableOpacity
                style={styles.buttonconfirmar}
                onPress={adicionar}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
              </TouchableOpacity>
            </View>
          
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2980B9',
    padding: 20,
    height: '17%',
    width: '100%',
  },
  headerContent: {
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backButton: {
    marginRight: 10,
  },
  nav: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: 'flex',
  },
  caixareceita: {
    marginTop: 10
  },
  valoreceitacss: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    marginTop: 3,
    fontWeight: '900',
    fontSize: 25,
    color: 'white',
  },
  boxconteudo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconbox: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 15,
  },
  descricaoInput: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: '#000000',
  },
  boxlinha: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '90%',
    marginTop: 10,
  },
  circleButton: {
    position: 'absolute',
    bottom: 40, 
    alignSelf: 'center',
  },
  buttonconfirmar: {
    width: 50,
    height: 50,
    backgroundColor: "#88C437",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});