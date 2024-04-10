/*import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
});*/






/*import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importar FontAwesome

const TransacaoItem = ({ icon, icon2, color, text1, text2 }) => {
  return (
    <View style={styles.bottomContainer}>
      <FontAwesome name={icon} style={styles.icon} color={color} />
      <View style={styles.subBottomContainer}>
        <Text style={styles.subBottomText2}>{text1}</Text>
        <FontAwesome name={icon2} style={styles.icon2} color={color} />
        <Text style={[styles.bottomText, { marginLeft: 10 }]}>{text2}</Text>
      </View>
    </View>
  );
};

export default function Transacoes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transações</Text>
      </View>
      <TransacaoItem  icon2="arrow-down" color="green" text1="Balanço Mensal" text2="R$1000" />
      <TransacaoItem  icon2="arrow-down" color="green" text1="Saldo Atual" text2="R$1000" />
      <Text style={styles.diasemana}>Quarta-Feira - dia 5</Text>
      <TransacaoItem icon="shopping-cart" icon2="arrow-down" color="black" text1="Mercado" text2="R$500" />
      <TransacaoItem icon="money" icon2="arrow-up" color="black" text1="Investimentos" text2="R$750" />
      <TransacaoItem icon="user-circle" icon2="arrow-down" color="black" text1="Contas a pagar" text2="R$1200" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});*/


import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importar FontAwesome

// Componente reutilizável para representar cada item de transação
const TransacaoItem = ({ icon, icon2, color, text1, text2, valoremreal }) => {
  // Constante para representar a cor da seta com base no valor em reais
  const CorSeta = {
    definirCor(valor) {
      return valor >= 0 ? 'green' : 'red';
    }
  };

  return (
    <View style={styles.bottomContainer}>
      <FontAwesome name={icon} style={[styles.icon, { color: CorSeta.definirCor(valoremreal.valor) }]} />
      <View style={styles.subBottomContainer}>
        <Text style={styles.subBottomText2}>{text1}</Text>
        <View style={styles.subBottomTextContainer}>
          <FontAwesome name={icon2} style={[styles.icon2, { color: CorSeta.definirCor(valoremreal.valor) }]} />
          <Text style={[styles.bottomText, { marginLeft: 10 }]}>{text2}</Text>
        </View>
        <Text style={[styles.bottomText, { marginLeft: 10 }]}>{valoremreal.valor}</Text>
      </View>
    </View>
  );
};

// Constante para representar o valor em reais
const ValorEmReal = {
  valor: 0, // Valor inicial
  setValor(novoValor) {
    if (typeof novoValor === 'number') {
      this.valor = novoValor;
    } else {
      console.error('O valor deve ser um número.');
    }
  },
  obterValor() {
    return this.valor;
  }
};

// Função para formatar o texto do dia da semana e do dia do mês
const formatarDiaSemana = (diaSemana, diaMes) => `${diaSemana} - dia ${diaMes}`;

// Constante para representar o texto do dia da semana
const diaSemana = formatarDiaSemana("Segunda-Feira", 1);

// Constante para representar as contas do usuário
const contasUsuario = {
  mercado: {
    id: 1,
    icon: "shopping-cart",
    icon2: "arrow-down",
    color: "black",
    text1: "Mercado",
  },
  investimentos: {
    id: 2,
    icon: "money",
    icon2: "arrow-up",
    color: "black",
    text1: "Investimentos",
  },
  contasPagar: {
    id: 3,
    icon: "user-circle",
    icon2: "arrow-down",
    color: "black",
    text1: "Contas a pagar",
  },
  cartaoCredito: {
    id: 4,
    icon: "credit-card",
    icon2: "arrow-down",
    color: "black",
    text1: "Cartão de Crédito",
  },
};

export default function Transacoes() {
 
  // Definindo o valor em real para cada conta do usuário
  Object.values(contasUsuario).forEach(conta => {
    conta.valoremreal = ValorEmReal;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transações</Text>
      </View>
      <TransacaoItem {...contasUsuario.mercado} />
      <TransacaoItem {...contasUsuario.investimentos} />
      <TransacaoItem {...contasUsuario.contasPagar} />
      <TransacaoItem {...contasUsuario.cartaoCredito} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2C3E50',
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
    justifyContent: 'flex-start',
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
    justifyContent: 'space-between', // Ajuste para distribuir os elementos ao longo do eixo principal
    flex: 1, // Permitir que o subBottomContainer ocupe todo o espaço disponível
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
});
