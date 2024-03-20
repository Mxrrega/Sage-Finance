import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
  // Simulação de um valor de saldo
  const saldo = 2500.00; // Este valor pode ser substituído pelo valor real do saldo

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTextSmall}>Saldo em Contas</Text>
        <Text style={styles.headerTextBig}>R$ {saldo.toFixed(2)}</Text>
        <View style={styles.bottomLeft}>
          <Text style={styles.bottomText}>Receitas</Text>
          <View style={styles.subBottomContainer}>
            <FontAwesome name="arrow-up" size={30} color="green" />
            <Text style={styles.subbottomTextreceitas}>R$1000</Text>
          </View>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>Despesas</Text>
          <View style={styles.subBottomContainer}>
            <FontAwesome name="arrow-down" size={30} color="red" />
            <Text style={styles.subbottomText}>R$1000</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.divisionText}>Cartões de crédito</Text>
        <View style={styles.division}>
          <View style={styles.divisionIconTextContainer}>
            <FontAwesome name="bank" size={24} color="white" />
            <Text style={styles.divisionIconText}>Banco</Text>
          </View>
          <Text style={styles.divisionValueText}>R$5000,00</Text>
          <View style={styles.divisionIconTextContainer}>
            <FontAwesome name="user" size={24} color="white" />
            <Text style={styles.divisionIconText}>Carteira</Text>
          </View>
          <Text style={[styles.divisionValueText, { marginBottom: 10 }]}>R$2000,00</Text>
          <View style={{
            width: 340, // Largura da linha
            height: 4, // Altura da linha
            backgroundColor: 'gray', // Cor de fundo da linha (pode ser ajustada conforme necessário)
            opacity: 0.7, 
          }} />
          <Text style={styles.bottomLeftText}>Total</Text>
          <Text style={styles.bottomRightText}>R$1000</Text>
        </View>
      </View>
      <View>
        <Text style={styles.divisionText}>Cartões de crédito</Text>
        <View style={styles.division}>
          <View style={styles.divisionIconTextContainer}>
            <FontAwesome name="bank" size={24} color="white" />
            <Text style={styles.divisionIconText}>Banco</Text>
          </View>
          <Text style={styles.divisionValueText}>R$3000,00</Text>
          <View style={styles.divisionIconTextContainer}>
            <FontAwesome name="user" size={24} color="white" />
            <Text style={styles.divisionIconText}>Carteira</Text>
          </View>
          <Text style={[styles.divisionValueText, { marginBottom: 10 }]}>R$1500,00</Text>
          <View style={{
            width: 340, // Largura da linha
            height: 4, // Altura da linha
            backgroundColor: 'gray', // Cor de fundo da linha (pode ser ajustada conforme necessário)
            opacity: 0.7, 
          }} />
          <Text style={styles.bottomLeftText}>Total</Text>
          <Text style={styles.bottomRightText}>R$1000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  header: {
    backgroundColor: "#2C3E50",
    paddingVertical: 70, // Aumentei a distância entre o cabeçalho e as divisões
    alignItems: "center",
    position: "relative",
    borderRadius: 20, // Define o raio da borda do cabeçalho
  },
  headerTextSmall: {
    fontSize: 10, // Tamanho menor para "Saldo em Contas"
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    opacity: 0.7, // Define a opacidade para 70%
  },
  headerTextBig: {
    fontSize: 20, // Tamanho maior para o valor do saldo
    fontWeight: "bold",
    color: "white",
  },
  bottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
  },
  bottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
  },
  bottomText: {
    fontSize: 14,
    color: "white",
  },
  subbottomText: {
    fontSize: 20,
    color: "red",
  },
  subbottomTextreceitas: {
    fontSize: 20,
    color: "green",
  },
  subBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  division: {
    backgroundColor: "#2C3E50",
    height: 150, // Altura menor
    marginVertical: 18, // Mais separadas entre si
    marginHorizontal: 9,
    borderRadius: 20,
    justifyContent: "flex-start", // Alinha os itens à esquerda
    alignItems: "flex-start", // Alinha os itens ao topo
    flexDirection: "column", // Para alinhar ícones e textos na vertical
    paddingLeft: 10, // Adiciona um espaçamento à esquerda
  },
  divisionText: {
    color: "black",
    fontSize: 20,
    textAlign: "left", 
    marginBottom: -18,
  },
  divisionIconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divisionIconText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10, // Adiciona um espaço entre o ícone e o texto
  },
  divisionValueText: {
    color: "white",
    fontSize: 16,
    marginLeft: 34, // Adiciona um espaçamento para o valor
    opacity: 0.8, // Define a opacidade para 80%
  },
  bottomLeftText: {
    position: "absolute",
    bottom: 4,
    left: 10,
    color: "white",
    fontSize: 14,
  },
  bottomRightText: {
    position: "absolute",
    bottom: 4,
    right: 10,
    color: "white",
    fontSize: 14,
  },
};
