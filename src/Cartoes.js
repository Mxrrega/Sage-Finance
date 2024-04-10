import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import MastercardLogo from "./images/Mastercard-logo.svg.png";
import CartaoElo from "./images/cartaoelo.png";
import CartaoDebito from "./images/cartaoDebito.png"; 

class Limite {
  constructor(valorInicial) {
    this.valor = valorInicial;
  }

  alterarLimite(novoValor) {
    if (typeof novoValor === 'number' && novoValor >= 0) {
      this.valor = novoValor;
    } else {
      console.error('O novo valor do limite deve ser um número positivo.');
    }
  }

  obterLimite() {
    return this.valor;
  }
}

const tipoCartao = {
  credito: "Crédito",
  debito: "Débito",
};

const cartoes = {
  mastercard: "Cartão Mastercard",
  elo: "Cartão Elo",
  debito: "Cartão de Débito", 
};

const fatura = {
  aberta: "Fatura Aberta",
  fechada: "Fatura Fechada",
};

const limites = new Limite(1000);

export default function Cartoes({ handle }) {

  const mastercardImage = MastercardLogo;
  const eloImage = CartaoElo;
  const cartaoDebitoImage = CartaoDebito; 

  const renderDivision = (source, text, imageStyle) => (
    <>
      <Image source={source} style={[styles.image, imageStyle]} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.faturaAberta}>{fatura.aberta}</Text>
    </>
  );

  const renderCartaoDebito = () => {
    return renderDivision(cartaoDebitoImage, cartoes.debito, styles.debitoImage);
  };

  return (
    <>
      <StatusBar />
      <TouchableOpacity onPress={() => handle(false)} style={styles.backIconContainer}>
        <Text style={styles.backIcon}>&#8592;</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Cartão de {tipoCartao.credito}</Text>
      <View style={styles.limiteContainer}>
        <FontAwesome name="money" size={24} color="white" />
        <View style={styles.limiteTextContainer}>
          <Text style={styles.limite}>Limite Disponível</Text>
          <Text style={styles.valor}>R$ {limites.obterLimite().toFixed(2)}</Text>
        </View>
      </View>

      {renderDivision(mastercardImage, cartoes.mastercard, styles.mastercardImage)}
      {renderDivision(eloImage, cartoes.elo, styles.eloImage)}

      {renderCartaoDebito()}
    </>
  );
}

const styles = StyleSheet.create({
  backIconContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  backIcon: {
    color: "white",
    fontSize: 50,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    marginLeft: 10,
    fontSize: 24,
  },
  limiteContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  limiteTextContainer: {
    marginLeft: 12,
  },
  limite: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  valor: {
    color: "white",
  },
  image: {
    width: 70,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    color: "white",
  },
  faturaAberta: {
    color: "white",
    marginLeft: 10,
  },
  mastercardImage: {
    width: 50,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  eloImage: {
    width: 70,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  // Estilos para o cartão de débito
  debitoImage: {
    width: 70,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
  },
});
