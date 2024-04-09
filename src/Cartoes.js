import React from "react";
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
      {renderDivision(require("./images/cartaoelo.png"), "Outro texto na frente da imagem")}
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
};

