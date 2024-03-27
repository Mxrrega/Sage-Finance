import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importar FontAwesome

export default function Transacoes() {


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transações</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesome name="arrow-up" style={styles.icon} color="green" />
        <View style={styles.subBottomContainer}>
          <Text style={styles.bottomText}>Balanço Mensal</Text>
          <Text style={styles.subBottomText}>R$1000</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesome name="arrow-up" style={styles.icon} color="green" />
        <View style={styles.subBottomContainer}>
          <Text style={styles.bottomText}>Saldo Atual</Text>
          <Text style={styles.subBottomText}>R$1000</Text>
        </View>
      </View>
      <Text style={styles.diasemana}>Quarta-Feira - dia 5</Text>
      <View style={styles.bottomContainer}>
        <FontAwesome name="shopping-cart" style={styles.icon} color="black" />
        <View style={styles.subBottomContainer}>
          <Text style={styles.subBottomText2}>Mercado</Text>
          <FontAwesome name="arrow-down" style={styles.icon2} color="red" />
          <Text style={[styles.bottomText, { marginLeft: 10 }]}>R$500</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesome name="money" style={styles.icon} color="black" />
        <View style={styles.subBottomContainer}>
          <Text style={styles.subBottomText2}>Investimentos</Text>
          <FontAwesome name="arrow-up" style={styles.icon2} color="green" />
          <Text style={[styles.bottomText, { marginLeft: 10 }]}>R$750</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesome name="user-circle" style={styles.icon} color="black" />
        <View style={styles.subBottomContainer}>
          <Text style={styles.subBottomText2}>Contas a pagar</Text>
          <FontAwesome name="arrow-down" style={styles.icon2} color="red" />
          <Text style={[styles.bottomText, { marginLeft: 10 }]}>R$1200</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2980B9',
    padding: 50,
    alignItems: 'flex-start',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subBottomText: {
    fontSize: 14,
    marginLeft: 5,
  },
  subBottomText2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10, 
    marginBottom: 10, 
  },
  icon: {
    fontSize: 50,
    marginRight: 5,
  },
  icon2: {
    fontSize: 30,
    marginRight: 5,
  },
  diasemana: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20, 
    marginBottom: 10, 
  },
});








