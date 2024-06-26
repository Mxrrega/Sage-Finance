import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


import Home from './Home';
import Transacoes from './Transacoes';
import Cartoes from './Cartoes';
import Opcoes from './Opcoes';
import Receitas from './Receitas';
import { UserContext } from './Context/UserContext';
import React, { useContext, useState } from 'react';
import Login from './Login';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Despesas from './Despesas';


const Tab = createMaterialBottomTabNavigator();

const Menu = ({ subMenu }) => {
  if (!subMenu) return null;

  const [receitas, setReceitas] = useState(false);
  const [despesas, setDespesas] = useState(false);
  const [cartoes, setCartoes] = useState(false);

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


  if (cartoes === true) {
    return(
      <Cartoes handle={ setCartoes }/>
    )
  }
  function exibirCartoes() {
    setCartoes(true)
  }

  return (
    <View style={styles.subMenu}>
      <View style={styles.boxopcoes}>
        <TouchableOpacity style={styles.opcoesbox} onPress={exibirareceitas}>
          <Text>Receita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opcoesbox} onPress={exibirdespesas}>
          <Text>Despesa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opcoesbox} onPress={exibirCartoes}>
          <Text>cartoes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BotaoMenu = ({ setSubMenu }) => (
  <TouchableOpacity onPress={() => setSubMenu((current) => !current)}>
    <View style={styles.circleButton}>
      <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
    </View>
  </TouchableOpacity>
);
  export default function Rotas({handle}) {

    const ButtonScreen = () => null;
 
    const { logado } = useContext(UserContext);
    const [subMenu, setSubMenu] = useState(false);

 
    if ( !logado ) {
      //return <Login />;
    }
 
    return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === ' ') {
              return <BotaoMenu setSubMenu={setSubMenu} />;
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 70,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: "center",
          },
        }}
      >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Transações"
            component={Transacoes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
          name=" "
          component={ButtonScreen}
        />
          <Tab.Screen
            name="Cartões"
            component={Cartoes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="credit-card"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Opções"
            component={Opcoes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cogs" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
        <Menu subMenu={subMenu} />
      </NavigationContainer>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxopcoes: {
      alignItems: "center" ,
      backgroundColor: 'white', 
      height: 100, 
      justifyContent: 'space-around',
      padding: 10, 
      width: "97%", 
      display:"flex", 
      flexDirection: "row",
    },
    opcoesbox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    circleButton: {
      justifyContent: 'center',
      display: 'flex',
    },
    botaomenu: {
      width: 50,
        height: 50,
        backgroundColor: "#2980B9",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subMenu: { 
      bottom: 150, 
      width: '100%', 
    }
  });

