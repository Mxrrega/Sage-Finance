import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import {UserContext} from "./Context/UserContext";
import { faArrowDown, faArrowUp, faBuildingColumns, faWallet } from "@fortawesome/free-solid-svg-icons";
import Receitas from "./Receitas";
import Despesas from "./Despesas";
import { ReceitasContext } from "./Context/ReceitasContext";

export default function Home() {
  
  const [receitas, setReceitas] = useState(false);
  const [despesas, setDespesas] = useState(false);
  
  const saldo = 2500.00; 

  const receitassaldo = 1000.00;

  const despesassaldo = 1000.00;

  const {usuario} = useContext( UserContext )

  const { somaReceitas } = useContext(ReceitasContext);

  if (receitas === true) {
    return(
      <Receitas handle={ setReceitas }/>
    )
  }
  function exibirareceitas() {
    setReceitas(true)
  }

  if (despesas === true) {
    return(
      <Despesas handle={ setDespesas }/>
    )
  }
  function exibirdespesas() {
    setDespesas(true)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTextSmall}>Saldo em Contas</Text>
        <Text style={styles.headerTextBig}>R$ {saldo.toFixed(2)}</Text>
        <TouchableOpacity style={styles.caixareceitas} onPress={exibirareceitas}>
          <View style={styles.bolareceitas}>
            <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} size={20} />
          </View>
          <View>
          <Text style={styles.bottomText}>Receitas</Text>
            <Text style={styles.subbottomTextreceitas}>R${somaReceitas}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixadespesas} onPress={exibirdespesas}>
        <View style={styles.boladespesas}>
            <FontAwesomeIcon icon={faArrowDown} style={{color: "#ffffff",}} size={20} />
          </View>
          <View style={styles.subBottomContainer}>
          <Text style={styles.bottomText}>Despesas</Text>
            <Text style={styles.subbottomText}>R${despesassaldo.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
      <Text>Bem Vindo: {usuario}</Text>

        <View style={styles.box}>
        <Text style={styles.divisionText}>Contas</Text>
          <View style={styles.divcontasbox}>

            <View style={styles.contasContBox}>
              <View>
                <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#ffffff",}} size={24} />
              </View>
              <View style={styles.textBoxContas}>
              <Text style={styles.NomeTipo}>Banco</Text>
              <Text style={styles.somaBanco}>R$5.000,00</Text>
              </View>
            </View>
            <View style={styles.contasContBox}>
              <View>
                <FontAwesomeIcon icon={faWallet} style={{color: "#ffffff",}} size={24} />
              </View>
              <View style={styles.textBoxContas}>
              <Text style={styles.NomeTipo}>Carteira</Text>
              <Text style={styles.somaBanco}>R$2.000,00</Text>
              </View>
            </View>
            <View style={styles.boxlinha}>
              <View style={styles.linha}></View>
            </View>
            <View style={styles.totalContas}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textTotalNum}>R$5.000,00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2C3E50",
    paddingVertical: 70, 
    alignItems: "center",
    position: "relative",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
  },
  headerTextSmall: {
    fontSize: 10, 
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    opacity: 0.7, 
  },
  headerTextBig: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "white",
  },
  caixareceitas: {
    position: "absolute",
    bottom: 3,
    left: 0,
    padding: 10,
    flexDirection: 'row',
  },
  bolareceitas: {
    width: 50,
    height: 50,
    backgroundColor: "#45B500",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  bottomText: {
    fontSize: 14,
    color: "white",
    fontWeight: 'bold'
  },
  subbottomTextreceitas: {
    fontSize: 20,
    color: "green",
    fontWeight: 'bold'
  },
  boladespesas: {
    width: 50,
    height: 50,
    backgroundColor: "#DB0000",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  subbottomText: {
    fontSize: 20,
    color: "red",
    fontWeight: 'bold',
  },
  caixadespesas: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    flexDirection: 'row',
  },
  box: {
    marginVertical: 10, 
    marginHorizontal: 10,
  },
  divisionText: {
    color: "#8D8D8D",
    fontSize: 20,
    textAlign: "left", 
    bottom: -5,
    fontWeight: 'bold'
  },

  divcontasbox: {
    justifyContent: 'center',
    top: 20,
    backgroundColor: "#2C3E50",
    borderRadius: 20,
  },
  contasContBox: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: 25,
    marginBottom: 15
  },
  textBoxContas: {
    left: 15
  },
  NomeTipo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  somaBanco: {
    color: '#45B500',
    fontWeight: 'bold',
    fontSize: 12,
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
  totalContas: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    left: 25
  },
  textTotalNum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    right: 20
  }
  
});
