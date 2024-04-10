/*import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Cartoes({handle}) {
  
  

  const renderDivision = (source, text) => (
    <View style={styles.division}>
      <View style={styles.divisionIconTextContainer}></View>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  return (
    <View>
      <StatusBar />

      <View style={styles.header}>
      <TouchableOpacity onPress={() => handle(false)}>
          <Text style={styles.backIcon}>&#8592;</Text>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Cartão de Crédito</Text>
          <View style={styles.limiteContainer}>
            <FontAwesome name="money" size={24} color="white" />
            <View style={styles.limiteTextContainer}>
              <Text style={styles.limite}>Limite Disponível</Text>
              <Text style={styles.valor}>R$ 1000,00</Text>
            </View>
          </View>
        </View>
      </View>

      {renderDivision(require("./images/Mastercard-logo.svg.png"), "Cartão Mastercard")}
      {renderDivision(require("./images/cartaoelo.png"), "Cartão Elo")}
    </View>
  );
}

const styles = {
  header: {
    backgroundColor: "#2C3E50",
    padding: 30,
    flexDirection: "row",
  },
  backIcon: {
    color: "white",
    fontSize: 50,
    marginTop: -29,
  },
  headerTextContainer: {
    marginTop: 5,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    marginTop: -5,
    fontSize: 24,
  },
  limiteContainer: {
    flexDirection: "row",
    marginTop: 50,
    right: 60,
  },
  limiteTextContainer: {
    marginLeft: 12,
  },
  limite: {
    top: -10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  valor: {
    color: "white",
    top: -10,
  },
  division: {
    backgroundColor: "#2C3E50",
    height: 120,
    marginVertical: 18,
    marginHorizontal: 9,
    borderRadius: 20,
    paddingLeft: 10,
    flexDirection: "row", 
    alignItems: "center", 
  },
  image: {
    width: 70,
    height: 50,
  },
  text: {
    marginLeft: 10, 
    color: "white",
  },
};*/






/*
import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import MastercardLogo from "./images/Mastercard-logo.svg.png";
import CartaoElo from "./images/cartaoelo.png";

// Classe para representar o limite disponível
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

// Constante para o tipo de cartão
const cartaoCredito = {
  tipo: "Crédito",
};

// Constantes para os textos dos cartões
const cartoes = {
  mastercard: "Cartão Mastercard",
  elo: "Cartão Elo",
};

// Constantes para as informações da fatura
const fatura = {
  aberta: "Fatura Aberta",
  fechada: "Fatura Fechada",
};

// Objeto para representar o limite disponível
const limites = new Limite(1000); // Inicialmente definido como R$ 1000.00

export default function Cartoes({ handle }) {

  const mastercardImage = MastercardLogo;
  const eloImage = CartaoElo;

  const renderDivision = (source, text, imageStyle) => (
    <View style={styles.division}>
      <Image source={source} style={[styles.image, imageStyle]} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.faturaAberta}>{fatura.aberta}</Text>
    </View>
  );

  return (
    <View>
      <StatusBar />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => handle(false)}>
          <Text style={styles.backIcon}>&#8592;</Text>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Cartão de {cartaoCredito.tipo}</Text>
          <View style={styles.limiteContainer}>
            <FontAwesome name="money" size={24} color="white" />
            <View style={styles.limiteTextContainer}>
              <Text style={styles.limite}>Limite Disponível</Text>
              <Text style={styles.valor}>R$ {limites.obterLimite().toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>

      {renderDivision(mastercardImage, cartoes.mastercard, styles.mastercardImage)}
      {renderDivision(eloImage, cartoes.elo, styles.eloImage)}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2C3E50",
    padding: 30,
    flexDirection: "row",
  },
  backIcon: {
    color: "white",
    fontSize: 50,
    marginTop: -29,
  },
  headerTextContainer: {
    marginTop: 5,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    marginTop: -5,
    fontSize: 24,
  },
  limiteContainer: {
    flexDirection: "row",
    marginTop: 50,
    right: 60,
  },
  limiteTextContainer: {
    marginLeft: 12,
  },
  limite: {
    top: -10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  valor: {
    color: "white",
    top: -10,
  },
  division: {
    backgroundColor: "#2C3E50",
    height: 120,
    marginVertical: 18,
    marginHorizontal: 9,
    borderRadius: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 50,
  },
  text: {
    marginLeft: 10,
    color: "white",
  },
  faturaAberta: {
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  mastercardImage: {
    width: 50,
    height: 40,
  },
  eloImage: {
    width: 70,
    height: 20,
  },
});
*/


import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import MastercardLogo from "./images/Mastercard-logo.svg.png";
import CartaoElo from "./images/cartaoelo.png";
import CartaoDebito from "./images/cartaoDebito.png"; // Nova imagem para o cartão de débito

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
  debito: "Cartão de Débito", // Adicionando o tipo de cartão de débito
};

const fatura = {
  aberta: "Fatura Aberta",
  fechada: "Fatura Fechada",
};

const limites = new Limite(1000);

export default function Cartoes({ handle }) {

  const mastercardImage = MastercardLogo;
  const eloImage = CartaoElo;
  const cartaoDebitoImage = CartaoDebito; // Imagem para o cartão de débito

  const renderDivision = (source, text, imageStyle) => (
    <>
      <Image source={source} style={[styles.image, imageStyle]} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.faturaAberta}>{fatura.aberta}</Text>
    </>
  );

  // Função para renderizar o cartão de débito
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

      {/* Renderizar o cartão de débito */}
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
